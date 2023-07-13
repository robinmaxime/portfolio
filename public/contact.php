<?php

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header('Access-Control-Allow-Methods: POST');
	
	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);
	
	if (empty($_POST['name']) && empty($_POST['email'])) die();
	
	if ($_POST) {
	
		// data
		$fullname = $_POST['name'];
		$subject = isset($_POST['object']) ? $_POST['object'] : "Demande de contact";
		$to = "robin.maxime44@gmail.com";
		$from = "contact@maximerobindev.com";
		$msg = $_POST['message'];
            
		$headers = "MIME-Version: 1.0\r\n";
		$headers.= "Content-type: text/html; charset=UTF-8\r\n";
		$headers.= "X-Mailer: PHP/" . phpversion() . "\r\n";
		$headers.= "From: " . $fullname . " <" . $from . ">\r\n";
		$headers.= "Reply-To: " . $_POST['email'];
            
		if (mail($to, $subject, $msg, $headers)) {
			http_response_code(200);
			echo json_encode(array(
				"sent" => true
			));
		} else {
			http_response_code(500);
			echo json_encode(array(
				"sent" => false,
				"message" => "Something went wrong"
			));
		}
	
		
	} else {
	
		// tell the user about error
		http_response_code(400);
		echo json_encode(array(
			"sent" => false, 
			"message" => "Something went wrong"
		));
		
	}

?>
import { useState } from 'react';
import Loader from '../../components/Loader';
/**
 * Composant affichant la section "Contact"
 * @returns JSX.element
 */
function Contact() {
    const [formSent, setFormSent] = useState(false);
    const [formError, setFormError] = useState(false);
    const [isSending, setIsSending] = useState(false);
    function handleSubmit(e) {
        // Empêche l'évènement pas défault (raffraichissement de la page)
        e.preventDefault();
        // Envoi du formulaire
        submitForm(e);
    }

    async function submitForm(e) {
        setIsSending(true);
        // Récupère les valeurs du formulaire
        const body = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            object: e.target.elements.object.value,
            message: e.target.elements.message.value,
        };
        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await response.json();

            data.sent ? setFormSent(true) : setFormError(true);
        } catch {
            setFormError(true);
        }
        setIsSending(false);
    }

    return (
        <div id="contact" className="contact container">
            <h2 className="contact__title">Contact</h2>
            {formSent || formError ? (
                <div
                    className={`contact__message${
                        formError ? ' contact__message--error' : ''
                    }`}
                >
                    {formSent
                        ? "Merci pour votre message. J'y répondrai dans les meilleurs délais."
                        : 'Une erreur est survenue.'}
                </div>
            ) : (
                <form
                    className="contact__form"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Nom *"
                    ></input>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Email *"
                    ></input>
                    <input
                        type="text"
                        name="object"
                        id="object"
                        placeholder="Objet"
                    ></input>
                    <textarea
                        name="message"
                        id="message"
                        required
                        placeholder="Message *"
                        rows="5"
                    ></textarea>
                    <div className="form__send">
                        <span></span>
                        <button
                            className="form__button button"
                            type="submit"
                            disabled={isSending ? true : false}
                        >
                            Envoyer
                        </button>
                        {isSending ? <Loader /> : null}
                    </div>
                </form>
            )}
        </div>
    );
}

export default Contact;

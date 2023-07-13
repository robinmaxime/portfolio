import { useState } from 'react';
import Modal from '../../components/Modal';

/**
 * Composant affichant le Footer
 * @returns JSX.element
 */
function Footer() {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="footer">
            <div>Maxime ROBIN, tous droits réservés 2023</div>
            <button
                className="footer__mention"
                onClick={() => setIsOpened(true)}
            >
                Mentions légales
            </button>
            <Modal isOpen={isOpened} handleClose={() => setIsOpened(false)}>
                <h3>Mentions légales</h3>
                <div>
                    <h4>Éditeur</h4>
                    <p>
                        Maxime ROBIN <br />
                        1 impasse du Ru <br />
                        44850 Saint Mars du Désert <br />
                        France <br />
                        Téléphone : +33 (0)6.23.52.06.34
                    </p>
                    <h4>Hébergement</h4>
                    <p></p>
                    <h4>Crédit</h4>
                    <p>
                        <a href="https://www.freepik.com/free-vector/cute-man-working-computer-with-coffee-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_20188201.htm#query=on%20a%20computer&position=7&from_view=keyword&track=ais">
                            Image by catalyststuff
                        </a>{' '}
                        on Freepik
                    </p>
                </div>
            </Modal>
        </div>
    );
}

export default Footer;

import { useState } from 'react';
import Modal from '../../components/Modal';

/**
 * Composant affichant le Footer
 * @returns JSX.element
 */
function Footer() {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <footer className="footer">
            <div className="footer__logos">
                <a href="https://github.com/robinmaxime" target="__blank">
                    <img
                        src="/../../assets/icons/github.png"
                        alt="logo github"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/maxime-robin-5a089a219"
                    target="__blank"
                >
                    <img src="/../../assets/icons/in.png" alt="logo linkedIn" />
                </a>
            </div>
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
                    <p>
                        o2switch <br />
                        Chemin des Pardiaux <br />
                        63000 Clermont-Ferrand <br />
                        France
                    </p>
                    <h4>Crédit</h4>
                    <p>
                        <a href="https://www.freepik.com/free-vector/cute-man-working-computer-with-coffee-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_20188201.htm#query=on%20a%20computer&position=7&from_view=keyword&track=ais">
                            Image by catalyststuff
                        </a>{' '}
                        on Freepik
                    </p>
                </div>
            </Modal>
        </footer>
    );
}

export default Footer;

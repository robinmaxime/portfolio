import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Timeline from '../../components/Timeline';
import TimelineItem from '../../components/TimelineItem';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

/**
 * Composant affichant la section "Présentation"
 * @returns JSX.element
 */
function Presentation() {
    return (
        <section id="presentation" className="container presentation">
            <div className="presentation__main">
                <div className="presentation__text">
                    <h2 className="presentation__title">Présentation</h2>
                    <p>
                        Bonjour, moi c'est Maxime ROBIN,{' '}
                        <strong>développeur web junior</strong> ! Passionné par
                        les nouvelles technologies, j'ai découvert le code il y
                        a quelques temps et ai tout de suite accroché. J'ai donc
                        décidé de me reconvertir en tant que développeur web en
                        passant une <strong>formation diplomante</strong> auprès
                        d'OpenClassrooms.
                    </p>
                    <div className="presentation__links">
                        <Button
                            title="Télécharger mon CV"
                            url="/assets/cv_maxime_robin.pdf"
                            icon={<FontAwesomeIcon icon={faFilePdf} />}
                        />

                        <a
                            href="https://www.linkedin.com/in/maxime-robin-5a089a219"
                            target="__blank"
                        >
                            <img
                                src="/../../assets/icons/linkedin.png"
                                alt="logo de linkedIn"
                                width="128"
                            />
                        </a>
                    </div>
                </div>
                <div className="presentation__image">
                    <picture>
                        <source
                            srcSet="/assets/portrait.webp"
                            type="image/webp"
                        />
                        <img src="/assets/portrait.jpg" alt="Maxime ROBIN" />
                    </picture>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Formations</Tab>
                    <Tab>Emplois</Tab>
                </TabList>

                <TabPanel>
                    <Timeline>
                        <TimelineItem
                            title="2010"
                            subtitle="BAC STG"
                            content="Option comptabilité et finance des entreprises"
                        />
                        <TimelineItem
                            title="2013"
                            subtitle="BTS"
                            content="Comptabilité et gestion des organisations"
                        />
                        <TimelineItem
                            title="2023"
                            subtitle="DÉVELOPPEUR WEB"
                            content="Titre RNCP niveau 5 - Openclassrooms"
                        />
                    </Timeline>
                </TabPanel>
                <TabPanel>
                    <Timeline>
                        <TimelineItem
                            title="2013-2017"
                            subtitle="COMPTABLE"
                            content="Endel"
                        />
                        <TimelineItem
                            title="2017-2022"
                            subtitle="COMPTABLE"
                            content="Volkswagen - Audi"
                        />
                    </Timeline>
                </TabPanel>
            </Tabs>
        </section>
    );
}

export default Presentation;

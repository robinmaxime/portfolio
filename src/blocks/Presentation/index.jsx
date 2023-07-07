import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Timeline from '../../components/Timeline';
import TimelineItem from '../../components/TimelineItem';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

function Presentation() {
    return (
        <div id="presentation" className="container presentation">
            <div className="presentation__main">
                <div className="presentation__text">
                    <h2 className="presentation__title">Présentation</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit blanditiis quas repudiandae ipsam molestias
                        quidem porro numquam non. Aliquid eaque dolorum
                        provident, eveniet harum atque ad vitae, repudiandae
                        modi hic sit laudantium neque officia quaerat, non
                        repellendus odio quam.
                    </p>
                    <p>
                        <Button
                            title="Télécharger mon CV"
                            link="/assets/cv.pdf"
                            icon={<FontAwesomeIcon icon={faFilePdf} />}
                        />
                    </p>
                </div>
                <div className="presentation__image">
                    <img src="/assets/portrait.jpg" alt="Maxime ROBIN" />
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
        </div>
    );
}

export default Presentation;

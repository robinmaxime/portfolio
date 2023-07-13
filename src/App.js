import Header from './blocks/Header';
import Banner from './blocks/Banner';
import Presentation from './blocks/Presentation';
import Skills from './blocks/Skills';
import Projects from './blocks/Projects';
import Contact from './blocks/Contact';
import Footer from './blocks/Footer';
import { ProjectsProvider } from './contexts/projects_context';

function App() {
    return (
        <div>
            <Header />
            <Banner />
            <Presentation />
            <Skills />
            <ProjectsProvider>
                <Projects />
            </ProjectsProvider>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

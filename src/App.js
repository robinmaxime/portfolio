import Header from './blocks/Header';
import Banner from './blocks/Banner';
import Presentation from './blocks/Presentation';
import Skills from './blocks/Skills';
import Projects from './blocks/Projects';
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
        </div>
    );
}

export default App;

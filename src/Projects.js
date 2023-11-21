import Gif from "./Gif";

const Projects = () => (
    <div>
        <h2>What I've Built</h2>
        
        <div className="project-container">
            {/* Project 1 */}
            <a href="https://link-to-your-first-project.com" target="_blank" rel="noopener noreferrer">
                <h3>Project 1 Title</h3>
                <p>Description of Project 1</p>
            </a>

            {/* Project 2 */}
            <a href="https://link-to-your-second-project.com" target="_blank" rel="noopener noreferrer">
                <h3>Project 2 Title</h3>
                <p>Description of Project 2</p>
            </a>

            {/* Project 3 */}
            <a href="https://link-to-your-third-project.com" target="_blank" rel="noopener noreferrer">
                <h3>Project 3 Title</h3>
                <p>Description of Project 3</p>
            </a>
        </div>
        <Gif />
    </div>
);

export default Projects;



import Gif from "./Gif";

const Projects = () => (
    <div>        
        <div className="project-container">
            <h2>Projects</h2>
                {/* Project 1 */}
                <a href="https://link-to-your-first-project.com" target="_blank" rel="noopener noreferrer">
                    <h4>Project 1 Title</h4>
                    <p>Description of Project 1: ;aslkdjfas;dlkfjsa;dlkjfLorem ipsym foapsdjkfplaskdjflsadkjfasdlkfjalksdjflkadsjflkasdjflkaj</p>
                </a>

                {/* Project 2 */}
                <a href="https://link-to-your-second-project.com" target="_blank" rel="noopener noreferrer">
                    <h4>Project 2 Title</h4>
                    <p>Description of Project 1: ;aslkdjfas;dlkfjsa;dlkjfLorem ipsym foapsdjkfplaskdjflsadkjfasdlkfjalksdjflkadsjflkasdjflkaj</p>
                </a>

                {/* Project 3 */}
                <a href="https://link-to-your-third-project.com" target="_blank" rel="noopener noreferrer">
                    <h4>Project 3 Title</h4>
                    <p>Description of Project 1: ;aslkdjfas;dlkfjsa;dlkjfLorem ipsym foapsdjkfplaskdjflsadkjfasdlkfjalksdjflkadsjflkasdjflkaj</p>
                </a>
        </div>
        <Gif />
    </div>
);

export default Projects;



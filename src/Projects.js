import Gif from "./Gif";

const Projects = () => (
    <div>
        <div className="project-container">
            <h2>Projects</h2>

            {/* Learning tools for data engineers */}
            <div className="project-static">
                <h4>Learning Tools for Data Engineers <span className="project-status">— Started September 2026</span></h4>
                <p>
                    Currently building learning tools for data engineers. More to come.
                </p>
            </div>

            {/* Book Vector */}
            <a href="https://book-vector.vercel.app" target="_blank" rel="noopener noreferrer">
                <h4>Book Vector <span className="project-status">— July 2026</span></h4>
                <p>
                    An interactive galaxy of books mapped by semantic similarity — search any title and explore its nearest neighbors and hyperniche genres in 3D.
                </p>
            </a>

            {/* Handwriting Font Generator */}
            <a href="https://fontcreator-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <h4>Handwriting Font Generator <span className="project-status">— June 2026</span></h4>
                <p>
                    A web tool that turns your handwriting into a custom font — upload a sample of your handwritten characters and generate a personal typeface you can use anywhere.
                </p>
            </a>

            {/* Lab Notes */}
            <a href="https://lab-notes-iircoc24r-elliot-waxmans-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                <h4>Lab Notes <span className="project-status">— May 2026</span></h4>
                <p>
                    A lightweight app for capturing and organizing lab notes and experiments.
                </p>
            </a>

            {/* Misto */}
            <a href="https://substack.com/home/post/p-160624379" target="_blank" rel="noopener noreferrer">
                <h4>Misto <span className="project-status">— Sunset May 2026</span></h4>
                <p>
                    Bioremediation for nuclear waste — genetically engineering microbes to break down radionuclides in contaminated soil and water. Sunset in May 2026.
                </p>
            </a>

            {/* Plasmid Optimizer */}
            <a href="https://www.plasmidoptimizer.com" target="_blank" rel="noopener noreferrer">
                <h4>Plasmid Optimizer <span className="project-status">— April 2026</span></h4>
                <p>
                    A web tool for optimizing plasmid DNA sequences — codon usage, GC content, and sequence cleanup for more reliable expression.
                </p>
            </a>

            {/* Awake */}
            <div className="project-static">
                <h4>Awake <span className="project-status">— Sunset</span></h4>
                <p>
                    A collective shareholder engagement platform — pooling retail investors to vote together on issues that matter.
                </p>
            </div>
        </div>
        <Gif />
    </div>
);

export default Projects;

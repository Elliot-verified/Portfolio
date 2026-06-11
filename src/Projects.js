import Gif from "./Gif";

const Projects = () => (
    <div>
        <div className="project-container">
            <h2>Projects</h2>

            {/* Misto */}
            <a href="https://substack.com/home/post/p-160624379" target="_blank" rel="noopener noreferrer">
                <h4>Misto <span className="project-status">— Continuing May '26</span></h4>
                <p>
                    Bioremediation for nuclear waste — genetically engineering microbes to break down radionuclides in contaminated soil and water. Currently paused; picking it back up in May 2026.
                </p>
            </a>

            {/* Generative protein app */}
            <div className="project-static">
                <h4>Generative Protein App</h4>
                <p>
                    A tool for designing novel proteins to transform microbes for synthetic biology applications, built on top of generative protein models.
                </p>
            </div>

            {/* Awake */}
            <div className="project-static">
                <h4>Awake <span className="project-status">— Sunset</span></h4>
                <p>
                    A collective shareholder engagement platform — pooling retail investors to vote together on issues that matter.
                </p>
            </div>

            {/* Plasmid Optimizer */}
            <a href="https://www.plasmidoptimizer.com" target="_blank" rel="noopener noreferrer">
                <h4>Plasmid Optimizer</h4>
                <p>
                    A web tool for optimizing plasmid DNA sequences — codon usage, GC content, and sequence cleanup for more reliable expression.
                </p>
            </a>

            {/* Lab Notes */}
            <a href="https://lab-notes-iircoc24r-elliot-waxmans-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                <h4>Lab Notes</h4>
                <p>
                    A lightweight app for capturing and organizing lab notes and experiments.
                </p>
            </a>

            {/* Handwriting Font Generator */}
            <a href="https://fontcreator-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <h4>Handwriting Font Generator</h4>
                <p>
                    A web tool that turns your handwriting into a custom font — upload a sample of your handwritten characters and generate a personal typeface you can use anywhere.
                </p>
            </a>
        </div>
        <Gif />
    </div>
);

export default Projects;

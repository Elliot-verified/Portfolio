// Writing.js
import Gif from "./Gif";


const Writing = () => (
    <div>        
        <div className="writing-container">
            <h2>What I've Written</h2>
            
                {/* Project 1 */}
                <a href="https://open.substack.com/pub/elliotwaxman/p/automated-hiring-and-societies-of?r=fafk3&utm_campaign=post&utm_medium=web">
                    <h4>Automated Hiring and Societies of Control</h4>
                    <p>Short article noting the growth and regulation of automated employment decision tools</p>
                </a>

                {/* Project 2 */}
                <a href="https://elliotwaxman.substack.com/p/how-much-should-you-care-about-privacy" target="_blank" rel="noopener noreferrer">
                    <h4>How much should you care about privacy?</h4>
                    <p>On the nature of privacy and data ownership</p>
                </a>

                {/* Project 3 */}
                <a href="https://elliotwaxman.substack.com/p/who-owns-ai-generated-content" target="_blank" rel="noopener noreferrer">
                    <h4>Who Owns AI-Generated Content?</h4>
                    <p>Art, copyright infringement, and redistribution of value with GAI</p>
                </a>
                <iframe src="https://elliotwaxman.substack.com/embed" width="auto" height="auto" frameborder="0" ></iframe>
        </div>
        <Gif />
    </div>
);

export default Writing;




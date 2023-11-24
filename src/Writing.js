// Writing.js
import Gif from "./Gif";


const Writing = () => (
    <div>        
        <div className="writing-container">
            <h2>What I've Written</h2>
            <iframe src="https://elliotwaxman.substack.com/embed" width="auto" height="auto" frameborder="0" ></iframe>
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

export default Writing;




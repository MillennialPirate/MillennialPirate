import { Container } from "react-bootstrap";
import './IntroCard.css'

function IntroCard(props){
    return (
        <div>
            <Container fluid className="paddedContainer">
                <div className="introCard">
                    <h1>Hello there! 👋🏾</h1>
                    <p>I am Siddharth. Senior Systems Engineer @Infosys & a cloud full stack developer.</p>
                </div>
            </Container>
        </div>
    )
}

export default IntroCard;
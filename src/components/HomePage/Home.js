import { Col, Container, Row } from "react-bootstrap";
import IntroCard from "../IntroCard/IntroCard";

function Home(){
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                    <IntroCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
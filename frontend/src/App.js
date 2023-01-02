import './App.css';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import family from "./ryan-family.jpeg"
import ryan from "./ryan.jpeg"

function App() {
  return (
    <Row className="justify-content-center">
      <Col xs="6">
        <h1>Hi, I'm Ryan Joyce</h1>
        <h3 className='mb-4 pb-2'>Welcome to my personal website</h3>
        I am a developer and financial professional with over a decade of experience working
        in the hedge fund industry.
      </Col>
      <Col xs="5">
        <img src={family} style={{ width: "100%" }} className="mb-2" />
        <img src={ryan} style={{ width: "50%" }} />
      </Col>
    </Row>
  );
}

export default App;

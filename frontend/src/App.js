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
        <h3 className='mb-3 pb-2'>Welcome to my personal website</h3>
        <p>I am a developer and financial professional with over a decade of experience
          in the hedge fund industry, spending about six years working in back and middle
          office operations and another six years as an execution trader. I have worked in
          all manner of environments, including some of the largest and most established
          funds in the world, as well as fast-paced new launches seeking to make their mark
          on the industry.
        </p>
        <p>
          My speciality and interests lie primarily within trading desk process automation.
          Hedge funds are inherently chaotic institutions that operate various complex and
          intertwined systems
        </p>


      </Col>
      <Col xs="5">
        <img src={family} style={{ width: "100%" }} className="mb-2" />
        <img src={ryan} style={{ width: "50%" }} />
      </Col>
    </Row>
  );
}

export default App;

import "./my.css";
import { Row, Col } from "react-bootstrap";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { dataNav } from "./service";

function App() {
  return (
    <div>
      <Row>
        <Col>
          <Nav navData={dataNav} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Home />
        </Col>
      </Row>
    </div>
  );
}

export default App;

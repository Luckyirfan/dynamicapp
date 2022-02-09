import "./my.css";
import { Row, Col } from "react-bootstrap";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { dataNav } from "./service";
import { Dashbord } from "./components/Dashbord";
import {incrDec} from "./incrDec"

function App() {
  return (
    <div>
      {/* <Row>
        <Col>
          <Nav navData={dataNav} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Home />
        </Col>
      </Row>
      <Dashbord/> */}
<incrDec/>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import TasksList from "./components/TasksList";
import Footer from "./components/footer";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col  lg="6">
          <AddTask />
          <TasksList/>
        </Col>
      </Row>
      <Footer/>

    </Container>
  );
}

export default App;

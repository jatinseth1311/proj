import "./App.css";
import Home from "./component/Home";
import { Button, Col, Container, Row } from "reactstrap";
import Auth from "./component/Auth";
import Header from "./component/Header";
import Manager from "./component/Manager";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Manager />
        </Container>
      </Router>
    </div>
  );
}

export default App;

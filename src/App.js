import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Portfolio from "./Pages/Portfolio/Portfolio";


function App() {
  return (
    <>
      <Router basename="/">
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} /> 
        <Route exact path="/Experience" component={Experience} /> 
        <Footer />
      </Router>
    </>
  );
}

export default App;

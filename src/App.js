import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Lodgement from "./Pages/Lodgement/Lodgement";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/logements/:id" element={<Lodgement />} />
          <Route exact path="/apropos" element={<About />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

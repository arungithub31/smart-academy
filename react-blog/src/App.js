
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Contact from "./pages/contact/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses /> } />
      <Route path="/contact" element={<Contact /> } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
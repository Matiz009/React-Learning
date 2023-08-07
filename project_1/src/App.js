import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Home from "./components/Home";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
            Home{" "}
          </Route>{" "}
          <Route path="/contact" element={<Contact />}>
            {" "}
            Contact{" "}
          </Route>{" "}
          <Route path="/services" element={<Services />}>
            {" "}
            Contact{" "}
          </Route>{" "}
        </Routes>{" "}
        <Footer />
      </Router>{" "}
    </>
  );
}

export default App;

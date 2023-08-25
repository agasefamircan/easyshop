import { Outlet, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routing from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routing />
      <Outlet />
      <Footer />
    </Router>
  );
}

export default App;

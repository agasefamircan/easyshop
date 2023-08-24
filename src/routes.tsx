import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Routing;

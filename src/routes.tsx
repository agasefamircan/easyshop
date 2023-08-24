import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Products from "./components/Products";

const Routing = ({products}) => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index path="/" element={<Home />} />
        <Route path="/" element={<Products products={products} />} />
      <Route path="/product/:productId" element={<Product products={products} />} />
        <Route index path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Routing;

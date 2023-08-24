import { Outlet, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import {useEffect,useState} from 'react'
import axios from "axios";
import Routing from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log("ERROR :", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Router>
        <Navbar/>
        <Routing  products={products}/>
        <Outlet/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

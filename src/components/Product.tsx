import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../assets/css/product.module.css";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const { productId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log("ERROR :", error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const product = products.find((item) => item.id == productId);
  
  useEffect(() => {
    !product ? setNotFound(true) : setNotFound(false);
  }, [product]);

  if (loading) {
    return <Loading />;
  }

  if (notFound) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="ui items">
          <div className="item">
            <div className="ui small image">
              <img className={styles.img} src={product.image} />
            </div>
            <div className="content">
              <div className="header">{product.title}</div>
              <div className="meta">
                <span className="price">{product.price} $</span>
              </div>
              <div className="description">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;

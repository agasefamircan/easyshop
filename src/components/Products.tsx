import { NavLink } from "react-router-dom";
import axios from "axios";
import style from "../assets/css/products.module.css";
import { useEffect, useState } from "react";

const Products = () => {
  const [loading, setLoading] = useState(0);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(1);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        console.log("ERROR :", error);
      }
      setLoading(0);
    };
    fetchProduct();
  }, []);

  return (
    <div className={style.products}>
      <div className={style.filterButtons}>
        <button className="ui inverted blue button">All</button>
        <button className="ui inverted blue button">Electronics</button>
        <button className="ui inverted blue button">Accessories</button>
        <button className="ui inverted blue button">Men's clothes </button>
        <button className="ui inverted blue button">Women's clothes</button>
      </div>
      <div className={style.productList}>
        {data.map((product, i) => (
          <div className={style.product} key={i}>
            <div className={style.card}>
              <img
                className={style.img}
                src={product.image}
                alt={product.title}
              />
              <NavLink  to={`/product/${product.id}`} className={style.cardTitle}>
                {product.title.substring(0, 20)}...
              </NavLink>
                <div className={style.productDetails}>
                  <div className={style.price}>
                    <b>{product.price} $</b>
                  </div>
                  <div className={style.buttons}>
                   
                    <i className="shopping large teal basket icon"></i>
                    <i className="heart large teal basket icon"></i>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

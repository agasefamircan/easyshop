import { NavLink } from "react-router-dom";
import axios from "axios";
import style from "../assets/css/products.module.css";
import { useEffect, useState,FC } from "react";
import { LoadingProducts } from "./Loading";
import Product from "../types/productsTypes";

const Products:FC = () => {
  const [loading, setLoading] = useState<number>(0);
  const [data, setData] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);

  const filterProduct = (category: string) => {
    const updatedData = data.filter((updated) => updated.category === category);
    setFiltered(updatedData);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(1);
      try {
        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setData(res.data);
        setFiltered(res.data);
        setLoading(0);
      } catch (error) {
        console.log("ERROR :", error);
      }
      setLoading(0);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className={style.products}>
        <div className={style.filterButtons}>
          <button
            className="ui inverted blue button"
            id={style.buttons}
            onClick={() => setFiltered(data)}
          >
            All
          </button>
          <button
            className="ui inverted blue button"
            id={style.buttons}
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
          <button
            className="ui inverted blue button"
            id={style.buttons}
            onClick={() => filterProduct("jewelery")}
          >
            Accessories
          </button>
          <button
            className="ui inverted blue button"
            id={style.buttons}
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothes{" "}
          </button>
          <button
            className="ui inverted blue button"
            id={style.buttons}
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothes
          </button>
        </div>
        {loading ? (
          <LoadingProducts />
        ) : (
          <div className={style.productList}>
            {filtered.map((product, i) => (
              <div className={style.product} key={i}>
                <div className={style.card}>
                  <img
                    className={style.img}
                    src={product.image}
                    alt={product.title}
                  />
                  <NavLink
                    to={`/product/${product.id}`}
                    className={style.cardTitle}
                  >
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
        )}
      </div>
    </>
  );
};
export default Products;

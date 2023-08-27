import { useEffect, useState, FC } from "react";
import axios from "axios";
import styles from "../assets/css/product.module.css";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Products from "../types/productTypes";

const Product: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  const { productId } = useParams<{ productId: string }>();
  const [products, setProducts] = useState<Products[]>([]);

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

  const product = products.find((item) => item.id == Number(productId));

  useEffect(() => {
    setNotFound(!product);
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
        <div className={`ui items ${styles.items}`}>
          <div className="item">
            <div className="ui small image">
              <img className={styles.img} src={product?.image} />
            </div>
            <div className="content">
              <div className="header">{product?.title}</div>
              <div className="meta">
                <span className="price">{product?.price} $</span>
              </div>
              <div className={styles.description}>
                <p>{product?.description}</p>
              </div>
              <div className={styles.buttons}>
                      <i className="shopping large teal basket icon"></i>
                      <i className="heart large teal basket icon"></i>
                    </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;

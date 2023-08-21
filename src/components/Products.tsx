import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [loading, setLoading] = useState(0);
  const [data, setData] = useState("");
  const[filtered,setFiltered]=useState(data)

  useEffect(() => {
    setLoading(1);
    axios({
      method: "GET",
      baseURL: "http://api.fakeshop-api.com",
      url: "/products/getAllProducts",
    })
      .then(({ data }) => {
        setData(data.products);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(0));
  }, []);

  return (
    <div className="produsts">
      <div className="filter-buttons">
        <button>All</button>
        <button>Clothes</button>
        <button>Shoes</button>
        <button>Accessories</button>
      </div>
      <div className="product-list">
        {/* {data.map((product)=>(
          <h1>{product.image}</h1>
        ))} */}
      </div>
    </div>
  );
};

export default Products;

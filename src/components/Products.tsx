import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [loading, setLoading] = useState(0);
  const [data, setData] = useState([]);
  const[filtered,setFiltered]=useState(data)

  useEffect(() => {
    const fetchProduct=async ()=>{
        setLoading(1)
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setData(res.data)
        } catch (error) {
            console.log("ERROR :",error);
        }
        setLoading(0)
    }
    fetchProduct()
},[])


  return (
    <div className="produsts">
      <div className="filter-buttons">
        <button>All</button>
        <button>Clothes</button>
        <button>Shoes</button>
        <button>Accessories</button>
      </div>
      <div className="product-list">
        {data.map((product,i)=>(
          <h1 key={i}>{product.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Products;

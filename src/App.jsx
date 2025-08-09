import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const ProductPage = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setData(response.data);

  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-wrap items-start justify-center min-h-screen gap-8 p-6">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          ImageUrl={item.image}
          price1={`${item.price}`}
          title={item.title}
          tagClassName={"bg-[#12A05C]"}
          ImageClassName={"w-[225px]"}
          tag={"NEW"}
        />
      ))}
    </div>
  );
};

export default ProductPage;

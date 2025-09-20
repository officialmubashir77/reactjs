import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import productList from "./utils/productList.js";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="product-wrapper">
        {productList.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imgSrc={product.image}
            />
          );
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

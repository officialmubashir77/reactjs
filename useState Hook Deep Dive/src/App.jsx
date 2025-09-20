import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import productList from "./utils/productList.js";
import Increment from "./components/Increment.jsx";

const App = () => {
  const [topRatedList, setTopRatedList] = useState([]);

  const topRatedProducts = () => {
    // console.log("Top Rated Products button clicked");

    const filteredProducts = productList.filter(
      (product) => product.rating.rate >= 4
    );
    setTopRatedList(filteredProducts);

    console.log(filteredProducts);
  };

  useEffect(() => {
    topRatedProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-wrapper">
      {/* <div>
        <button onClick={topRatedProducts} className="top-rated-button">
          Top Rated Products
        </button>
      </div> */}
      
        <Increment />

      <div className="product-wrapper top-rateed-products-wrapper">
        {topRatedList.length > 0 && (
          <div>
            <h2 className="products-bar-title">Top Rated Products</h2>
            <div className="product-wrapper top-rated-products-wrapper">
              {topRatedList.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imgSrc={product.image}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <h2 className="products-bar-title">All Prof</h2>
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
      </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductCardSkeleton from "./components/ProductCardSkeleton";
import axios from "axios";
// import productList from "./utils/productList.js";

const App = () => {
  const [topRatedList, setTopRatedList] = useState([]); 
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = await response.data;
        setProductList(allProducts);

        const filtered = allProducts.filter((product) => product.rating.rate >= 4);
        setTopRatedList(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-wrapper">
      <div className="search-wrapper">
        <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => {
          const filteredProducts = productList.filter((product) => {
            return (
              product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
          });
          setProductList(filteredProducts);
        }}>Search</button>
      </div>
      <div className="product-wrapper top-rateed-products-wrapper">
        <h2 className="products-bar-title">Top Rated Products</h2>
        {
        topRatedList.length === 0 ? 
        ( 
          Array(8).fill().map((_, index) => <ProductCardSkeleton key={index} />)
        ) : (
          <div>
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
        )
        }
      </div>

      <div>
        <h2 className="products-bar-title">All Products</h2>
        <div className="product-wrapper">
          {productList.length === 0 ? (
            Array(8).fill().map((_, index) => <ProductCardSkeleton key={index} />)
          ) : (
            productList.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imgSrc={product.image}
              />
            ))
          )}
        </div>
      </div>

      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

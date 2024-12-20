import { useEffect, useState } from "react";
import Products from "./Products";

const Home = () => {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(product.toLowerCase()) &&
      (selectedCategory ? item.category === selectedCategory : true)
  );

  return (
    <div className="">
      <h1 className="text-center text-2xl py-5">Show All Products</h1>
      <div className="flex">
        <div className="mx-5">
          <div className="pb-5">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search Your Product"
                onChange={handleChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option disabled selected>
                Search By Category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Products key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

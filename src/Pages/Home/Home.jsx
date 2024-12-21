import { useEffect, useState } from "react";
import Products from "./Products";

const Home = () => {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRange, setSelectedRange] = useState(0);
  const [accendingDescending, setAccendingDescending] = useState("");

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

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  const handleAscendingDescending = (event) => {
    setAccendingDescending(event.target.value);
  };

  console.log(accendingDescending);

  const filteredItems = items
    .filter((item) => {
      const isTitleMatch = item.title
        .toLowerCase()
        .includes(product.toLowerCase());
      const isCategoryMatch = selectedCategory
        ? item.category === selectedCategory
        : true;
      const isPriceMatch = selectedRange ? item.price <= selectedRange : true;
      return isTitleMatch && isCategoryMatch && isPriceMatch;
    })
    .sort((a, b) =>
      accendingDescending === "ascending"
        ? a.price - b.price
        : b.price - a.price
    );

  return (
    <div className="pb-5">
      <h1 className="text-center text-xl font-bold py-5 uppercase">
        Show All Products
      </h1>
      <div className="sm:flex justify-evenly">
        <div className="mx-5">
          <div className="">
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
          <div className="divider"></div>
          <div className="form-control w-full sm:max-w-xs">
            <select
              className="select select-bordered"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="" disabled>
                Search By Category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="divider"></div>
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: Up to ${selectedRange}
            </label>
            <input
              type="range"
              min={0}
              max="100"
              onChange={handleRangeChange}
              value={selectedRange}
              className="range"
              step="1"
            />
            <div className="flex w-full justify-between px-2 text-xs">
              <span>$0</span>
              <span>$25</span>
              <span>$50</span>
              <span>$75</span>
              <span>$100</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="">
            <label className="form-control w-full sm:max-w-xs">
              <div className="label">
                <span className="label-text">Price Ascending/Descending</span>
              </div>
              <select
                className="select select-bordered"
                onChange={handleAscendingDescending}
                value={accendingDescending}
              >
                <option value="" disabled>
                  Price
                </option>
                <option value="ascending">Low to High</option>
                <option value="descending">High to Low</option>
              </select>
            </label>
          </div>
        </div>

        <div className="container mx-auto px-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.length === 0 ? (
            <div className="text-center col-span-full justify-center flex items-center">
              <img
                className="sm:w-1/2"
                src="../../../public/nproduct.png"
                alt=""
              />
            </div>
          ) : (
            filteredItems.map((item) => <Products key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

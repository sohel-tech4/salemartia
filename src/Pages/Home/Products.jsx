import { useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ item }) => {
  const {id, title, price, description, image, rating } = item;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const getTruncatedDescription = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className="card bg-base-100 w-auto justify-evenly shadow-xl p-3 sm:px-5">
      <Link to={`/productdetails/${id}`}>

      <div>
        <figure className="w-auto h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </figure>
        {rating?.count >= 1 ? (
          <>
            <p className="absolute bg-yellow-500 top-0 left-0 m-2 px-2 text-white rounded-md">
              Stock
            </p>
          </>
        ) : (
          <p className="absolute bg-yellow-500  top-0 left-0 m-2 px-2 text-white rounded-md">
            Out of Stock
          </p>
        )}
        <div className="gap-3">
          <h2 className="card-title text-base font-bold">{title}</h2>
          <p>
            {isExpanded
              ? description
              : getTruncatedDescription(description, 100)}{" "}
            <span
              onClick={toggleDescription}
              className="text-blue-500 text-xs cursor-pointer"
            >
              {isExpanded ? "See Less" : "See More"}
            </span>
          </p>
        </div>
      </div>
      </Link>
      <div className="flex justify-between items-center mt-3">
        <p className="text-lg font-bold">Price: ${price}</p>
        <a
          href="#_"
          className="inline-block px-2 py-0 text-sm text-white bg-blue-800 rounded-full hover:bg-blue-700 mx-0"
        >
          Buy Now
        </a>{" "}
      </div>
    </div>
    
  );
};

export default Products;

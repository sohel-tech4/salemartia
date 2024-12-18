import { useState } from "react";

const Products = ({ item }) => {
  const { title, price, description, image } = item;
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
    <div className="card bg-base-100 w-96 shadow-xl p-3">
      <div>
        <figure className="w-full h-72">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="gap-3">
          <h2 className="card-title">{title}</h2>
          <p>
            {isExpanded
              ? description
              : getTruncatedDescription(description, 100)}{" "}
            <span
              onClick={toggleDescription}
              className="text-blue-500 cursor-pointer"
            >
              {isExpanded ? "See Less" : "See More"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-lg font-bold">Price: ${price}</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default Products;

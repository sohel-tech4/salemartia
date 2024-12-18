const Products = ({ item }) => {
  const { id, title, price, description, image, rating } = item;
  console.log(item);

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="w-full h-72">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="text-lg font-bold">Price: ${price}</p>
        <p className="text-sm text-gray-500">
          Rating: {rating?.rate} / 5 ({rating?.count} reviews)
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;

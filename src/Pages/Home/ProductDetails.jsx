import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductDetails = () => {
    const product = useLoaderData([])
    // console.log(product)
    return (
        <div className='p-5'>
            <div className='rounded-lg '>
                <div className=" p-2 md:p-20 rounded-lg">
                    <div className="md:flex md:gap-20 md:flex-col lg:flex-row">
                        <img src={product?.image} className="md:w-2/6 rounded-lg " />
                        <div className='md:w-1/2'>
                            <div className='flex justify-between md:my-0 my-5'>
                                <h1 className="md:text-4xl text-xl  font-bold">{product?.title}</h1>
                            </div>
                            <p className="md:py-6 w-full md:my-0 my-5 md:text-xl ">{product?.description}</p>
                            <p className='text-lg '> Categories : <span className='text-blue-700 '>{product?.category}</span></p>
                            <p className='text-lg pt-5'> Price : <span className='text-blue-700'>{product?.price}</span>$</p>
                            <p className='text-lg pt-5'> Count : <span className='text-blue-700'>{product?.rating?.count}</span>pcs</p>

                            <div className='flex items-center mt-5 gap-5 md:pt-5'>
                                <div className='text-center'>
                                    <button href="#_" class="relative inline-flex items-center w-25 h-8 justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-700 transition duration-300 ease-out border-2 border-red-700 rounded-full shadow-md group">
                                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-700  group-hover:translate-x-0 ease">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span class="uppercase absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">buy now</span>
                                        <span class="relative invisible w-full">buy now</span>
                                    </button>
                                </div>
                                <div className="card-actions md:pr-3">
                                    {/* <Button title={"Add Product"} toy={toy}></Button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

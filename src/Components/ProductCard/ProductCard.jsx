import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";



const ProductCard = ({ data }) => {


    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 lg:mx-4 lg:mt-10 mt-5">

           
                {
                    data?.slice(0, 8).map(singleData => <div key={singleData._id} className="">
                        <Link to={`/cardCollection/${singleData?._id}`}>
                            <div className="card card-compact bg-base-100 shadow-xl overflow-hidden relative mt-2 lg:mt-0">
                                <figure><img className="lg:h-52 lg:w-full" src={singleData?.productsImage} alt="Shoes" /></figure>
                                <p className="bg-red-600 px-1 w-20 rounded text-white absolute">Save {singleData?.discounts}%</p>
                                <div className="card-body">
                                    <h2 className="lg:card-title font-medium" title={singleData?.productTitle}>{singleData?.productTitle.slice(0, 50)}</h2>
                                    <p className="font-semibold">{singleData?.shopName}</p>
                                    <div className="flex items-center">
                                        <p className="lg:text-2xl">$ {singleData?.newPrice} <del className="lg:text-lg">$ {singleData?.oldPrice}</del></p>
                                        <BsCart className="w-6 h-6" />
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>)
                }
 


        </div>
    );
};

export default ProductCard;
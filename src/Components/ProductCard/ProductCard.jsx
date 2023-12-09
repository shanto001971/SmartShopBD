import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";



const ProductCard = ({ data }) => {


    return (
        <div className="lg:grid grid-cols-4 gap-3 mx-4 mt-10 ">

            {
                data?.slice(0, 8).map(singleData => <div key={singleData._id} className="">
                    <Link to={`/cardCollection/${singleData._id}`}>
                        <div className="card card-compact bg-base-100 shadow-xl overflow-hidden relative">
                            <figure><img className="h-52 w-full" src={singleData?.productsImage} alt="Shoes" /></figure>
                            <p className="bg-red-600 px-1 w-20 rounded text-white absolute">Save {singleData?.discounts}%</p>
                            <div className="card-body">
                                <h2 className="card-title">{singleData?.productTitle.slice(0, 50)}</h2>
                                <p>{singleData?.shopName}</p>
                                <div className="flex items-center">
                                    <p className="text-2xl">$ {singleData?.newPrice} <del className="text-lg">$ {singleData?.oldPrice}</del></p>
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
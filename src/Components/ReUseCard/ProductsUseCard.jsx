import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";


const ProductsUseCard = ({ data }) => {
    // console.log(data)
    return (
            <Link to={`/cardCollection/${data?._id}`}>
                <div className="card  bg-base-100 shadow-xl overflow-hidden relative  lg:block">
                    <figure><img className=" h-40 lg:h-52 w-full" src={data?.productsImage} alt="Shoes" /></figure>
                    <p className="bg-red-600 px-1 w-20 rounded text-white absolute top-0">Save {data?.discounts}%</p>
                    <div className="lg:card-body p-3 h-30 lg:h-auto">
                        <h2 className="lg:card-title">{data?.productTitle?.slice(0, 30)}</h2>
                        <p>{data?.shopName}</p>
                        <div className="flex items-center">
                            <p className="lg:text-2xl">$ {data?.newPrice} <del className="lg:text-lg">$ {data?.oldPrice}</del></p>
                            <BsCart className="w-6 h-6" />
                        </div>

                    </div>
                </div>
            </Link>
        
    );
};

export default ProductsUseCard;
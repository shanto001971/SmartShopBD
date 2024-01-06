import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";


const ProductsUseCard = ({ data }) => {
    // console.log(data)
    return (
            <Link to={`/cardCollection/${data?._id}`}>
                <div className="card  bg-base-100 shadow-xl overflow-hidden relative hidden lg:block">
                    <figure><img className="h-52 w-full" src={data?.productsImage} alt="Shoes" /></figure>
                    <p className="bg-red-600 px-1 w-20 rounded text-white absolute top-0">Save {data?.discounts}%</p>
                    <div className="card-body">
                        <h2 className="card-title">{data?.productTitle.slice(0, 50)}</h2>
                        <p>{data?.shopName}</p>
                        <div className="flex items-center">
                            <p className="text-2xl">$ {data?.newPrice} <del className="text-lg">$ {data?.oldPrice}</del></p>
                            <BsCart className="w-6 h-6" />
                        </div>

                    </div>
                </div>
            </Link>
        
    );
};

export default ProductsUseCard;
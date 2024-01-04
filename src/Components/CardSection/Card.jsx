import ReactStars from "react-rating-stars-component";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useCart } from "../../hooks/useCart";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";



const Card = ({ productData }) => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const [quantity, setQuantity] = useState(1);


    const handelAddToCart = (productData) => {
        // console.log(productData)

        if (user && user.email) {

            const cartItem = {
                email: user?.email,
                category: productData?.category,
                discounts: productData?.discounts,
                newPrice: productData?.newPrice,
                productTitle: productData?.productTitle,
                productsImage: productData?.productsImage,
                reviews: productData?.reviews,
                shopName: productData?.shopName,
                productsId: productData?._id,
                quantity: quantity
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data?.insertedId) {
                        toast.success('Add Success');
                        refetch()
                    }
                    // console.log(res.data)
                })

        } else {
            toast.error("Please LogIn fast")
        }
    }


    return (
        <div className="lg:mt-10">
            <h1 className='text-3xl font-medium font-serif'>FlashSale</h1>
                <div className="grid grid-cols-2 gap-3   ">
                    <Toaster />
                    {
                        productData?.slice(5, 7).map(singleData => <div style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} key={singleData?._id} className="card lg:card-side bg-base-100 border">
                            <Link to={`/cardCollection/${singleData?._id}`} className="card lg:card-side bg-base-100 border">
                            <figure><img className="w-[80%]" src={singleData?.productsImage} alt="Card" /></figure>
                            <div className="lg:card-body px-5">
                                <h2 className="lg:card-title font-medium my-2 lg:my-0">{singleData?.productTitle.slice(0, 40)}...</h2>
                                <div className="hidden lg:block">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#FED900"
                                        classNames=""
                                    />
                                </div>
                                <p className="font-semibold">$ 189</p>

                                <hr />
                                {/* <p className="hidden lg:block">Click the button to watch on Jetflix app <span className="font-semibold">more....</span></p> */}
                                <div className="card-actions justify-end">
                                    <button onClick={() => handelAddToCart(singleData)} className="w-full font-medium text-orange-700 py-1">Add to Cart</button>
                                </div>
                            </div></Link>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default Card;
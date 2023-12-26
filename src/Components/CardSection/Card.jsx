import ReactStars from "react-rating-stars-component";

const Card = ({ productData }) => {
    return (
        <div className="grid grid-cols-2 gap-3  lg:mt-10 ">
            {
                productData?.slice(1, 3).map(singleData => <div key={singleData?._id} className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img  src={singleData?.productsImage} alt="Card" /></figure>
                    <div className="lg:card-body px-5 ">
                        <h2 className="lg:card-title font-medium my-2 lg:my-0">{singleData?.productTitle.slice(0,40)}...</h2>
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
                        <p className="hidden lg:block">Click the button to watch on Jetflix app <span className="font-semibold">more....</span></p>
                        <div className="card-actions justify-end">
                            <button className="w-full font-medium text-orange-700 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;
import ReactStars from "react-rating-stars-component";

const Card = () => {
    return (
        <div className="grid grid-cols-2 gap-3  lg:mt-10 ">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="" src="https://limitededt.com/cdn/shop/products/DD8959-104-1_800x.jpg?v=1649685164" alt="Movie" /></figure>
                <div className="lg:card-body px-5 lg:px-0">
                    <h2 className="lg:card-title font-medium">New released!</h2>
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
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://millenniumshoes.com/cdn/shop/products/CD0884-100-PHCFH001-2000_600x.jpg?v=1585685284" alt="Movie" /></figure>
                <div className="lg:card-body px-5 lg:px-0">
                    <h2 className="lg:card-title font-medium">New released!</h2>
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
                    <p className="hidden lg:block">Click the button to watch on Jetflix app. <span className="font-semibold">more....</span></p>
                    <div className="card-actions justify-end">
                        <button className="w-full font-medium text-orange-700 ">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;
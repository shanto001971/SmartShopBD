import ReactStars from "react-rating-stars-component";

const Card = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-3  lg:mt-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className=""  src="https://limitededt.com/cdn/shop/products/DD8959-104-1_800x.jpg?v=1649685164" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New released!</h2>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#FED900"
                />
                <p className="font-semibold text-orange-700">$ 189</p>

                <hr />
                <p>Click the button to watch on Jetflix app <span className="font-semibold">more....</span></p>
                <div className="card-actions justify-end">
                    <button className="w-full font-medium text-orange-700 ">Add to Cart</button>
                </div>
            </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img  src="https://millenniumshoes.com/cdn/shop/products/CD0884-100-PHCFH001-2000_600x.jpg?v=1585685284" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New released!</h2>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#FED900"
                />
                <p className="font-semibold text-orange-700">$ 189</p>
                <hr />
                <p>Click the button to watch on Jetflix app. <span className="font-semibold">more....</span></p>
                <div className="card-actions justify-end">
                    <button className="w-full font-medium text-orange-700 ">Add to Cart</button>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Card;
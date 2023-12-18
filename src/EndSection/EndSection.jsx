import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const EndSection = ({productData,loading}) => {
    const [quantity, setQuantity] = useState(1);
    const [shoesColor, setShoesColoer] = useState("White")
    const [card, setCard] = useState(null)


    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (!card) {
        productData.map(dataItem => setCard(dataItem))
    }


    // console.log(card)

    return (
        <div className="lg:flex mt-10 border ">
            <div className="lg:w-[60%] lg:flex">
                <div className="w-[20%] lg:flex lg:flex-col gap-3  flex border">
                    {
                        productData.slice(0, 4).map((dataInf, i) => <img onClick={() => setCard(dataInf)} className={`cursor-pointer ${card === dataInf ? "border-2 border-blue-500" : "border"} lg:h-32 lg:w-32 mx-auto my-3`} key={i} src={dataInf?.productsImage} alt="" />)
                    }


                </div>
                <div className="lg:w-[80%]">
                    <img className="w-full" src={card?.productsImage} alt="" />
                </div>
            </div>
            <div className="lg:flex flex-col gap-5 p-3 lg:p-8 lg:w-[40%]">
                <h1 className="lg:text-3xl text-lg">{card?.productTitle}</h1>
                <p className="bg-red-600 px-1 w-20 rounded text-white">Save{card?.discounts}%</p>
                <div className="lg:mt-10">
                    <p className="font-semibold">{card?.shopName}</p>
                    <p className="flex items-center gap-2">
                        <ReactStars
                            rating={card?.reviews}
                            size={24}
                            // activeColor="#FED900"
                            starRatedColor="#FED900"
                            isHalf={true}
                        />
                        {card?.reviews}
                    </p>
                </div>

                <hr />

                <div className="">
                    <h3 className="text-xl font-semibold">
                        Color: <span className="text-xl font-semibold">{shoesColor}</span>
                    </h3>
                    <div className="flex gap-2 mt-2">
                        <div onClick={() => setShoesColoer("White")} className="p-3 bg-white border border-red-500 w-10"></div>
                        <div onClick={() => setShoesColoer("Black")} className="p-3 bg-black border border-red-500 w-10"></div>
                        <div onClick={() => setShoesColoer("Yellow")} className="p-3 bg-amber-300 border border-red-500 w-10"></div>
                    </div>
                    <p className="lg:text-2xl lg:mt-3 my-1">Tk {card?.price} <del className="lg:text-lg">Tk: 3,800</del></p>
                    <div className="lg:mt-4 border w-44 p-[10px] flex my-1">
                        <button className="px-5" onClick={decrementQuantity}>-</button>
                        <span className="px-6  ">{quantity}</span>
                        <button className="px-5 " onClick={incrementQuantity}>+</button>
                    </div>
                    <div className="w-full lg:mt-10 lg:flex items-center justify-center gap-2 ">
                        <button className="w-full lg:w-[50%] bg-[#EA33B6] p-2 rounded text-white">Add to cart</button>
                        <button className="w-full mt-2 lg:w-[50%] bg-[#3A2A2F] p-2 rounded text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndSection;
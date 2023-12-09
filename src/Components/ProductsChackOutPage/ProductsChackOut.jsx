import { useEffect } from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import RightBar from "./RightBar";

const ProductsChackOut = () => {
    const { id } = useParams()
    console.log(id)

    const [quantity, setQuantity] = useState(1);
    const [shoesColor, setShoesColoer] = useState("White")
    const [productData, setProductData] = useState({})
    const [loading, setLoading] = useState(true);


    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:5000/cardCollection/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [id]);


    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    // if (!card) {
    //     productData.map(dataItem => setCard(dataItem))
    // }

    console.log(productData)
    return (
        <div className="lg:flex lg:px-5 mt-5">

            <div className="lg:flex border w-[75%] rounded-md">
                <div className="lg:w-[50%] flex flex-col gap-2">
                    <div className="h-[68%] ">
                        <img className="w-full h-[100%] rounded-md" src={productData?.productsImage} alt="" />
                    </div>

                    <div className="border p-1 ">
                        <div className="w-[20%] lg:flex gap-2  flex border ">
                            <img className={`cursor-pointer`} src={productData?.productsImage} alt="" />
                            <img className={`cursor-pointer`} src={productData?.productsImage} alt="" />
                            <img className={`cursor-pointer`} src={productData?.productsImage} alt="" />
                            <img className={`cursor-pointer`} src={productData?.productsImage} alt="" />



                        </div>
                    </div>

                </div>
                <div className="lg:flex flex-col gap-5 p-3 lg:p-8 lg:w-[50%]">
                    <h1 className="text-3xl">{productData?.productTitle}</h1>
                    <p className="bg-red-600 px-1 w-20 rounded text-white">Save{productData?.discounts}%</p>
                    <div className="">
                        <p className="font-semibold">{productData?.shopName}</p>
                        <p className="flex items-center gap-2">
                            <ReactStars
                                rating={productData?.reviews}
                                size={24}
                                // activeColor="#FED900"
                                starRatedColor="#FED900"
                                isHalf={true}
                            />
                            {productData?.reviews}
                        </p>
                    </div>

                    <hr />

                    <div className="">
                        <h3 className="text-xl font-semibold">
                        Color Family: <span className="text-xl font-semibold">{shoesColor}</span>
                        </h3>
                        <div className="flex gap-2">
                            <div onClick={() => setShoesColoer("White")} className="p-3 bg-white border border-red-500 w-10"></div>
                            <div onClick={() => setShoesColoer("Black")} className="p-3 bg-black border border-red-500 w-10"></div>
                            <div onClick={() => setShoesColoer("Yellow")} className="p-3 bg-amber-300 border border-red-500 w-10"></div>
                        </div>
                        <p className="text-2xl mt-3">Tk {productData?.newPrice} <del className="text-lg">{productData?.oldPrice}</del></p>
                        <div className="mt-4 border w-44 p-[10px] flex">
                            <button className="px-5" onClick={decrementQuantity}>-</button>
                            <span className="px-6  ">{quantity}</span>
                            <button className="px-5 " onClick={incrementQuantity}>+</button>
                        </div>
                        <div className="w-full mt-5 lg:flex items-center justify-center gap-2 ">
                            <button className="w-full lg:w-[50%] bg-[#EA33B6] p-2 rounded text-white">Add to cart</button>
                            <button className="w-full mt-2 lg:w-[50%] bg-[#3A2A2F] p-2 rounded text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <RightBar/>
            </div>
        </div>
    );
};

export default ProductsChackOut;
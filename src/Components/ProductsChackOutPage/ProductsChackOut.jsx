import { useContext, useEffect } from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLoaderData, useParams } from "react-router-dom";
import RightBar from "./RightBar";
import RatingReviews from "./RatingReviews";
import ProductsUseCard from "../ReUseCard/ProductsUseCard";
import Reviews from "./Reviews";
import { FiCamera } from "react-icons/fi";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../../hooks/useCart";


const SadFace = (
    <path d="M12.0000002,1.99896738 C17.523704,1.99896738 22.0015507,6.47681407 22.0015507,12.0005179 C22.0015507,17.5242217 17.523704,22.0020684 12.0000002,22.0020684 C6.47629639,22.0020684 1.99844971,17.5242217 1.99844971,12.0005179 C1.99844971,6.47681407 6.47629639,1.99896738 12.0000002,1.99896738 Z M12.0000002,3.49896738 C7.30472352,3.49896738 3.49844971,7.30524119 3.49844971,12.0005179 C3.49844971,16.6957946 7.30472352,20.5020684 12.0000002,20.5020684 C16.6952769,20.5020684 20.5015507,16.6957946 20.5015507,12.0005179 C20.5015507,7.30524119 16.6952769,3.49896738 12.0000002,3.49896738 Z M12.0000001,13.4979816 C13.6312483,13.4979816 15.1603686,14.1528953 16.2810488,15.2934358 C16.5713583,15.5888901 16.5671876,16.0637455 16.2717333,16.354055 C15.976279,16.6443646 15.5014236,16.6401939 15.211114,16.3447396 C14.3696444,15.4883577 13.2246935,14.9979816 12.0000001,14.9979816 C10.7726114,14.9979816 9.62535029,15.4905359 8.78347552,16.3502555 C8.49366985,16.6462041 8.01882223,16.6511839 7.72287367,16.3613782 C7.4269251,16.0715726 7.4219453,15.5967249 7.71175097,15.3007764 C8.83296242,14.155799 10.3651558,13.4979816 12.0000001,13.4979816 Z M9.00044779,8.75115873 C9.69041108,8.75115873 10.2497368,9.3104845 10.2497368,10.0004478 C10.2497368,10.6904111 9.69041108,11.2497368 9.00044779,11.2497368 C8.3104845,11.2497368 7.75115873,10.6904111 7.75115873,10.0004478 C7.75115873,9.3104845 8.3104845,8.75115873 9.00044779,8.75115873 Z M15.0004478,8.75115873 C15.6904111,8.75115873 16.2497368,9.3104845 16.2497368,10.0004478 C16.2497368,10.6904111 15.6904111,11.2497368 15.0004478,11.2497368 C14.3104845,11.2497368 13.7511587,10.6904111 13.7511587,10.0004478 C13.7511587,9.3104845 14.3104845,8.75115873 15.0004478,8.75115873 Z" />
);

const NeutralFace = (
    <>
        <path d="M9.00051 8.75122C9.69047 8.75122 10.2498 9.31055 10.2498 10.0005C10.2498 10.6905 9.69047 11.2498 9.00051 11.2498C8.31055 11.2498 7.75122 10.6905 7.75122 10.0005C7.75122 9.31055 8.31055 8.75122 9.00051 8.75122Z" />
        <path d="M15.0005 8.75122C15.6905 8.75122 16.2498 9.31055 16.2498 10.0005C16.2498 10.6905 15.6905 11.2498 15.0005 11.2498C14.3105 11.2498 13.7512 10.6905 13.7512 10.0005C13.7512 9.31055 14.3105 8.75122 15.0005 8.75122Z" />
        <path d="M8.25 15C7.83579 15 7.5 15.3358 7.5 15.75C7.5 16.1642 7.83579 16.5 8.25 16.5H15.75C16.1642 16.5 16.5 16.1642 16.5 15.75C16.5 15.3358 16.1642 15 15.75 15H8.25Z" />
        <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" />
    </>
);

const SmilingFace = (
    <path d="M12.0000002,1.99896738 C17.523704,1.99896738 22.0015507,6.47681407 22.0015507,12.0005179 C22.0015507,17.5242217 17.523704,22.0020684 12.0000002,22.0020684 C6.47629639,22.0020684 1.99844971,17.5242217 1.99844971,12.0005179 C1.99844971,6.47681407 6.47629639,1.99896738 12.0000002,1.99896738 Z M12.0000002,3.49896738 C7.30472352,3.49896738 3.49844971,7.30524119 3.49844971,12.0005179 C3.49844971,16.6957946 7.30472352,20.5020684 12.0000002,20.5020684 C16.6952769,20.5020684 20.5015507,16.6957946 20.5015507,12.0005179 C20.5015507,7.30524119 16.6952769,3.49896738 12.0000002,3.49896738 Z M8.46174078,14.7838355 C9.31087697,15.8615555 10.6018926,16.5020843 11.9999849,16.5020843 C13.396209,16.5020843 14.6856803,15.8632816 15.5349376,14.7880078 C15.7916692,14.4629512 16.2633016,14.4075628 16.5883582,14.6642944 C16.9134148,14.9210259 16.9688032,15.3926584 16.7120717,15.717715 C15.5813083,17.1494133 13.8601276,18.0020843 11.9999849,18.0020843 C10.1373487,18.0020843 8.41411759,17.1471146 7.28351576,15.7121597 C7.02716611,15.3868018 7.08310832,14.9152347 7.40846617,14.6588851 C7.73382403,14.4025354 8.20539113,14.4584777 8.46174078,14.7838355 Z M9.00044779,8.75115873 C9.69041108,8.75115873 10.2497368,9.3104845 10.2497368,10.0004478 C10.2497368,10.6904111 9.69041108,11.2497368 9.00044779,11.2497368 C8.3104845,11.2497368 7.75115873,10.6904111 7.75115873,10.0004478 C7.75115873,9.3104845 8.3104845,8.75115873 9.00044779,8.75115873 Z M15.0004478,8.75115873 C15.6904111,8.75115873 16.2497368,9.3104845 16.2497368,10.0004478 C16.2497368,10.6904111 15.6904111,11.2497368 15.0004478,11.2497368 C14.3104845,11.2497368 13.7511587,10.6904111 13.7511587,10.0004478 C13.7511587,9.3104845 14.3104845,8.75115873 15.0004478,8.75115873 Z" />
);

const HappyFace = (
    <>
        <path d="M6.74927 12C6.53852 12 6.33749 12.0887 6.19539 12.2443C6.05329 12.4 5.98323 12.6082 6.00237 12.8181C6.28259 15.8916 8.55224 18.5 12 18.5C15.4478 18.5 17.7174 15.8916 17.9977 12.8181C18.0168 12.6082 17.9468 12.4 17.8047 12.2443C17.6626 12.0887 17.4616 12 17.2508 12H6.74927ZM12 17C9.74286 17 8.12852 15.5205 7.63237 13.5H16.3677C15.8715 15.5205 14.2571 17 12 17Z" />
        <path d="M15.2501 8.75C14.8416 8.75 14.5398 9.03719 14.492 9.35982C14.4314 9.76957 14.05 10.0526 13.6403 9.99192C13.2305 9.93126 12.9475 9.54993 13.0082 9.14018C13.1696 8.0495 14.1313 7.25 15.2501 7.25C16.3689 7.25 17.3306 8.0495 17.492 9.14018C17.5527 9.54993 17.2697 9.93126 16.8599 9.99192C16.4502 10.0526 16.0688 9.76957 16.0082 9.35982C15.9604 9.03719 15.6586 8.75 15.2501 8.75Z" />
        <path d="M7.99202 9.35982C8.03977 9.03719 8.34157 8.75 8.7501 8.75C9.15863 8.75 9.46043 9.03719 9.50818 9.35982C9.56884 9.76957 9.95017 10.0526 10.3599 9.99192C10.7697 9.93126 11.0527 9.54993 10.992 9.14018C10.8306 8.0495 9.86892 7.25 8.7501 7.25C7.63128 7.25 6.66963 8.0495 6.50818 9.14018C6.44753 9.54993 6.73053 9.93126 7.14028 9.99192C7.55003 10.0526 7.93136 9.76957 7.99202 9.35982Z" />
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z" />
    </>
);

const customStyles = {
    itemShapes: [SadFace, NeutralFace, SmilingFace, HappyFace],
    activeFillColor: ['#da1600', '#dcb000', '#61bb00', '#009664'],
    inactiveFillColor: '#a8a8a8',
};


const ProductsChackOut = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [quantity, setQuantity] = useState(1);
    const [shoesColor, setShoesColoer] = useState("White")
    const [productData, setProductData] = useState({})
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const [hoveredImage, setHoveredImage] = useState(null);
    const cardData = useLoaderData()
    const [axiosSecure] = useAxiosSecure()
    const [cart, refetch] = useCart();
    // console.log(cardData)


    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        fetch(`https://smart-shop-bd-server-side.vercel.app/cardCollection/${id}`)
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

    if (!hoveredImage) {
        setHoveredImage(productData?.productsImage)
    }

    // console.log(productData)


    const handelAddToCart = () => {


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
                    if (res.data?.insertedId) {
                        toast.success('Add Success');
                        refetch()
                    }
                    // console.log(res.data)
                })

        }
    }

    return (
        <div className="">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="lg:flex lg:px-5 mt-5 ">

                <div className="lg:flex border lg:w-[75%] rounded-md ">
                    <div className="lg:w-[50%] flex flex-col gap-2 ">
                        <div className="h-[68%] ">
                            <img className="w-full h-[100%] rounded-md" src={hoveredImage} alt="" />
                        </div>

                        <div className="border p-1 ">
                            <div className="w-[20%] lg:flex gap-2  flex">
                                {productData?.imageVarient?.map((image, index) => (
                                    <img
                                        key={index}
                                        className={`cursor-pointer hover:border border-indigo-700`}
                                        onMouseEnter={() => setHoveredImage(image)}
                                        src={image}
                                        alt=""
                                    />
                                ))}

                            </div>
                        </div>

                    </div>
                    <div className="lg:flex flex-col gap-5 p-3 lg:p-8 lg:w-[50%]">
                        <h1 className="lg:text-3xl font-medium">{productData?.productTitle}</h1>
                        <p className="bg-red-600 px-1 w-20 rounded text-white">Save{productData?.discounts}%</p>
                        <div className="">
                            <p className="font-semibold">{productData?.shopName}</p>
                            <p className="flex items-center gap-2">
                                <ReactStars
                                    rating={productData?.reviews}
                                    size={24}
                                    activeColor="#FED900"       // Color for inactive (unfilled) stars
                                    starRatedColor="#FED900"    // Color for filled stars (rated)
                                    isHalf={true}
                                />
                                <span>({productData?.reviews})</span>
                            </p>
                        </div>

                        <hr />

                        <div className="">
                            <h3 className="lg:text-xl font-semibold">
                                Color Family: <span className="lg:text-xl font-semibold">{shoesColor}</span>
                            </h3>
                            <div className="flex gap-2">
                                <div onClick={() => setShoesColoer("White")} className="p-3 bg-white border border-red-500 w-10"></div>
                                <div onClick={() => setShoesColoer("Black")} className="p-3 bg-black border border-red-500 w-10"></div>
                                <div onClick={() => setShoesColoer("Yellow")} className="p-3 bg-amber-300 border border-red-500 w-10"></div>
                            </div>
                            <p className="lg:text-2xl lg:mt-3 mt-1">Tk {productData?.newPrice} <del className="lg:text-lg">{productData?.oldPrice}</del></p>
                            <div className="mt-4 border w-44 p-[10px] flex">
                                <button className="px-5" onClick={decrementQuantity}>-</button>
                                <span className="px-6  ">{quantity}</span>
                                <button className="px-5 " onClick={incrementQuantity}>+</button>
                            </div>
                            <div className="w-full mt-5 lg:flex items-center gap-2 ">
                                <button onClick={() => handelAddToCart()} className="w-full  bg-[#EA33B6] p-2 rounded text-white">Add to cart</button>
                                <Link className="w-full" to={`/PlaceOrderPage/${productData?._id}`}><button className="w-full mt-2 bg-[#3A2A2F] p-2 rounded text-white text-center">Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="">
                    <RightBar />
                </div>
            </div>

            <div className="w-full flex ">
                <div className="lg:w-[80%] ">
                    <RatingReviews />

                    <div className="flex justify-between items-center gap-3 border mx-5 py-3 px-3 overflow-hidden">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 border px-2 rounded-md p-1">
                                <FiCamera className="w-5 h-5" />
                                <h1>Photos (14)</h1>
                                <div className="">
                                </div>
                            </div>
                            <div className="flex items-center gap-2 border px-2 rounded-md">
                                <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                                <h1>5</h1>
                            </div>
                            <div className="flex items-center gap-2 border px-2 rounded-md">
                                <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                                <h1>4</h1>
                            </div>
                            <div className="flex items-center gap-2 border px-2 rounded-md">
                                <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                                <h1>3</h1>
                            </div>
                            <div className="flex items-center gap-2 border px-2 rounded-md">
                                <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                                <h1>2</h1>
                            </div>
                            <div className="flex items-center gap-2 border px-2 rounded-md">
                                <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                                <h1>1</h1>
                            </div>
                        </div>

                        <Rating
                            style={{ maxWidth: 200 }}
                            value={rating}
                            onChange={setRating}
                            itemStyles={customStyles}
                            items={4}
                            highlightOnlySelected
                            spaceBetween="medium"
                            transition="zoom"
                        />
                    </div>
                    <Reviews data={productData} />
                </div>
                <div className="w-[20%] mt-8 p-2 flex flex-col gap-3 ">
                    {cardData?.slice(10, 14).map(singleData => <ProductsUseCard key={singleData?._id} data={singleData} />)

                    }

                </div>
            </div>

        </div>
    );
};

export default ProductsChackOut;
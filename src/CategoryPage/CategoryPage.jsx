import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsUseCard from "../Components/ReUseCard/ProductsUseCard";


const CategoryPage = () => {
    const { category } = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://smart-shop-bd.vercel.app/cardCollection")
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(singleData => singleData?.category === category)
                setData(filterData)
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [category]);

    console.log(data)

    // <div div className = "grid grid-cols-2 lg:grid-cols-4 gap-3" >
    // {
    //     data?.map(singleData=> (<ProductsUseCard key={singleData?._id} data={singleData} />))
    //             }

    //         </div >



    return (
        <div className="flex bg-gray-100">
            <div className="hidden md:flex flex-col w-64 bg-gray-800">
                <div className="flex flex-col flex-1 ">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Category
                        </a>
                    </nav>
                </div>
            </div>

            <div className="flex flex-col flex-1 ">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center px-5">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
                    </div>

                </div>
                <div className="p-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" >
                        {
                            data?.map(singleData => (<ProductsUseCard key={singleData?._id} data={singleData} />))
                        }

                    </div >
                </div>
            </div>

        </div>
    );
};

export default CategoryPage;
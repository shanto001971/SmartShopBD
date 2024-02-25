import { useState } from "react";
import { BsCart } from "react-icons/bs";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const UploadProduct = () => {
    const [axiosSecure] = useAxiosSecure()
    const [file, setFile] = useState([]);
    const [formData, setFormData] = useState({
        productsImage: '',
        productTitle: '',
        productDiscretion: '',
        shopName: '',
        color: '',
        category: '',
        oldPrice: '',
        newPrice: '',
        imageVariants: [],
    });

    const handleUpload = (e) => {
        let filesArray = file;
        if (file) {
          for (let i = 0; i < file.length; i++) {
            filesArray.push(e.target.files[i]);
          }
        }
        setFile(filesArray);
    };

    const handleInputChange = (e) => {
        const { name, files } = e.target;
        if (name === 'productsImage') {
            // Handle the main product image
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0] // Access the first file object
            }));
        } else {
            // For other input types, update formData normally
            setFormData(prevState => ({
                ...prevState,
                [name]: e.target.value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;
        const image4 = form.image4.value;
        const imagevariant = { image1, image2, image3, image4 }
        console.log(imagevariant)


        // axiosSecure.post('/addProduct', formData)
    };

    return (
        <div>
            <div className="p-5 border">
                <h1 className="lg:text-3xl font-bold">Add Product</h1>
                <p className="font-semibold">Here You can add product to your Store</p>
            </div>

            <div className="w-full lg:flex border">
                <div className="lg:w-[60%] p-5">

                    <form onSubmit={handleSubmit}>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Upload image *</span>
                            </div>
                            <input
                                type="file"
                                name="productsImage"
                                accept="image/*"
                                onChange={handleInputChange}
                                className="file-input w-full max-w-xs"
                                required
                            />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Product Title *</span>
                            </div>
                            <input
                                type="text"
                                name="productTitle"
                                value={formData.productTitle}
                                onChange={handleInputChange}
                                placeholder="Type Product Title here"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>

                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Product Description *</span>
                            </div>
                            <textarea
                                name="productDiscretion"
                                value={formData.productDiscretion}
                                onChange={handleInputChange}
                                className="textarea textarea-bordered h-24"
                                placeholder="Type Product Description here"
                                required
                            ></textarea>
                            {formData?.description?.length > 200 && (
                                <span className="text-red-500">Description must be 200 characters or less.</span>
                            )}
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Shop Name *</span>
                            </div>
                            <input
                                type="text"
                                name="shopName"
                                value={formData.shopName}
                                onChange={handleInputChange}
                                placeholder="Type Shop Name here"
                                className="input input-bordered w-full "
                                required
                            />

                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Select Color *</span>
                            </div>
                            <select
                                name="color"
                                value={formData?.color}
                                onChange={handleInputChange}
                                className="p-3 bg-slate-200 px-10 rounded"
                                required
                            >
                                <option value="" disabled>Color</option>
                                <option value="White">White</option>
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                                <option value="Yellow">Yellow</option>
                            </select>
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category *</span>
                            </div>
                            <select
                                name="category"
                                value={formData?.category}
                                onChange={handleInputChange}
                                className="p-3 bg-slate-200 px-10 rounded"
                                required
                            >
                                <option value="" disabled>Category</option>
                                <option value="Sports Sneakers">Sports Sneakers</option>
                                <option value="Baby Winter Blankets">Baby Winter Blankets</option>
                                <option value="Men's Trousers">Mens Trousers</option>
                                <option value="Sarees - Women">Sarees - Women</option>
                            </select>
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price *</span>
                            </div>
                            <div className="lg:flex gap-2">
                                <input
                                    type="text"
                                    name="oldPrice"
                                    value={formData.oldPrice}
                                    onChange={handleInputChange}
                                    placeholder="Type Price here"
                                    className="input input-bordered w-full "
                                    required
                                />
                                <input
                                    type="text"
                                    name="newPrice"
                                    value={formData.newPrice}
                                    onChange={handleInputChange}
                                    placeholder="Type Offer Price here"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </div>
                        </label>




                        {/* <div className="lg:flex my-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Image 1 *</span>
                                </div>
                                <input
                                    type="file"
                                    onChange={(e) => handleUpload(e)}
                                    // ref={fileInputRef}
                                    multiple
                                    className="w-full max-w-xs"
                                    required
                                />
                            </label>


                        </div> */}
                        <button type="submit" className="btn btn-primary mt-4 w-full">Submit</button>
                    </form>
                    {/* <div className="flex mt-5  w-full">
                        {formData.imageVariants.map((image, index) => (
                           <div className="mx-auto px-5" key={index} >
                             <img className="w-20 h-20  rounded-md "  src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
                           </div>
                        ))}
                    </div> */}
                </div>
                <div className="lg:w-[40%] border ">
                    <div className="card w-[80%] bg-base-100 shadow-xl mx-auto lg:mt-5">
                        <figure className="w-full">
                            <img className="w-full lg:h-56" src={formData?.productsImage ? URL.createObjectURL(formData?.productsImage) : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="lg:card-title font-medium" title={formData?.productTitle}>{formData?.productTitle?.slice(0, 40) || 'Your Product Title'}</h2>
                            <p>{formData?.productDiscretion || 'Demo Description Like this Experience comfort and style with our soft and comfortable Trouser Joggers for Men. Crafted for leisure and everyday wear'}</p>
                            <p className="font-semibold flex-wrap">{formData?.shopName || 'Your Shop Name'}</p>
                            <div className="flex items-center">
                                <p className="lg:text-2xl">Tk {formData?.newPrice || '00'} <del className="lg:text-lg">TK {formData?.oldPrice || '00'}</del></p>
                                <BsCart className="w-6 h-6" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UploadProduct;
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Reviews = ({ data }) => {
    const { user } = useContext(AuthContext)
    // console.log(data)
    return (
        <div className="">
            <div className='mx-5 border mt-5 p-5'>
                <div className="flex">
                    <div className="flex items-center px-2 rounded-md">
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                    </div>
                    <small>({user?.displayName.slice(0, 3) || "User"}****)</small>
                </div>

                <div className="mt-5">
                    <h1>Alhamdulillah Onak Vhalo product ta kinto sound khob Kom R Amni charging backup Khob Vhalo Thankyou so much 😘 </h1>
                    <div className="flex gap-3 mt-2">
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                    </div>
                </div>

            </div>


            <div className='mx-5 border mt-5 p-5'>
                <div className="flex">
                    <div className="flex items-center px-2 rounded-md">
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                    </div>
                    <small>({user?.displayName.slice(0, 3) || "User"}****)</small>
                </div>

                <div className="mt-5">
                    <h1>অনেক ভালো প্রডাক্ট দিয়েছে,,,ধন্যবাদ ভাইয়া আপনাকে❤️❤️ </h1>
                    <div className="flex gap-3 mt-2">
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                    </div>
                </div>

            </div>



            <div className='mx-5 border mt-5 p-5'>
                <div className="flex">
                    <div className="flex items-center px-2 rounded-md">
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                    </div>
                    <small>({user?.displayName.slice(0, 3) || "User"}****)</small>
                </div>

                <div className="mt-5">
                    <h1>valo legece</h1>
                    <div className="flex gap-3 mt-2">
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                    </div>
                </div>

            </div>



            <div className='mx-5 border mt-5 p-5'>
                <div className="flex">
                    <div className="flex items-center px-2 rounded-md">
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                    </div>
                    <small>({user?.displayName.slice(0, 3) || "User"}****)</small>
                </div>

                <div className="mt-5">
                    <h1>Alhamdulillah khub sundor sarita.3 din r moddei hate paise.delivery man o onek valo.thank you so much. such a wonderful sari.same as picture. </h1>
                    <div className="flex gap-3 mt-2">
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                    </div>
                </div>

            </div>

            <div className='mx-5 border mt-5 p-5'>
                <div className="flex">
                    <div className="flex items-center px-2 rounded-md">
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                        <img className='w-[16px]' src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""></img>
                    </div>
                    <small>({user?.displayName.slice(0, 3) || "User"}****)</small>
                </div>

                <div className="mt-5">
                    <h1>Product is original and Im satisfied but this is chinese market product. I thought it would be Global market product. Compared to the price I have no complain at all.</h1>
                    <div className="flex gap-3 mt-2">
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                        <img className='w-24 h-24 ' src={data?.productsImage} alt="" />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Reviews;
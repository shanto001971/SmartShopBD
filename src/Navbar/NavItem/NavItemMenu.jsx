import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";


const NavItemMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="">
            <ul className="menu menu-horizontal px-1 items-center gap-3">
                <li className="border rounded-md"><a>Home</a></li>
                <li className="border rounded-md">
                    <select
                        className=""
                        onChange={handleSelectChange}
                    >
                        <option value="" className="p-0">Gadgets<FaAngleDown /></option>
                        <option value="strapi" >Strapi</option>
                        <option value="ghost">Ghost</option>
                        <option value="netlify">Netlify CMS</option>
                        <option value="sanity">Sanity</option>
                    </select>
                </li>
                <li className="border rounded-md">
                    <select
                        className=""
                        onChange={handleSelectChange}
                    >
                        <option value="" disabled>Jewelry<FaAngleDown /></option>
                        <option value="strapi">Strapi</option>
                        <option value="ghost">Ghost</option>
                        <option value="netlify">Netlify CMS</option>
                        <option value="sanity">Sanity</option>
                    </select>
                </li>
                <li className="border rounded-md">
                    <select
                        className=""
                        onChange={handleSelectChange}
                    >
                        <option value="" disabled>Leather<FaAngleDown /></option>
                        <option value="strapi">Strapi</option>
                        <option value="ghost">Ghost</option>
                        <option value="netlify">Netlify CMS</option>
                        <option value="sanity">Sanity</option>
                    </select>
                </li>
                <li className="px-5 border rounded-md p-2">Health & Fitness</li>
                <li className="px-5 border rounded-md p-2">Super Deals</li>
                <li className="px-5 border rounded-md p-2">Shop Now</li>
            </ul>
        </div>
    );
};

export default NavItemMenu;
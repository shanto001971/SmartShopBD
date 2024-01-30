import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";


const NavItemMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="">
            <ul className="menu menu-horizontal px-1 items-center gap-3 flex overflow-x-auto">
                <Link style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="px-5 border rounded-md p-2"><li>Home</li></Link>
                <li style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="border rounded-md">
                    <select
                        className=""
                        onChange={handleSelectChange}
                    >
                        <option value="" className="p-0">Gadgets</option>
                        <option value="strapi" >Strapi</option>
                        <option value="ghost">Ghost</option>
                        <option value="netlify">Netlify CMS</option>
                        <option value="sanity">Sanity</option>
                    </select>
                </li>
                <li style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="border rounded-md">
                    <select
                        className=""
                        onChange={handleSelectChange}
                    >
                        <option value="" disabled>Jewelry</option>
                        <option value="strapi">Strapi</option>
                        <option value="ghost">Ghost</option>
                        <option value="netlify">Netlify CMS</option>
                        <option value="sanity">Sanity</option>
                    </select>
                </li>
                <li style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="border rounded-md">
                    <select
                        className=""
                        onChange={handleSelectChange}
                    >
                        <option value="" disabled>Leather</option>
                        <option value="strapi">Strapi</option>
                        <option value="ghost">Ghost</option>
                        <option value="netlify">Netlify CMS</option>
                        <option value="sanity">Sanity</option>
                    </select>
                </li>
                <li style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="px-5 border rounded-md p-2">Health & Fitness</li>
                <li style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="px-5 border rounded-md p-2">Super Deals</li>
                <li style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="px-5 border rounded-md p-2">Shop Now</li>
            </ul>
        </div>
    );
};

export default NavItemMenu;
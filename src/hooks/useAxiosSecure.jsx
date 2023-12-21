import axios from 'axios';



const useAxiosSecure = () => {

  const axiosSecure = axios.create({
    baseURL: 'https://smart-shop-bd-server-side.vercel.app', 
  });
  return [axiosSecure];
};

export default useAxiosSecure;
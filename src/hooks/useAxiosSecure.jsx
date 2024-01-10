import axios from 'axios';



const useAxiosSecure = () => {

  const axiosSecure = axios.create({
    baseURL: 'https://smart-shop-bd.vercel.app', 
  });
  return [axiosSecure];
};

export default useAxiosSecure;
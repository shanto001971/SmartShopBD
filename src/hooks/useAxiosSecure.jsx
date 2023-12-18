import axios from 'axios';



const useAxiosSecure = () => {

  const axiosSecure = axios.create({
    baseURL: 'https://smartshopbd-serverside-production.up.railway.app', 
  });
  return [axiosSecure];
};

export default useAxiosSecure;
import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-one-delta.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.error(error))
                console.log('logout the user')
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;
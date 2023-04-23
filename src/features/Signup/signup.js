import React, { useState, useEffect } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import Google from '../../assets/Google.svg'
import signup from '../../assets/signup.svg'
import { useNavigate } from 'react-router-dom';
import useSignup from './hooks/useSignup';
import { toast } from "react-toastify";


const Signup = () => {

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const baseUrl = "https://localhost:5000";

    const maindatalink = async (loginBody) => {
        const loginUrl = `${baseUrl}/create_user/${profile.id}`;
        const headers = { "content-type": "application/json" };
        try {
            const response = await axios.post(loginUrl, loginBody, {
                headers: headers,
            });
            console.log(response.data.status)
            return response.data.status;
        } catch (e) {
            throw new Error(e);
        }
    };


    const senddata = async (data) => {
        try {
            const payload = {
                user_img: data.picture,
                unique_id: data.id,
                user_name: data.name,
                user_email: data.email,
                user_description: data.verified_email,
            };
            const authResponse = await maindatalink(payload);

            if (authResponse) {
                toast("OTP Sent Successfully", {
                    type: toast.TYPE.INFO,
                    autoClose: 5000,
                });
            } else {
                toast("Bad Credentials", {
                    type: toast.TYPE.ERROR,
                    autoClose: 3000,
                });
            }
        } catch (e) {
            toast(e, { type: toast.TYPE.ERROR, autoClose: 3000 });
        }
    };


    // useEffect(() => {

    // }, [user]);

    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse)
            setUser(codeResponse);
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log(profile);
                        senddata(profile);
                    })
                    .catch((err) => console.log(err));
            }
            console.log(user)
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const logOut = () => {
        googleLogout();
        navigate('/signup')
    };

    return (
        <div className="flex gap-4 w-full px-4 py-10 justify-center h-full">

            {/* Sign Up Box */}
            <div className='flex justify-center w-full'>
                <div className="p-2 drop-shadow-2xl shadow-blue-400 shadow-2xl rounded-md ">
                    <div className="flex flex-col justify-center h-full gap-4 items-center text-navblue rounded-md bg-white px-8 lg:px-16 py-4">
                        <span className="text-xl font-bold">SIGN UP WITH</span>
                        <div className='rounded-md bg-white p-2 drop-shadow-md'>
                            <img src={Google} alt='google' />
                        </div>
                        <button
                            className='bg-white hover:bg-navblue hover:text-white border-2 border-navblue rounded-full px-12 py-2'
                            onClick={() => login()}
                        >
                            Sign Up
                        </button>
                        <button onClick={logOut}>Log out</button>
                        <span>Do you already have an account? <a href='/login' className='underline-offset-4 underline font-semibold'>Log in</a></span>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <div className='w-full hidden md:flex justify-end '>
                <img src={signup} alt='' />
            </div>

        </div>
    );
}

export default Signup;
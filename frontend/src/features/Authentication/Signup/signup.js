import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Google from '../../../assets/Google.svg'
import signup from '../../../assets/signup.svg'
import jwt_decode from 'jwt-decode'
import UseSignup from '../hooks/useSignup'
import { useDispatch, useSelector } from "react-redux";
import { set_loading } from '../slices/useauthslice';
import SuccessModal from '../../../UI/SuccessModal'
import Loading from '../../../UI/loading'


const Signup = () => {

    // const logOut = () => {
    //     googleLogout();
    //     localStorage.removeItem(LocalStorageItems.user_data);
    //     navigate('/signup');
    // };

    const dispatch = useDispatch()
    const { loading } = useSelector(
        (store) => store.auth
    );

    const { create_user } = UseSignup()

    return (
        <div className="flex gap-4 w-full px-4 py-10 justify-center h-full">
            {loading && (
                <SuccessModal successState={loading}>
                    <Loading />
                </SuccessModal>
            )}

            {/* Sign Up Box */}
            <div className='flex justify-center w-full'>
                <div className="p-2 drop-shadow-2xl shadow-blue-400 shadow-2xl rounded-md ">
                    <div className="flex flex-col justify-center h-full gap-4 items-center text-navblue rounded-md bg-white px-8 lg:px-16 py-4">
                        <span className="text-xl font-bold">SIGN UP WITH</span>
                        {/* <div className='rounded-md bg-white p-2 drop-shadow-md'>
                            <img src={Google} alt='google' />
                        </div> */}
                        {/* <button
                            className='bg-white hover:bg-navblue hover:text-white border-2 border-navblue rounded-full px-12 py-2'
                            onClick={() => increment()}
                        >
                            Sign Up
                        </button> */}
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                create_user(jwt_decode(credentialResponse.credential));
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
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
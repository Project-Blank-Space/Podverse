import React, { useState} from 'react';
import { googleLogout} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import useSignup from '../Authentication/hooks/useSignup';

const Profile = () => {
    
    const {profile} = useSignup();

    console.log(profile)

    const navigate = useNavigate();

    const logOut = () => {
        googleLogout();
        navigate('/signup')
    };


    return (
        <div className='bg-white text-black'>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
        </div>

    );
}

export default Profile;
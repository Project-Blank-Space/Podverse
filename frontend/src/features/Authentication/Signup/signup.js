import React, { useState} from 'react';
import { useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import Google from '../../../assets/Google.svg'
import signup from '../../../assets/signup.svg'
import { useNavigate } from 'react-router-dom';
import { LocalStorageItems } from '../../../shared/localstorageitems';
import useLogin from '../hooks/useLogin';


const Signup = () => {

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const navigate = useNavigate()

    const { getData } = useLogin()
    
    function process() {
        getData();
        setTimeout(() => {
            navigate('/dashboard');
        }, 1000);

    }

    const baseUrl = "http://127.0.0.1:5000";

    const maindatalink = async (loginBody) => {
        const loginUrl = `${baseUrl}/create_user/${profile.id}`;
        const headers = { "content-type": "application/json" };
        try {
            const response = await axios.post(loginUrl, loginBody, {
                headers: headers,
            });
            console.log(response.status)
            if (response.status) {
                localStorage.setItem(LocalStorageItems.user_id, JSON.stringify(profile.id));
                process();
            } else {
                console.log("error")
            }
            return response.status;
        } catch (e) {
            throw new Error(e);
        }
    };


    const checkData = async (data) => {
        const url = `${baseUrl}/check_user/${data.id}`;
        const headers = { "content-type": "application/json" };
        try {
            const response = await axios.get(url, {
                headers: headers,
            });
            console.log(response.data.user_exists);
            // window.alert(response.data.user_name)
            return response.data.user_exists;
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
            console.log(payload)
            await maindatalink(payload);
        } catch (e) {
            console.log(e)
        }
    };


    // useEffect(() => {

    // }, [user]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse)
            setUser(codeResponse);
            try {
                if (user) {
                    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                        .then((res) => {
                            checkData(res.data).then((check) => {
                                console.log(check);
                                if (check == true) {
                                    process()
                                }
                                else {
                                    setProfile(res.data);
                                    console.log(profile);
                                    senddata(profile);
                                }
                            });
                        })
                        .catch((error) => {

                            if (error.response.status === 409) {
                                window.alert("An account with that email or username already exists.");
                            } else {
                                window.alert("An unknown error occurred. Please try again later.");
                            }

                        });
                }
            }
            catch (error) {

                if (error.response.status === 409) {
                    window.alert("An account with that email or username already exists.");
                } else {
                    window.alert("An unknown error occurred. Please try again later.");
                }

            }
            console.log(user)
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    // const logOut = () => {
    //     googleLogout();
    //     localStorage.removeItem(LocalStorageItems.user_data);
    //     navigate('/signup');
    // };

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
                        {/* <button onClick={logOut}>Log out</button> */}
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
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET, POST } from "../../../utils";
import { set_user , set_loading} from "../slices/useauthslice";
import { LocalStorageItems } from "../../../shared/localstorageitems";
import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";

const UseSignup = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(
        (store) => store.auth
    );

    useEffect(() => {
        if (user) {
            const maindatalink = async (loginBody) => {
                console.log(user)
                const loginUrl = `${baseUrl}/create_user/${user.unique_id}`;
                const headers = { "content-type": "application/json" };
                try {
                    const response = await axios.post(loginUrl, loginBody, {
                        headers: headers,
                    });
                    console.log(response.status)
                    if (response.status) {
                        localStorage.setItem(LocalStorageItems.user_id, JSON.stringify(user.unique_id));
                        process();
                    } else {
                        console.log("error")
                    }
                    return response.status;
                } catch (e) {
                    throw new Error(e);
                }
            };

            maindatalink(user);
        }


    }, [user]);

    const { getData } = useLogin()

    function process() {
        getData();
        setTimeout(() => {
            set_loading(false)
            navigate('/dashboard');
        }, 1000);

    }

    const baseUrl = "http://127.0.0.1:5000";


    const checkData = async (data) => {
        const url = `${baseUrl}/check_user/${data.sub}`;
        const headers = { "content-type": "application/json" };
        try {
            const response = await axios.get(url, {
                headers: headers,
            });
            console.log(response.data.user_exists);
            return response.data.user_exists;
        } catch (e) {
            throw new Error(e);
        }
    };


    const create_user = (data) => {
        console.log(data)
        dispatch(set_loading(true))
        checkData(data)
            .then((check) => {
                console.log(check)
                if (check === 'true') {
                    process()
                }
                else {
                    const payload = {
                        user_img: data.picture,
                        unique_id: data.sub,
                        user_name: data.name,
                        user_email: data.email,
                        user_description: data.email_verified,
                    };
                    console.log(payload)
                    dispatch(set_user(payload))
                    console.log(user)
                }
            })
            .catch((error) => {
                console.error(error);
            });
        // try {
        //     const res = await GET({
        //         url: ``,
        //     });
        //     dispatch(set_user(res.payload.data));
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return {
        create_user
    };

}

export default UseSignup;

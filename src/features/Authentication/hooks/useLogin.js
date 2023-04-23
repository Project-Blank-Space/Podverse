import { useEffect, useState } from "react";
import axios from "axios";
import { LocalStorageItems } from "../../../shared/localstorageitems";

const useLogin = () => {

    // useEffect(() => {
    // }, [user]);
    const userid =   JSON.parse(localStorage.getItem(LocalStorageItems.user_id));
    console.log(userid)

    const baseUrl = "http://127.0.0.1:5000";

    const getData = async () => {
        const url = `${baseUrl}/get_data/${userid}`;
        const headers = { "content-type": "application/json" };
        try {
            const response = await axios.get(url, {
                headers: headers,
            });
            localStorage.setItem(LocalStorageItems.user_data, JSON.stringify(response.data[userid]));
            console.log(response.data);
            return response.data;
        } catch (e) {
            throw new Error(e);
        }
    };

    return {
        getData,
    };
};

export default useLogin;

import { useEffect, useState } from "react";
import axios from "axios";

const useSignup = () => {

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    // useEffect(() => {
    //     if (user) {
    //         axios
    //             .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${user.access_token}`,
    //                     Accept: 'application/json'
    //                 }
    //             })
    //             .then((res) => {
    //                 setProfile(res.data);
    //                 console.log(profile)
    //             })
    //             .catch((err) => console.log(err));
    //     }
    // }, [user]);

    const sign = () => {
        console.log(user);
        setUser({ access_token: "123456789" });
    };

    const baseUrl = "https://localhost:5000";
    const putdata = async (loginBody) => {
        const loginUrl = `${baseUrl}/create_user/${user.access_token}`;
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

    return {
        user,
        setUser,
        profile,
        setProfile,
        sign,
        putdata,
    };
};

export default useSignup;

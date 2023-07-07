import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

export const http = (method, config) => {
  const { url: parameter, headers = {}, data = {}, dynamicToken } = config;
  const paramsKey = method === "get" ? "params" : "data";

  const requestHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...headers,
  };

//   const token = dynamicToken || localStorage.getItem("token"); // create a function if needed
//   if (token) {
//     requestHeaders.authorization = `Bearer ${token}`;
//   }

  const axioOptions = {
    method,
    url: `${baseUrl}${parameter}`,
    headers: requestHeaders,
    [paramsKey]: data,
  };

  return new Promise((resolve, reject) => {
    axios(axioOptions)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const { response } = err;
        if (response) {
          if (response.status === 401) {
            // if protected route can logout user
            localStorage.clear();
            window.location.reload();
            reject(response.data);
          } else {
            reject(response.data);
          }
        } else {
          reject(new Error("Something went wrong"));
        }
      });
  });
};

export const GET = (config) => http("get", config);

export const POST = (config) => http("post", config);

export const PUT = (config) => http("put", config);

export const PATCH = (config) => http("patch", config);

export const DELETE = (config) => http("delete", config);

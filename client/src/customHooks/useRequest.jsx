import axios from "axios";
import React, { useEffect } from "react";
import { host } from "../constant/apiUrl";

const useRequest = () => {
  const request = axios.create({
    baseURL: host,
  });

  useEffect(() => {
    // Add a request interceptor
    request.interceptors.request.use(
      function (config) {
        // const token = localStorage.getItem('access');
        // config.headers['Authorization'] = `Bearer ${token}`
        console.log("I am going out");
        return config;
      },
      function (error) {
        console.log("Error going out");
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    request.interceptors.response.use(
      function (response) {
        console.log("I am coming in");
        return response;
      },
      function (error) {
        console.log("Error coming in");
        return Promise.reject(error);
      }
    );
  }, [request]);

  return request;
};

export default useRequest;

import React from "react";
import useRequest from "./useRequest";
import { companyUrl } from "../constant/apiUrl";

const useCompanyApi = () => {
  const request = useRequest();

  const getCompany = async () => {
    const response = await request.get(companyUrl);
    return response.data;
  };

  return { getCompany };
};

export default useCompanyApi;
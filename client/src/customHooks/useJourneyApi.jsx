import React from 'react'
import useRequest from './useRequest';
import { journeyUrl } from '../constant/apiUrl';
const useJourneyApi = () => {

const request = useRequest();

const getJourney = async () =>{
    const response = await request.get(journeyUrl);
    return response.data;
}
  return {getJourney}
}

export default useJourneyApi

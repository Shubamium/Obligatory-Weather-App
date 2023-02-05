import axios from "axios";
import { useEffect, useState } from "react"

export default function useCountryFlag(id){
    let [countryFlag,setCF] = useState();
    let [error,setError] = useState();

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                let url = `https://countryflagsapi.com/png/${id.toLowerCase()}`
                let resp = await axios.get(url,{responseType:'blob',timeout:2000});
                let blob = resp.data;
                let src = URL.createObjectURL(blob);
                
                let countryNameUrl = `https://restcountries.com/v2/alpha/${id.toLowerCase()}`
                let countryData = await axios.get(countryNameUrl);

                setCF(res => {
                    return{
                        image:src,
                        name:countryData.data.name
                    }
                });
            }
            catch(error){
                setError(error);
            }
           
        }
        fetchUser();
    },[id]);

    return [countryFlag,error];

}
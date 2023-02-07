import axios from "axios";
import { useEffect, useState } from "react"

export default function useCountryFlag(id){
    let [countryFlag,setCF] = useState([]);
    let [error,setError] = useState();
    let [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                let url = `https://countryflagsapi.com/png/${id.toLowerCase()}`
                let resp = await axios.get(url,{responseType:'blob',timeout:2000});
                let blob = resp.data;
                let src = URL.createObjectURL(blob);
                
                let countryNameUrl = `https://restcountries.com/v2/alpha/${id.toLowerCase()}`
                let countryData = await axios.get(countryNameUrl);
                
                const data = {
                    image:src,
                    name:countryData.data.name
                };
                setCF(res => {
                    return data;
                });
            }
            catch(error){
                setError(error);
                setCF(()=>[]);
            }
            setLoading(false);
           
        }
        setLoading(true);
        fetchUser();
    },[id]);

    return [countryFlag,error,loading];

}
import { useEffect } from "react";

export default function useWeatherSearch(query){

    useEffect(()=>{
        async function loadData(){
            let link = new URL("https://api.api-ninjas.com/v1/city");
            link.searchParams.append('name',val);
            let abort = new AbortController();
            let fetch = await axios.get(link.href,{
              headers:{
                'Content-Type':'application/json',
                'X-API-KEY':'vFuWC7Us573uNb763J90Vg==5y0lzPB2KiuSeY2Z'
              },
              signal: abort.signal
            })
            
            let result = fetch.data;
            let option = result.map((city)=>{return {value:city.name,label:city.name}});
        }
        loadData();
    },[query]);
}
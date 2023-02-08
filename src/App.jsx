import { useEffect, useState } from 'react'
import ExtraDetail from './component/ExtraDetail'
import MainDetail from './component/MainDetail'
import { SideDetail } from './component/SideDetail'
import WeatherDataContext from './context/WeatherDataContext'
import AsyncSelect from 'react-select/async'
import axios from 'axios'
import { motion , AnimatePresence} from 'framer-motion'

function App() {

  const jakartaSample = {
    "coord": {
        "lon": 106.8451,
        "lat": -6.2146
    },
    "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
    }],
    "base": "stations",
    "main": {
        "temp": 27.05,
        "feels_like": 29.47,
        "temp_min": 25.5,
        "temp_max": 29.18,
        "pressure": 1007,
        "humidity": 76,
        "sea_level": 1007,
        "grnd_level": 1005
    },
    "visibility": 10000,
    "wind": {
        "speed": 6.58,
        "deg": 235,
        "gust": 12.25
    },
    "clouds": {
        "all": 100
    },
    "dt": 1675622661,
    "sys": {
        "type": 2,
        "id": 2033644,
        "country": "ID",
        "sunrise": 1675637767,
        "sunset": 1675682232
    },
    "timezone": 25200,
    "id": 1642911,
    "name": "Jakarta",
    "cod": 200
  }

  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState('');
  const apikey = '0825296408d1c2e6799cc152703d801e';

  async function handleCitySearch(val){
    let link = new URL("https://api.api-ninjas.com/v1/city");
    link.searchParams.append('name',val);
    let fetch = await axios.get(link.href,{
      headers:{
        'Content-Type':'application/json',
        'X-API-KEY':'vFuWC7Us573uNb763J90Vg==5y0lzPB2KiuSeY2Z'
      }
    })
    let result = fetch.data;
    let option = result.map((city)=>{return {value:city.name,label:city.name}});
    return option;
  }

  function handleWeather(val){
    console.log(val.value);
    setCurrentCity(val.value);
  }

  useEffect(()=>{
    setWeatherData('');
    if(currentCity === '') return;
    async function loadData(){
      try{
        let url = new URL("https://api.openweathermap.org/data/2.5/weather");
        url.searchParams.append('q',currentCity);
        url.searchParams.append('units','metric');
        url.searchParams.append('appid',apikey);

        let response = await axios.get(url.href);
        if(response && response.data){
          setWeatherData(response.data);
        }
      }catch(error){
        console.log(error);
      }
    }

    loadData();
   
  },[currentCity]);

  useEffect(()=>{
    setWeatherData(jakartaSample);
  },[]);

  return (
    <main >
      <WeatherDataContext.Provider value={weatherData}>
        {weatherData ? 
        <motion.div
        className='App'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2,delay:1.4}}
        >
            <div className="panel_main">
            <motion.div className="searchbar" initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:1,duration:1.3}}>
               <AsyncSelect loadOptions={handleCitySearch}  onChange={handleWeather}/>
            </motion.div>
            {/* <Searchbar onValueChange={(val)=> console.log(val)} options={["Jakarta","Manila"]}/> */}
            <div className='main_panel'>
              <MainDetail />
            </div>
            <ExtraDetail/>
          </div>
          <div className='panel_side'>
            <SideDetail/>
          </div>
        </motion.div>
        :
        <AnimatePresence
        initial={true}
        mode={'wait'}
        >
          <motion.h2
          initial={{y:'100',opacity:0}}
          animate={{y:'0',opacity:1}}
          transition={{delay:0,duration:2}}
          className="loading-text"
          >Loading Data. . .</motion.h2>
        </AnimatePresence>
        }
      </WeatherDataContext.Provider>
    </main>
  )
}

export default App

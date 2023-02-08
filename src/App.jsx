import { useContext, useEffect, useState } from 'react'
import ExtraDetail from './component/ExtraDetail'
import MainDetail from './component/MainDetail'
import Searchbar from './component/Searchbar'
import { SideDetail } from './component/SideDetail'
import WeatherDataContext from './context/WeatherDataContext'
import AsyncSelect from 'react-select/async'
import axios from 'axios'
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
  const manilaSample = {
      "coord": {
          "lon": 120.9822,
          "lat": 14.6042
      },
      "weather": [{
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
      }],
      "base": "stations",
      "main": {
          "temp": 25.41,
          "feels_like": 26.12,
          "temp_min": 25.07,
          "temp_max": 26.17,
          "pressure": 1011,
          "humidity": 81
      },
      "visibility": 9000,
      "wind": {
          "speed": 0.51,
          "deg": 0
      },
      "clouds": {
          "all": 75
      },
      "dt": 1675640053,
      "sys": {
          "type": 2,
          "id": 2008256,
          "country": "PH",
          "sunrise": 1675635807,
          "sunset": 1675677405
      },
      "timezone": 28800,
      "id": 1701668,
      "name": "Manila",
      "cod": 200
  }
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState('');
  const apikey = '0825296408d1c2e6799cc152703d801e';

  async function handleCitySearch(val){
    let fetch = await axios.get(`https://api.api-ninjas.com/v1/city?name=${val}`,{
      headers:{
        'Content-Type':'application/json',
        'X-API-KEY':'vFuWC7Us573uNb763J90Vg==5y0lzPB2KiuSeY2Z'
      }
    })
    let result = fetch.data;
    // console.log('city:' + val);
    let option = result.map((city)=>{return {value:city.name,label:city.name}});
    return option;
  }

  function handleWeather(val){
    console.log(val.value);
    setCurrentCity(val.value);
  }
  useEffect(()=>{
    if(currentCity === '') return;
    async function loadData(){
      try{
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${apikey}`)
        if(response && response.data){
          setWeatherData(response.data);
        }
      }catch(error){
        console.log(error);
      }
    }

    loadData();
  },[currentCity]);
  return (
    <main className="App">
      <WeatherDataContext.Provider value={weatherData || jakartaSample}>
          <div className="panel_main">
            <AsyncSelect loadOptions={handleCitySearch}  onChange={handleWeather}/>
            {/* <Searchbar onValueChange={(val)=> console.log(val)} options={["Jakarta","Manila"]}/> */}
            <div className='main_panel'>
              <MainDetail/>
            </div>
            <ExtraDetail/>
          </div>
          <div className='panel_side'>
            <SideDetail/>
          </div>
      </WeatherDataContext.Provider>
    </main>
  )
}

export default App

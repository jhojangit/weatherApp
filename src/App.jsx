import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import WheterCard from './components/WheterCard';
import Loading from './components/Loading';
import CountryError from './components/CountryError';

function App() {

  const [latLon, setLatLon] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [errorNameCity, setErrorNameCity] = useState(false);


  useEffect( () => {
    const succes = pos => {
        const obj = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        }
        setLatLon(obj)
    }

    const error = err => {
      console.log(err);
    }

    navigator.geolocation.getCurrentPosition(succes, error)
  }, [])


  useEffect( () => {
    
    if(latLon){
      setErrorNameCity(false)
      if(!city){
          const apiKey = '04667eb34c29a45e2b143cb93221e6c8'
          const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${apiKey}`
          axios.get(URL)
          .then(res => setWeather(res.data))
          .catch(err => console.log(err));
      }else{
          const apiKey = '04667eb34c29a45e2b143cb93221e6c8'
          const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          axios.get(URL)
          .then(res => setWeather(res.data))
          .catch(err => setErrorNameCity(true));
      }
    }
  }, [city, latLon])


  const searchCity = (e) =>{
      e.preventDefault()
      const textValue = e.target.id.value
      textValue === '' ? setErrorNameCity(true):
      setCity(textValue)
      e.target.id.value = ''
  }
  

  return (
    <div className="App">
      

        {
        weather &&
            <form onSubmit={searchCity} action="">
              <input type="text" name="" id="id" required placeholder='Search' />
              <button type="submit">Search</button>
            </form>
        }


        {
          errorNameCity && <CountryError/>
        }
        
        {
          !weather
          ? <Loading className="load"/> 
          : <WheterCard weather ={weather}/>
        }
    </div>
  )
}

export default App


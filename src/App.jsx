import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import WheterCard from './components/WheterCard';
import ErrorPermission from './components/ErrorPermission';

function App() {


  const [latLon, setLatLon] = useState();
  const [weather, setWeather] = useState();
  const [hasError, setHasError] = useState(false);


  useEffect( () => {
    const succes = pos => {
        const obj = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        }
        setLatLon(obj)
    }

    const error = err => {
      setHasError(true)
    }

    navigator.geolocation.getCurrentPosition(succes, error)
  }, [])


  useEffect( () => {
    if(latLon){
      const apiKey = '04667eb34c29a45e2b143cb93221e6c8'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${apiKey}`
      axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err));
    }

  }, [latLon])

  return (
    <div className="App">
      {hasError == true
      ? <ErrorPermission/>
      :<WheterCard weather ={weather}/>
      } 
      </div>
  )
}

export default App

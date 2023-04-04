import { useState, useEffect } from "react";

const WheterCard = ({ weather }) => {

    const clouds = weather?.clouds.all
    const name = weather?.name
    const minName = weather?.sys.country
    let tempFar = `${Math.floor(weather?.main.temp)}° F`
    let tempCel = `${Math.floor(weather?.main.temp - 273)}° C`
    const description = weather?.weather[0].description
    const main = weather?.weather[0].main
    const icon = weather?.weather[0].icon
    const wind = weather?.wind.speed
    const feels_like = Math.floor(weather?.main.feels_like - 273)
    const humidity = weather?.main.humidity
    const pressure = weather?.main.pressure
    const temp_max = weather?.main.temp_max
    const temp_min = weather?.main.temp_min

    
    let a = document.querySelector('.App')
    a.style.backgroundImage='url(/backGround/rain.jpg)';

    const [btnChange, setBtnChange] = useState();
    
    useEffect(() => {
        setBtnChange(setBtnChange(tempCel)||setBtnChange(tempFar))
    }, [weather])

    
    const buttonChange = ()=> {
            btnChange === tempFar ?setBtnChange(tempCel):setBtnChange(tempFar)
    } 

    return (
        <article className="card">
            <h1>Weather  App</h1>
            <h2>{name}, {minName}</h2>

            <header>
                <img src= {`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <p>Clouds: <b>{clouds}%</b></p>
            </header>

            <section>
                <div className="info">
                    <p>{main}</p>
                    <p>{description}</p>

                </div>
                <div className="temp">
                    {btnChange
                        ?<h2>{btnChange}</h2>
                        :<h2>{tempCel}</h2>
                    } 
                    <button onClick={buttonChange}>Change F°/ C°</button>
                </div>
            </section>

            <div className="list">
                <ul>
                    <li><b>Feels_like</b><br /> {feels_like}°C</li>
                    <li><b>Spped wind</b><br /> {wind} m/s    </li>
                    <li><b>Humidity  </b><br /> {humidity}%   </li>
                    <li><b>Pressure  </b><br /> {pressure} hPa</li>
                    <li><b>Temp_max  </b><br /> {temp_max}°   </li>
                    <li><b>Temp_min  </b><br /> {temp_min}°   </li>
                </ul>
            </div>

        </article>
    )
}

export default WheterCard
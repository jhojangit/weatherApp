import { useState } from "react";

const WheterCard = ({ weather }) => {

    const clouds = weather?.clouds.all
    const name = weather?.name
    const minName = weather?.sys.country
    const tempFar = `${Math.floor(weather?.main.temp)}° F`
    const tempCel = `${Math.floor(weather?.main.temp - 273)}° C`
    const description = weather?.weather[0].description
    const main = weather?.weather[0].main
    const wind = weather?.wind.speed
    const feels_like = Math.floor(weather?.main.feels_like - 273)
    const humidity = weather?.main.humidity
    const pressure = weather?.main.pressure
    const temp_max = weather?.main.temp_max
    const temp_min = weather?.main.temp_min


    const [btnChange, setBtnChange] = useState();
    const buttonChange = () => btnChange === tempCel ? setBtnChange(tempFar) : setBtnChange(tempCel)


    return (
        <article className="card">
            <h1>Weather  App</h1>
            <h2>{name}, {minName}</h2>

            <header>
                🌤️
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
                        :<h2>{tempFar}</h2>
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
import { useEffect, useState } from 'react'

import handImage from './assets/alxxvine_None_5856d00a-2149-4fec-a4a7-4416ad99c770.png'
import cloudImage1 from './assets/image 1332.png'
import cloudImage2 from './assets/image 1334.png'
import { getWeatherByCity, getNextHoursForecast } from './api/openWeather'
import Forecast from './components/Forecast'

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getWeatherByCity('Kathmandu').then((data) => {
      setWeather(data);
    });
  }, [])

  useEffect(() => {
    if (weather) {
      const { coord } = weather;
      getNextHoursForecast(coord.lat, coord.lon).then((data) => {
        setForecast(data)
      });
    }
  }, [weather]);

  if (!weather) {
    return <div>Loading...</div>
  }

  console.log(forecast);

  return (
    <>
      <div className="h-screen w-full relative flex items-center justify-center">
        <div className="h-full w-full bg-gradient-to-l from-[#C2B6AF] to-[#D1C7C3] absolute inset-0"></div>
        <img src={handImage} alt="Hand Image" className='absolute h-full w-full object-cover object-bottom bottom-0' />
        <img src={cloudImage1} alt="Cloud Image 1" className='absolute bottom-[10%] left-[20%] w-[clamp(100px,20vw,200px)] h-auto' />
        <img src={cloudImage2} alt="Cloud Image 2" className='absolute top-[20%] right-[5%] w-[clamp(100px,20vw,200px)] h-auto' />
        <div className="w-[clamp(320px,70vw,714px)] h-[clamp(400px,75vh,800px)] px-8 py-4 z-10 bg-gradient-to-tr from-[#7F6C63]/60 to-[#ADA39E]/60 rounded-[2.904rem]">
          <div className="h-[118px] flex items-center justify-between gap-4 text-white border-b border-white/20">
            <div>
              <p className='text-[clamp(12px,2vw,20px)] leading-[79%] pb-2'>{weather.name}</p>
              <p className='text-[clamp(48px,10vw,84px)] leading-[76%]'>76 &deg;</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" className='w-12 h-12' />
              <p className=''>{weather.weather[0].description}</p>
              <div className='flex items-center gap-2 text-xs'>
                <p>H: {weather.main.temp_max} &deg;</p>
                <p>L: {weather.main.temp_min} &deg;</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-4 border-b border-white/20 py-4">
            {forecast && forecast.list.slice(0, 6).map((item, index) => (
              <Forecast key={index} time={item.dt_txt} icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} temp={item.main.temp} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

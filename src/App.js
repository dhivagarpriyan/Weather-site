

import { useEffect, useState } from "react";
import getFormattedWeatherData from "./Weatherservice";
import coldbg from "./assets/cold.jpg"
import hotbg from "./assets/hot.jpg" 
import Description from "./components/Description";


function App() {

   const [weather,setWeather]=useState(null);
   const[units,setUnits]=useState("metric");
   const[city,setCity]=useState("paris");
   const[bg,setBg]=useState()
  useEffect( ()=>{
     const fetchWeather=  async()=>{
      const data= await getFormattedWeatherData(city,units)
      setWeather(data)

      /*dynamic bg*/
      const threshold= units === "metric" ? 20:60;
      if(data.temp <= threshold) setBg(coldbg) 
      else setBg(hotbg)
    }
     fetchWeather()
  },[units,city])

  const handleclick=(e)=>{
       const button=e.currentTarget;
       const currentUnit=button.innerText.slice(1);

       const isCelsius=currentUnit ==="C";
       button.innerText = isCelsius ? "°F" : "°C";
       setUnits(isCelsius ?"metric":"imperial")
       
       

  }

  const enterKeyPressed =(e)=>{
   if(e.keyCode === 13)
   setCity(e.currentTarget.value)
   
     
  }
  
  return (
    <div className="App" style={{backgroundImage:`url(${bg})`}}>
     < div className='overlay'>
        {
         weather  &&  

         <div className='container'>
         <div className='section section_inputs'>
            <input  onKeyDown={enterKeyPressed}
            type='text' placeholder='SEARCH FOR CITY...' />
            <button onClick={(e)=>handleclick(e)}>°F</button>
         </div>
         <div className=" section section_temperature">
            <div className="icon">
             <h3>{`${weather.name} ${weather.country}`}</h3>
             <img 
             src={`${weather.iconURL}`}
              alt=""
              />
              <h3>{`${weather.description}`}</h3>
            </div>
            <div className="temperature">
             <h1>{`${weather.temp.toFixed()} °${ units === "metric" ? "C":"F"}`}</h1>

            </div>
         </div>
          <Description
             weather={weather}
             units={units}
          />
       </div>
        }
          
        
     </div>

    </div>
  );
}

export default App;

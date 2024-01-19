 const API_KEY="605b10af3ac06fdce3b288f6775a5cf8";

 const MakeIconURL=(iconid)=>`http://openweathermap.org/img/wn/${iconid}@2x.png`

 

const getFormattedWeatherData=async(city,units="metric")=>{
    const URL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    const response=await fetch(URL)
    const data= await response.json()
    
    const{
        weather,
        main:{temp,temp_min,temp_max,feels_like,pressure,humidity},
        wind:{speed},
        sys:{country},
        name,
    }=data

    const{description,icon}=weather[0];
   
    return{
        description,
        iconURL:MakeIconURL(icon),
        temp,
        temp_min,
        temp_max,
        feels_like,
        pressure,
        humidity,
        speed,
        country,
        name
    }

}

export default getFormattedWeatherData
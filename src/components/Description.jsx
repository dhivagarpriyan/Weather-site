import React from 'react'
import {FaArrowDown,FaArrowUp,FaWind} from "react-icons/fa"
import{BiHappy} from "react-icons/bi"
import{MdCompress,MdOutlineWaterDrop} from "react-icons/md"
import "./Description.css"


const Description = ({weather,units}) => {
       
     const tempUnit= units==="metric" ? "°C":"°F";
     const windUnit= units==="metric" ? "m/s":"m/h";

    const cards=[
       {
            id:1,
            icon:<FaArrowDown />,
            tittle:"min",
            data:weather.temp_min.toFixed(),
            unit:tempUnit
        }, 

        {
            id:2,
            icon:<FaArrowUp />,
            tittle:"max",
            data:weather.temp_max.toFixed(),
            unit:tempUnit
        }, 

        {
            id:3,
            icon:<BiHappy/>,
            tittle:"feels_like",
            data:weather.feels_like.toFixed(),
            unit:tempUnit
        }, 

        {
            id:4,
            icon:<MdCompress />,
            tittle:"pressure",
            data:weather.pressure.toFixed(),
            unit:"hpa"
        }, 

        {
            id:5,
            icon:<MdOutlineWaterDrop />,
            tittle:"humidity",
            data:weather.humidity.toFixed(),
            unit:"%"
        }, 

        {
            id:6,
            icon:<FaWind />,
            tittle:"wind speed",
            data:weather.speed.toFixed(),
            unit:windUnit
        }, 
    ]
  return (
    <div className=' section section_description'>

        {cards.map(({id,icon,tittle,data,unit})=>(

          <div key={id} className='card'>
          <div className='description_card-icon'>
                {icon}
             <small>{tittle}</small> 
          </div>
              <h1>{`${data} ${unit}`}</h1>
           </div>
        )

        )}
       
       
    </div>
  )
}

export default Description
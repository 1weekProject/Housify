import React from 'react'
// import {useNavigate} from "react-router-dom"
import GeoLocation from './GeoLocation.jsx'
import MapInput from "./MapInput.jsx"


import Sliders from './Sliders.jsx'
const Home = (props) => {
// const navigate= useNavigate()

// const hand=()=>{
//   navigate("/about")
// }



  return (
    <div>
     <div className='home'></div>
     <Sliders />
     {/* <MapInput/> */}
     <GeoLocation/>
    
    
    </div>
   
  )
}

export default Home
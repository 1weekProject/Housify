import React, { useEffect, useState } from "react";
import ReactMapGl from "react-map-gl"

const GeoLocation = () => {
  const [location, setLocation] = useState(false)
  const [longitude,setLongitude]=useState("")
  const[latitude,setLatitude]=useState("")
  

  const onSuccess = (location) => {

    setLocation(true)
    setLatitude(location.coords.latitude)
    setLongitude(location.coords.longitude);
  };
  const onError = (error) => {
   setLocation(true)
   error
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation Not Supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  const localisation = {
    latitude : latitude,
    longitude : longitude,
    zoom : 10
  }

  return (
    
  <div>
        <div><a href="ttps://www.openstreetmap.org/#map=16/"></a></div>
        <div>latitude : {localisation.latitude} </div>
        <div>longitude : {localisation.longitude}</div>

    </div>


  
  );
};

export default GeoLocation;

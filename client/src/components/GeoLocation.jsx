import React, { useState, useEffect,useCallback,useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import mapstyles from "../mapStyle";
import MapInput from "./MapInput.jsx";
 

// import { formatRelative } from "date-fns";

const libraries = ["places"];

const GeoLocation = () => {
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [serachPosition,setSearchPosition]=useState([])
  const [center,setCenter] =useState ({
    lat: currentLatitude,
    lng: currentLongitude,
  });

  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation Not Supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const onMapClick=useCallback((event) => {
    setMarkers([
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  },[])

  // const mapRef=useRef()
  // onMapLoad = useCallback((map)=>{
  //   mapRef.current=map
  // },[])


  const options = {
    styles: mapstyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const onSuccess = (location) => {
    setCurrentLatitude(location.coords.latitude);
    console.log("lat", location.coords.latitude);
    setCurrentLongitude(location.coords.longitude);
    console.log("lng", location.coords.longitude);
  };
  const onError = (error) => {
    // setLocation(true);
    error;
  };

 

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });

  const getAdresse=(address)=>{
  console.log("adressss geolocation : " , address)
    const geocode = new google.maps.Geocoder()
    geocode.geocode({address : address}, (result,status)=>{
      if(status) {
      setSearchPosition(result)
      setCenter(result[0].geometry.location)

      }
    })
  }


  
  if (loadError) return "Error loading Map";
  if (!isLoaded) return "Loading map";
  
  // {serachPosition.map(pos=>{console.log(pos)})}
  console.log(serachPosition);
  
  console.log("markers", markers);

  return (
    <div>
      <div><MapInput Autocomplete={Autocomplete} getAdresse={getAdresse} /></div> 
    <div className="map_container">
      
      <GoogleMap
        mapContainerClassName="map"
        zoom={16}
        center={center}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker) => {
          return (
            <Marker
            icon= {
             { path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              fillColor: '#ff0000',
              fillOpacity: 1,
              strokeColor: '',
              strokeWeight: 0,
            scale : 6}
            }
              key={marker.time.toISOString()}
              position={{
                lat: marker.lat,
                lng: marker.lng,
              }}
            />
          );
        })}
        <Marker 
        // icon= 
        //   {{ path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        //    fillColor: '#8e9160',
        //    fillOpacity: 1,
        //    strokeColor: '',
        //    strokeWeight: 0,
        //  scale : 6}}
        position={center}/>



      </GoogleMap>
    </div>
    </div>
  );
};

export default GeoLocation;

// import React, { useEffect, useState } from "react";
// import {
//   GoogleMap,
//   useJsApiLoader,
//   Marker,
//   Autocomplete,
// } from "@react-google-maps/api";
// import MapInput from "./MapInput.jsx";
// import { json } from "react-router-dom";

// // import dotenv from "dotenv/config"

// const libraries = ["places"];

// const GeoLocation = () => {
//   const [location, setLocation] = useState(false);
//   const [longitude, setLongitude] = useState(0);
//   const [latitude, setLatitude] = useState(0);
//   const [marker, setMarker] = useState(false);
//   const [addlatitude, setAddLatitude] = useState(0);
//   const [addlongitude, setAddLongitude] = useState(0);
//   const [adress, setAdress] = useState("");

//   console.log("adress",adress);
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "",
//     libraries,

//   });

//   const localisation = {
//     lat: latitude,
//     lng: longitude,
//   };

//   const handlPosition = (e) => {
//     e.preventDefault();
//     localisation = {
//       lat: latitude,
//       lng: longitude
//     };
//   };
//   const handleDbClick = (e) => {
//     // e.preventDefault();
//     const lat = e.latLng.lat();
//     const lng = e.latLng.lng();
//     console.log("latitude", lat, "longitude", lng);

//     const geodecod = new google.maps.Geocoder();
//     geodecod.geocode({ location: { lat, lng } }, (result, status) => {
//       if (status)
//         console.log(
//           `Geolocation : ${JSON.stringify(
//             result[0]["address_components"].map((add) => {
//               console.log(`${add.long_name}`);
//             })
//           )}`
//         );
//       console.log(`Geolocation not found: ${status}`);
//     });
//   };

//   // const latlng = [
//   //   {
//   //     lat: 36.87987026860799,
//   //     lng: 10.195654731708292,
//   //   },
//   //   {
//   //     lat: 36.883963319245574,
//   //     lng: 10.192044479029082,
//   //   },
//   //   {
//   //     lat: 36.883963319245574,
//   //     lng: 10.195544479029082,
//   //   },
//   // ];

//   function Map() {
//     return (
//       <div className="map__input">
//         <MapInput
//           Autocomplete={Autocomplete}
//           handleDbClick={handleDbClick}
//           handlPosition={handlPosition}
//         />
//         <GoogleMap
//           zoom={100}
//           center={localisation}
//           mapContainerClassName="map-container"
//           options={{
//             // zoomControl: false,
//             // streetViewControl: false,
//             // mapTypeControl: false,
//           }}
//           onClick={handleDbClick}
//         >

//                     <Marker
//                       position={{
//                         lat: latitude,
//                         lng: longitude,
//                         draggable: true,
//                         title: "Drag me!",
//                       }}
//                     />
//           {/* {latlng.map((pos, idx) => {
//             return (
//               <Marker
//                 position={{
//                   lat: pos.lat,
//                   lng: pos.lng,
//                   draggable: false,
//                 }}
//                 key={idx}
//               />
//             );
//           })} */}
//         </GoogleMap>
//       </div>
//     );
//   }

//   if (!isLoaded) return <div className="geo">...Loading</div>;
//   return <Map />;
// };

// export default GeoLocation;

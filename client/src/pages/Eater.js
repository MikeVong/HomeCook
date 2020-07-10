import React,{useState, useEffect} from "react";
import{GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
import useSwr from "swr";
import { Link } from "react-router-dom";
import "./Eater.css"


const fetcher = (...arg)=> fetch(...arg).then(response => response.json());

const options={
  disableDefaultUI: true,
  
}

function Map(){
  const[selectedCook,setSelectedCook] = useState(null);
  const url ="/api/cooks"
  const { data, error } = useSwr(url, fetcher );
  const cookLocation = data && !error ? data.slice(0,50) : [];
  
  const [ currentPosition, setCurrentPosition ] = useState({lat: 27.994402, lng: -81.760254});
  
	const success = position => {
		const currentPosition = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
		}
		setCurrentPosition(currentPosition);
	};

	useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);

	},[])




 return(
   <div>
     <h1 id="info">Eater</h1>
    
  <GoogleMap
    zoom={10}
    center= {currentPosition}
    options={options}
  >

    {cookLocation.map((loc) =>(
      <Marker key={loc._id}
              position={{lat: loc.coordinates[0].lat,
                        lng: loc.coordinates[0].lng}} 
                        onMouseOver={() => {
                          setSelectedCook(loc);
                          // const currentPosition = {
                          //   lat: loc.coordinates[0].lat,
                          //   lng: loc.coordinates[0].lng
                          //   }
                          //   setCurrentPosition(currentPosition);
                        }}  
              icon={{
                url: "/food.png",
                scaledSize: new window.google.maps.Size(30,30)
              }}    
      />
     
    ))}

    {selectedCook && (
      <InfoWindow
      position={{lat: selectedCook.coordinates[0].lat,
                 lng: selectedCook.coordinates[0].lng
                }} 
                selected={()=>{
                  setSelectedCook(null); 
                }}
                onMouseOut={()=>{
                  setSelectedCook(null); 
                }}
                onCloseClick={()=>{
                  setSelectedCook(null); 
                }}
      >
        <div>
              <h2>Dish: {selectedCook.dish}</h2>
              <h3>Name: {selectedCook.name}</h3>
              <Link to={"/cooks/" + selectedCook._id}>
                      <button 
                      className="btn btn-danger">
                        Go To
                      </button>
                    </Link> 
        </div>
      </InfoWindow>
    )}

  </GoogleMap>

  </div>
 );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Eater(){
  return( <div style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCFX4fMFqcH0z5pM2gMhvX6X9Yrk__7suE`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
        </div>
  );
}





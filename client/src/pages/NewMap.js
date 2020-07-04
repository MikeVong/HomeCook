import React, {useState} from "react";
import GoogleMapReact from "google-map-react";
import useSwr from "swr";
import { Link } from "react-router-dom";
import "./NewMap.css";

const fetcher = (...arg)=> fetch(...arg).then(response => response.json());

const Marker = ({children}) => children;
//const DEFAULT_LATITUDE = 34.5193143;
//const DEFAULT_LANGITUBE = -117.3338804;




function NewMap(){
    //const langitude = this.props.coords? this.props.coords.langitude: DEFAULT_LANGITUBE;
    //const latitude = this.props.coords? this.props.coords.langitude: DEFAULT_LATITUDE;
    const [DEFAULT_LATITUDE,setLat] = useState(34.5193143);
    const [DEFAULT_LANGITUBE,setlng] = useState(-117.3338804);


    const options={
        disableDefaultUI: true
    }
    

    const url ="/api/cooks"
    const { data, error } = useSwr(url, fetcher );
    const cookLocation = data && !error ? data.slice(0,50) : [];


    return <div style={{height: "100vh", width: "100%"}}>
        <button
          className="locate"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLat(position.coords.latitude);
                setlng(position.coords.longitude);
              },
              () => null
            );
          }}
        >
          <img src="/compass.jpg" alt="compass" /> Click here to Show where you are!
        </button>
        <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
        center= {{lat: DEFAULT_LATITUDE, lng: DEFAULT_LANGITUBE}}
        
        options={options}
        defaultZoom={10}>
            {console.log(data)}
            {cookLocation.map(loc =>(
                <Marker  key={loc._id} lat={loc.coordinates[0].lat} lng={loc.coordinates[0].lng}>
                       <Link to={"/cooks/" + loc._id}>
                      <button className="food-marker">
                        <img src="/food.png" alt="food"/>
                      </button>
                    </Link>
                </Marker>
            ))}
        </GoogleMapReact>

    </div>
}




export default NewMap;

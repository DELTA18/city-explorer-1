
import { useState , useEffect } from "react";
import axios from "axios";
import Hotelcard from "./Hotelcard"


const localIPAddress = window.location.hostname;
const Hotelcontainer = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Function to fetch hotels data from backend
    const fetchHotels = async () => {
      try {
        const responsee = await axios.get(`http://${localIPAddress}:8000/foodanddine`); 
        setHotels(responsee.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };
    
    fetchHotels();
  }, []);

  return (
    <>
    <div className="hotel-container">
    
    {
      hotels.map((hotel) => {
        return(
        <Hotelcard name = {hotel.name}
        address = {hotel.address}
        city = {hotel.city}
        rating = {hotel.rating}
        type = {hotel.type}
        price = {hotel.pricing}
        vejnonvej = {hotel.vejnonvej}
        type2 = {hotel.type2}
        img = {hotel.imglink} key = {hotel.id}/>
        )
      })
    }
    
    </div>
    </>
  )
}

export default Hotelcontainer
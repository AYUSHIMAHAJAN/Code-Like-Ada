import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const VideoDescription = () => {
const {state}=useLocation();
console.log(state.title);
const [result,setResult]=useState([]);

    const headers = { 'Authorization': 'Bearer 3THI9O1m0' };
    const fetchDetails = async () => {
        try {
          const data = await fetch(
            `https://cla-epg.lgads.tv/epg/ott?title=${state.title}`,
            { headers }
          );
          
          const parsedData = await data.json();
          console.log({parsedData: parsedData?.result[0]?.links[0].urls.web});
          window.location.replace(parsedData?.result[0]?.links[0]?.urls?.web);
        //   setResult(parsedData?.result[0]?.links[0]?.urls?.web);
         
          
        } catch (error) {
          console.log(error.message);
        
        }
      };
    
      useEffect(() => {
        fetchDetails();
      }, [state.title]);
    
  return (
    <div>
      
    </div>
  )
}

export default VideoDescription
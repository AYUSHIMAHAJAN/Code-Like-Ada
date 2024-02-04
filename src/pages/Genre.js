// const romanceGenreEmotions = new Map([
//     [['Romantic', 'Sentimental', 'Heartwarming','Funny', 'Lighthearted', 'Charming'],'Romance',
//     [['Dramatic', 'Intense', 'Bittersweet'],'Drama'],
//     [ ['Whimsical', 'Magical', 'Dreamy'],'Fantasy Romance'],
//     [ ['Epic', 'Timeless', 'Nostalgic'],'Historical Romance'],
//     [['Futuristic', 'Adventurous', 'Intriguing'],'Sci-Fie'],
//     [['Happy'],'Comedy'],
//     [['drama'],'Family'],
//     [['thrilled,Adventurous,'],'Suspence'],]
// ]);

import React,{useEffect, useState} from 'react'

const Genre = ({transcript}) => {

    

    const [details,setDetails]=useState('');
    console.log(details);
    const headers = { 'Authorization': 'Bearer 3THI9O1m0' };
    
        const fetchDetails=async()=>{
            const data=await fetch(`https://cla-recommendation.lgads.tv/recommendation/popular?type=ott&genre=${transcript}`,{headers});
            const parsedData=await data.json();
            setDetails(parsedData);
    
        }

    
  return (
    <div>
        
         
        
    </div>
  )
}

export default Genre;

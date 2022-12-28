// import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


// Your API key: 563492ad6f9170000100000115bb60c18ea3430e9c63ee1db402dbfd

//  "Authorization: 563492ad6f9170000100000115bb60c18ea3430e9c63ee1db402dbfd" \
//   "https://api.pexels.com/v1/curated?per_page=1"

    
function Articles() {

    const[ data, setData]= useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
                
            );
            setData(result.data)
        };
        fetchData()
    },[]);

    

    // useEffect(()=> {
    //     const fetchData = async () => {
    //         const result = await axios('https://jsonplaceholder.typicode.com/photos/1'
    //         );
    //         setData(result.data)
    //     } 
    //    fetchData()
    // },[])


    
  return (
    <div>
        
        <ul>
            {/* La methode Slice permet de choisir seulement une partie qui va jusqu'a 5 */}
            {data.slice(0,5).map(item => (
            <li key={item.id}>
                
                <p>{item.title}</p>

                {/* Pour faire apparaitre l'image */}
                {/* <img src={item.url} alt="" /> */}
            </li>
        )
        
        )}
    </ul>
        
   
    </div>
  )
}

export default Articles
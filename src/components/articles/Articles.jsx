// import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';





    
function Articles() {

    const[ data, setData]= useState([])



    // axios.get('http://localhost:8001/blog')
    // .then(function(data){
    //     console.log(data);
    // })
    // .catch((function(error){
    //     console.log(error);
    // })
    // .then(function(){

    // }));

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts'
            );
            setData(result.data)
        };
        fetchData()
    })
    
  return (
    <div>
        <ul>{data.map(item => (
            <li key={item.id}>
                <p>{item.title}</p>
            </li>
        ))}
    </ul>
        
   
    </div>
  )
}

export default Articles
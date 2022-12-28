import React, { useEffect, useState } from 'react'
import '../home/home.css'
import axios from 'axios'
import Image from '../image/Image';





function Home() {

  const[ images, setImages]= useState([]);

  const getImage = () => {
    axios.get (`https://api.unsplash.com/photos/?client_id=8YGLtLWbbIjyeQlDAvqWpQRj-vCRSIfKHLuszi-WiAU`)
    .then ((response) => setImages(response.data))
    .catch((err) => console.log(err))
  }
 useEffect (() => {
  getImage()
 },[])



  return (
    <div className='home_container'>
    <h1>Je vais vous presenter</h1>

    <h2>Mon blog 2.0</h2>
<ul>

  {images.length}
  <ul>
    {images.slice(0,5).map((image, index) => ( 
      <Image key={image.id}{...image} />
    ))}
  </ul>



</ul>
  

 

    </div>
   
  )
}

export default Home
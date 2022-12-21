import React from 'react'
import '../navbar/navbar.css'
import {Link} from 'react-router-dom'




function navbar() {
  return (
    <div className='navbar'>

        <ul className='list'>

        <span className='item'><Link className='link' to='/'>Accueil</Link></span>
        <span className='item'><Link className='link' to='/articles'>Articles</Link></span>
        <span className='item'><Link className='link' to='/contact'>Contact</Link></span>

        </ul>
        
    </div>
  )
}

export default navbar
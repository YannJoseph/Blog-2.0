import React from 'react'

function Image(props) {
  return (
     <>
     <ul>
        <img src={props.urls.full} alt={props.user.name} />
     </ul>
     </>
  )
}

export default Image
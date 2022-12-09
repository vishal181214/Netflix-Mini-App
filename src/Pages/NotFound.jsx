import React from 'react'
import {Link} from "react-router-dom"



const Notfound = () => {
    const mystyle ={
        color:"red",
        backgroundColor:"yellow",
        borderRadius:"8px",
        position: "absolute",
        top: "150px",
        left:"700px"
    }
    
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <h1 style={{color:"red"}} >☠️404 Not Found ☠️</h1>
        
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
    </div>
  )
}

export default Notfound
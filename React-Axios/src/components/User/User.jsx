import React from 'react'

const User = (props)=>{
  return (

   <div style = {{textAlign:"center",margin:"auto",padding:"10px",margin:"5px", 
   marginLeft:"50px",backgroundColor:"white",width:"450px",border:"solid 2px red "}}>

   {props.userName}
   
   </div>
  )
}

export default User;  
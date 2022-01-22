import React from 'react'

const Button = (props)=>{
  return (

    <button onClick = {props.onButtonHandler}> {props.btnTxt} </button>
  )
}

export default Button;
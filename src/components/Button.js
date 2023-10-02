import React from 'react'
import buttonCss from './Button.module.css'
// import {useState, useEffect } from 'react';
// import Navbar from './Navbar';
import count from '../App'
export default function Button(props) {



  return (
  
   <button className={`${buttonCss.btn1}`} onClick={()=> count++}  >{props.name} {count}</button>
  )
}

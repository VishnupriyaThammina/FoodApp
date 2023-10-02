import React from 'react'
import cardCss from './Card.module.css'
import Button from "./Button";

export default function Card(props) {
    
  return (
    <div>
  
        <li className={`${cardCss.cardli}`} key={props.id}>
          <div className={`${cardCss.card}`}>
            <img
              className={`${cardCss.cardImg}`}
              src={props.url}
              alt="Random"
            />
            <div className={`${cardCss.textArea}`}>
            <h1>Food item {props.id}</h1>
           <h2>
           {props.title}
           </h2> 
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Button name={`${props.btn}`}  />

            </div>
          </div>
        </li>
   
  </div>
  )
}

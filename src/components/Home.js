
import React from 'react'
import homeCss from './Home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <div className={`${homeCss.descr}`}>
        <div className={`${homeCss.text1}`}>
        <h1 className={`${homeCss.text1_h1}`}>
          Discover the best
          </h1>
          <h1 className={`${homeCss.text1_h1}`}>
          food & drinks
          </h1>
          <h1 className={`${homeCss.text1_h1}`}>
       
          </h1>
         
          <p className={`${homeCss.text1_p}`}>Better food for more people</p>
          <Link to="/feast" > <button className={`${homeCss.btn1}`} >Order Now</button></Link>
         
        </div>
        </div>
    </div>
  )
}

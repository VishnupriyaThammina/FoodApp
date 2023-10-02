import React, { useEffect, useState } from "react";
import axios from "axios";
import feastCss from "./Feast.module.css";
import Card from './Card'
export default function Feast() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
  
      <div>
        <ul className={`${feastCss.cardul}`}>
          {posts.slice(0, 15).map((post) => (
        <Card id={post.id} title={post.title} url={post.url} btn="Order Now"/>
          ))}
        </ul>
      </div>
    
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import feastCss from "./Feast.module.css";

export default function DataFetching() {
  const [posts, setPost] = useState([]);
  // const [id, setId] = useState(1);

  // const[id,setId]= useState(1)
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

  // useEffect(()=>{
  //   axios.get(`https://spoonacular.com/recipeImages/${id}`)
  //   .then((res) => {
  //     console.log(res);
  //     setId(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // },[id]);
  return (
    <div>
  
      <div>
        <ul className={`${feastCss.cardul}`}>
          {posts.slice(0, 5).map((post) => (
            <li className={`${feastCss.cardli}`} key={posts.id}>
              <div className={`${feastCss.card}`}>
                <img
                  className={`${feastCss.cardImg}`}
                  src={post.url}
                  alt="Random"
                />
                <div className={`${feastCss.textArea}`}>
                <h1>Food item {post.id}</h1>
               <h2>
               {post.title}
               </h2> 
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <button className={`${feastCss.btn1}`}>Order Food</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <ul>
            {
                posts.map(post => <li key= {post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  );
}

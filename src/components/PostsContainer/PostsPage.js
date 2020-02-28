//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import data from "../../dummy-data"
// import { useState } from "react";

// import data 

const PostsPage = (props) => {
  // set up state for your data
  // let [data, setData] = useState();
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
       {data.map((item) => {
          return <Post post = {item} />})
        
        }
    
        
    </div>
  );
};

export default PostsPage;


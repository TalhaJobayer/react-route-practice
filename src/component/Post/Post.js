import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const {PostID}=useParams()
    const [post,setPost]=useState([])
   useEffect(()=>{
const url=`https://jsonplaceholder.typicode.com/posts/${PostID}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setPost(data))
   },[PostID])
   
    return (
        <div>
            <h2>post id: {PostID}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
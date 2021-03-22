import React,{useEffect,useState} from 'react'
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSclice";
import  "../Components/Blog.css";
function Blogs ()  {
 const searchInput = useSelector(selectUserInput);
 const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=8ca6f3878442b1fc40a7887efe67e950`
 const dispatch  = useDispatch();
 const [blogs,setBlogs] = useState();
 const [loading,setLoading] = useState(true);
 useEffect(()=>{
     axios
      .get(blog_url)
      .then((response) => {
          dispatch(setBlogData(response.data));
          setBlogs(response.data);
          setLoading(false);
         
      })
      .catch((error)=>{
          console.log(error);
      })
 },[searchInput])
    return (
        <div className="blog__page">
         <h1 className="blog__page__header">Blogs</h1>
         {loading ?  <h1 className="loading">Loading...</h1> : ""}   
         <div className="blogs">
         {blogs?.articles?.map((blog)=>(
             <a className="blog" target="_blank" href={blog.url}>
              <img src={blog.image}/>
              <div>
                <h3 className="sourceName">
                 <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
                </h3>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p> 
              </div>
             </a> 
         ))}
            {blogs?.totalArticles === 0 && (
                <h1 className="no__blogs">
                No Blogs Available , Search some thing else
                </h1>
            )}
         </div>
        </div>
    )
}

export default Blogs;
import React ,{useState}from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import AllBlog from "pages/AllBlog";
import Login from "pages/Login";
// import NewsScroll from "./NewsScroll"
// require('dotenv').config()

const ProjectRoutes = (props) => {
  const pageSize = 9
  const apiKey = "5c2a0a6f78f54ad2a3b3e077675dca66"
  console.log(apiKey)
  let [progress,setProgress] = useState(0)

  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Homepage setProgress ={props.setProgress} apiKey = {apiKey} key="general" country = "in" pageSize = {3} category = "general"/>,
    },
    {path: "general",element : <AllBlog  setProgress ={props.setProgress} apiKey = {apiKey} key="general" country = "in" pageSize = {pageSize} category = "general"/>},
    {path: "entertainment",element : <AllBlog   setProgress ={props.setProgress} apiKey = {apiKey} key="entertainment" country = "in" pageSize ={pageSize} category = "entertainment"/>},
    {path: "health",element : <AllBlog   setProgress ={props.setProgress} apiKey = {apiKey} key="health" country = "in" pageSize = {pageSize} category = "health"/>},
    {path: "bussiness",element : <AllBlog   setProgress ={props.setProgress} apiKey = {apiKey} key="bussiness" country = "in" pageSize = {pageSize} category = "business"/>},
    {path: "sports",element : <AllBlog   setProgress ={props.setProgress} apiKey = {apiKey} key="sports" country = "in" pageSize = {pageSize} category = "sports"/>},
    {path: "technology",element : <AllBlog   setProgress ={props.setProgress} apiKey = {apiKey} key="technology" country = "in" pageSize = {pageSize} category = "technology"/>},
    {path: "science",element : <AllBlog   setProgress ={props.setProgress} apiKey = {apiKey} key="science" country = "in" pageSize = {pageSize} category = "science"/>},
    {
      path: "login",
      element: <Login />,
    },
    // {
    //   path: "News",
    //   element: <NewsScroll />,
    // },
  ]);

  return element;
};

export default ProjectRoutes;

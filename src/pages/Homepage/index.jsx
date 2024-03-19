import React ,{useState,useEffect}from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "components/Header";
import HotTopic from "./partials/hotTopic";
import LatestRelease from "./partials/LatestRelease";
import College from "./partials/college";
import Sliders from "./partials/sliders";
import Entertainment from "./partials/categories/entertainment";
import Science from "./partials/categories/science";
import Sports from "./partials/categories/sports";
import Health from "./partials/categories/health";
import Technology from "./partials/categories/technology";
import Subscribe from "./partials/Subscribe";
import Film from "./partials/film";

// import articles1 from "articles/articles";
export default function HomepagePage(props) {
  

  return (
    <>
      <Helmet>
        <title>Sanjeev's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
      <Header className="flex justify-center items-center w-full " style={{zIndex: '200',position: 'fixed'}} />
       
        <div className="flex flex-col items-center justify-start w-full mt-[120px] gap-[120px]">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] md:px-5 max-w-[1292px]">
            
            <HotTopic/>
           
            <LatestRelease/>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            
            <Film/>
            
            <College/>
            
            <Sliders/>
            <div className="allNews">
              
            <Entertainment setProgress ={props.setProgress} apiKey = {props.apiKey} key="entertainment" country = "in" pageSize = {3} category = "entertainment"/>
             
              <Science setProgress ={props.setProgress} apiKey = {props.apiKey} key="science" country = "in" pageSize = {3} category = "science"/>
              
              <Sports setProgress ={props.setProgress} apiKey = {props.apiKey} key="sports" country = "in" pageSize = {3} category = "sports"/>
              
              <Health setProgress ={props.setProgress} apiKey = {props.apiKey} key="health" country = "in" pageSize = {3} category = "health"/>
              
              <Technology setProgress ={props.setProgress} apiKey = {props.apiKey} key="technology" country = "in" pageSize = {3} category = "technology"/>
              
              {/* <SourcePage setProgress ={props.setProgress} apiKey = {props.apiKey} key="technology" country = "in" pageSize = {3} category = "technology"/> */}
            </div>
              <Subscribe/>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px]" />
      </div>
    </>
  );
}

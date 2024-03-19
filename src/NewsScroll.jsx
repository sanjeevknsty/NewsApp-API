// import './App.css';
import React, { useState} from 'react'
// import NewsBar from './components/NewsBar';
// import News from './News';
import AllBlog from './pages/AllBlog/index'
import {
   BrowserRouter ,
   Routes,
    Route 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const NewsScroll = ()=> {
  const pageSize = 20
  let [progress,setProgress] = useState(0)
  // state = {progress: 0}
  // setProgress = (progress)=>{
  //   this.setState({progress: progress})
  // }


  return (

    // <>
   
    <div>
    <BrowserRouter>
    <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <NewsBar/>
      <h2 className='text-center'>Top Headlines</h2>

      <Routes>
          {/* <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> */}
          <Route exact path="/" element={<AllBlog setProgress ={setProgress} key="general" country = "in" pageSize = {pageSize} category = "general"/>} />
          <Route exact path="/general" element={<AllBlog setProgress ={setProgress} key="general" country = "in" pageSize = {pageSize} category = "general"/>} />
          <Route exact path="/entertainment" element={<AllBlog setProgress ={setProgress} key="entertainment" country = "in" pageSize ={pageSize} category = "entertainment"/>} />
          <Route exact path="/health" element={<AllBlog setProgress ={setProgress} key="health" country = "in" pageSize = {pageSize} category = "health"/>} />
          <Route exact path="/business" element={<AllBlog setProgress ={setProgress} key="bussiness" country = "in" pageSize = {pageSize} category = "business"/>} />
          <Route exact path="/sports" element={<AllBlog setProgress ={setProgress} key="sports" country = "in" pageSize = {pageSize} category = "sports"/>} />
          <Route exact path="/technology" element={<AllBlog setProgress ={setProgress} key="technology" country = "in" pageSize = {pageSize} category = "technology"/>} />
          <Route exact path="/science" element={<AllBlog setProgress ={setProgress} key="science"  country = "in" pageSize = {pageSize} category = "science"/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route>key""   */}
        </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default NewsScroll;

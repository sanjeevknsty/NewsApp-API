// import React,{useState,useEffect} from 'react'
// import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../../../components";
// import { Link } from 'react-router-dom';

// export default function science(props) {
//   const [articles, setArticles] = useState([])
//   // const [loading, setLoading] = useState(true)
//   const [page, setpage] = useState(1)
//   // const [totalArticles, setTotalArticles] = useState(0)


//   const updateNews = async () => {
    
    
//     // props.setProgress(20)
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=3`
//     setpage (Math.floor(Math.random() * 10))
//     // setLoading(true)
//     // props.setProgress(50)
//     let data = await fetch(url)
//     let result = await data.json()

//     setArticles(result.articles)
//     console.log(articles)
//     console.log(page)

//     // setLoading(false)
//     // setTotalArticles(result.totalResults)


//     // props.setProgress(100)
//   }
//   useEffect(() => {
//     {
//       updateNews()
//       // eslint-disable-line no-use-before-define
//     }
//   }, [])
//   return (
//     <div className="flex flex-col items-center justify-start w-full mt-[152px] gap-[49px] md:px-5 max-w-[1295px]">
//     <div className="flex flex-col items-center justify-start w-full gap-7">
//       <div className="flex flex-row justify-between items-start w-full">
//         <Heading size="3xl" as="h1" className="mb-0.5 tracking-[-0.50px]">
//           Science{" "}
//         </Heading>
//         <Button
//           color="blue_gray_900"
//           shape="round"
//           className="mt-[5px] sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px]"
//         >
//          <Link to='/science'> View All</Link>  
//         </Button>
//       </div>
//       <div className="h-px w-full bg-black-900_7f" />
//     </div>
//     <div className="flex flex-row md:flex-col w-full gap-[19px]">
//       {articles.map((ele)=>{
//       return <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-5">
//         <div className="flex flex-row justify-start w-full">
//           <div className="h-[247px] w-full sm:w-full relative">
//             <Img
//               src={ele.urlToImage}
//               alt="image"
//               className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
//             />
//             <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
//               <Button
//                 color="red_900"
//                 size="sm"
//                 shape="square"
//                 className="mt-[9px] ml-[301px] md:ml-5 tracking-[0.12px] font-bold min-w-[78px] sm:min-w-full"
//               >
//                 Political
//               </Button>
//               <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
//               {new Date(ele.publishedAt).toGMTString()}
//               </Text>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-start">
//           <Heading as="h6" className="tracking-[-0.50px]">
//           {ele.title}
//           </Heading>
//           <Text
//             as="p"
//             className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
//           >
//           {ele.description}

//           </Text>
//         </div>
//         <Button
//           shape="round"
//           rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
//           className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
//           onClick = {ele.url}
//           target= "_blank"
//         >
//           Read More
//         </Button>
//       </div>

//       })}
  
//     </div>
//   </div>
//   )
// }

import React from 'react'
import SourcePage from '../sourcePage'

export default function science(props) {
  return (
  //  <SourcePage  apiKey = {props.apiKey} key="science" country = "in" pageSize = {3} category = "science"/>
  <SourcePage apiKey = {props.apiKey} key={props.key} country = {props.country} pageSize = {props.pageSize} category = {props.category}/>

  )
}

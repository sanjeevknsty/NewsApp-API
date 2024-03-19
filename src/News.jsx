import React, { useEffect,useState } from 'react'
// import NewsSlide from './NewsSlide'
import AllBlogCardnews from 'components/AllBlogCardnews'
// import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props)=> {
  const defaultImage = "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
  
  const articles1 = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Sandee LaMotte",
      "title": "Diet drinks boost risk of dangerous heart condition by 20%, study says - CNN",
      "description": "Artificially sweetened drinks are linked to a 20% higher risk of atrial fibrillation while sugary beverages raise that risk by 10%, a new study found.",
      "url": "https://www.cnn.com/2024/03/05/health/diet-and-sugary-drinks-atrial-fibrillation-wellness/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-825986476.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-03-05T12:30:00Z",
      "content": "Sign up for CNNs Eat, But Better: Mediterranean Style. Our eight-part guide shows you a delicious expert-backed eating lifestyle that will boost your health for life.\r\nDrinking two liters or more per… [+5340 chars]"
    },
    {
      "source": {
        "id": "ign",
        "name": "IGN"
      },
      "author": "Ryan Dinsdale",
      "title": "Elon Musk and X/Twitter Sued for $128 Million Over Alleged Unpaid Severance - IGN",
      "description": "Elon Musk and X/Twitter are being sued for $128 million by former CEO Parag Agrawal and other executives over alleged unpaid severance.",
      "url": "https://www.ign.com/articles/elon-musk-and-xtwitter-sued-for-128-million-over-alleged-unpaid-severance",
      "urlToImage": "https://assets-prd.ignimgs.com/2023/11/06/elonmusktwitterign-1652442448608-1699284446499.jpg?width=1280",
      "publishedAt": "2024-03-05T12:05:33Z",
      "content": "Elon Musk and X/Twitter were sued for $128 million by former CEO Parag Agrawal and other executives over alleged unpaid severance.\r\nAs reported by Engadget, the lawsuit references the turbulent takeo… [+1780 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Detroit Free Press"
      },
      "author": "Elissa Robinson, Christina Hall",
      "title": "Clinton Township fire: Teen killed by flying canister amid Select Distributors explosions - Detroit Free Press",
      "description": "A 19-year-old bystander died early Tuesday morning as a result of a massive fire at Select Distributors in Clinton Township, according to officials.",
      "url": "https://www.freep.com/story/news/local/michigan/macomb/2024/03/05/select-distributor-explosions-teen-dies/72849661007/",
      "urlToImage": "https://www.freep.com/gcdn/authoring/authoring-images/2024/03/05/PDTF/72849959007-explosion-030524-04-mw.jpg?crop=2399,1351,x0,y124&width=2399&height=1351&format=pjpg&auto=webp",
      "publishedAt": "2024-03-05T15:20:10Z",
      "content": "A 19-year-old male bystander died early Tuesday morning as a result of a massive, multi-alarm fire at Select Distributors in Clinton Township, according to authorities.\r\nClinton Township Fire Chief T… [+2449 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Olivia Land",
      "title": "Dramatic video shows Russian Black Sea ship sinking after Ukraine drone attack - New York Post ",
      "description": "The Sergey Kotov, a large patrol vessel, was destroyed overnight by Magura V5 unmanned vessels, according to Ukraine’s military intelligence agency.",
      "url": "https://nypost.com/2024/03/05/world-news/video-shows-russian-black-sea-fleet-ship-sinking-in-drone-attack/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/handout-footage-shows-explosion-ukrainian-77738300.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-03-05T14:46:00Z",
      "content": "Dramatic video appears to show a $65 million Russian Black Sea Fleet patrol ship getting hit by Ukrainian drones overnight — sending clouds of debris into the air before it sinks.\r\nThe Sergey Kotov, … [+1750 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBCSports.com"
      },
      "author": "Mike Florio",
      "title": "Shed no tears for Russell Wilson - NBC Sports",
      "description": "He'll leave Denver with $124 million for two years on the job.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/shed-no-tears-for-russell-wilson",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/8a3c885/2147483647/strip/true/crop/3006x1691+0+281/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F3e%2F3e%2Fc016b9904994be51ccac6f764cb1%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2059779973",
      "publishedAt": "2024-03-05T14:33:33Z",
      "content": "On Monday, the Broncos announced that, as expected, theyll be moving on from quarterback Russell Wilson. Wilsons said in reaction (among other things), Tough times dont last. Tough people do.\r\nYes, i… [+1247 chars]"
    }
  ]


  const [articles,setArticles] = useState(articles1)
  const [loading,setLoading] = useState(true)
  const [page,setpage] = useState(1)
  const [totalArticles,setTotalArticles] = useState(0)

  

  const updateNews = async () => {
    props.setProgress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6d6033db2f864c7ea1d63169e1e6e59c&page=${page}&pagesize=${props.pageSize}`
    setLoading(true)
    props.setProgress(50)
    let data = await fetch(url)
    let result = await data.json()

    setArticles(result.articles)
    setLoading(false)
    setTotalArticles(result.totalResults)

   
    props.setProgress(100)
  }

  // const handlePrev = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=49208dbbfcaf4b27998042a3bde19e20&page=${this.state.page-1}&pagesize=${props.pageSize}`
    // this.setState({loading:true})
    //   let data = await fetch(url)
    //   let result = await data.json()
    //   this.setState( {
    //     articles: result.articles,
    //     page : this.state.page-1,
    //     loading : false

    //   })

    // this.setState({
    //   page: this.state.page - 1
    // })

    // setpage(page-1)

    // updateNews()

  // }
  // const handleNext = async () => {

    // if (this.state.page+1  > Math.ceil(this.state.totalArticles/20)){

    // }
    // else{
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=49208dbbfcaf4b27998042a3bde19e20&page=${this.state.page+1}&pagesize=${props.pageSize}`
    // // try {
    //   this.setState({loading:true})
    //   let data = await fetch(url)
    //   let result = await data.json()
    //   this.setState( {
    //     articles: result.articles,
    //     page : this.state.page+1,
    //     loading : false
    //   })
    // }


    // this.setState({
    //   page: this.state.page + 1
    // })
  //   setpage(page+1)

  //   updateNews()

  // }

  useEffect(()=>{
    {
      updateNews()
      // eslint-disable-line no-use-before-define
    }
  },[])
  

  const fetchData = async ()=>{
   


    props.setProgress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6d6033db2f864c7ea1d63169e1e6e59c&page=${page+1}&pagesize=${props.pageSize}`
    setpage(page+1)

    props.setProgress(50)
    let data = await fetch(url)
    let result = await data.json()

    setArticles(articles.concat(result.articles))
    setTotalArticles(result.totalResults)
    props.setProgress(100)
  }

  const captialize = (word)=>{
      return word.charAt(0).toUpperCase()+ word.slice(1)
    }


    document.title = `${captialize(props.category)} - News`


    return (
      <>
      
        {/* {console.log(this.state.articles.length,this.state.totalArticles)} */}
        {loading && <Spinner /> } 
        {/* {console.log(articles)} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData}
          hasMore={articles.length < totalArticles} 
          loader={<Spinner/>}
          // endMessage={<p style={{textAlign: "center"}}>No more data to load.</p>}
        >

          <div className="container my-3">
            <div className="row">
              { articles.map((ele) => {
                return <div className="col-md-4" key={ele.url}>
                  <AllBlogCardnews tittle={ele.title ? ele.title.slice(0, 40) : ''} imageUrl={ele.urlToImage ? ele.urlToImage : defaultImage} desc={ele.description ? ele.description.slice(0, 60) : ''} url={ele.url} author={ele.author ? ele.author : "Unknown"} date={ele.publishedAt} name = {ele.source.name}/>
                </div>
              })
              }

            </div>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrev}>Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNext}>Front</button>
        </div> */}
      </div >
      </InfiniteScroll>
      </>
    )
  
}

News.defaultProps = {
  category: "general",
  country: "in",
  pageSize: 5
}



News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
}


export default News
import React ,{useEffect,useState}from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Input } from "../../components";
import AllBlogCardnews from "../../components/AllBlogCardnews";
import AllBlogCardnews1 from "../../components/AllBlogCardnews1";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from "components/spinners/spinner";


export default function AllBlogPage(props) {
  // const hotTopic = document.getElementsByClassName('hotTopic')
  // const newReleased = document.getElementsByClassName('newReleased')
  // const popular = document.getElementsByClassName('popular')

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
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  const [sideBarNews,setSideBarNews] = useState([])
  const [sideBarTopic,setSideBarTopic] = useState('general')
  const [hotTopicClick,setHotTopicClick] = useState(false)
  const [newReleasedClick,setNewReleasedClick] = useState(true)
  const [popularClick,setPopularClick] = useState(false)

  const updateSideBar = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${sideBarTopic}&apiKey=${props.apiKey}&page=${page}&pagesize=5`
    let data = await fetch(url)
    let result = await data.json()

    setSideBarNews(result.articles)
  }
  const hotTopicNews = () =>{
    setSideBarTopic('sports')
    setHotTopicClick(true)
    setNewReleasedClick(false)
    setPopularClick(false)
    updateSideBar()
  }
  const newReleasedNews = () =>{
    setSideBarTopic('general')
    setHotTopicClick(false)
    setNewReleasedClick(true)
    setPopularClick(false)
    updateSideBar()
  }
  const popularNews = () =>{
    setSideBarTopic('health')
    // event.target.classList.add('opacity-1')
    setHotTopicClick(false)
    setNewReleasedClick(false)
    setPopularClick(true)
    updateSideBar()
  }




  const updateNews = async () => {
    // props.setProgress(20)
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${props.apiKey}&page=1&pagesize=5`
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    setLoading(true)
    // props.setProgress(50)
    let data = await fetch(url)
    let result = await data.json()

    setArticles(result.articles)
    setLoading(false)
    setTotalArticles(result.totalResults)


    // props.setProgress(100)
  }
  useEffect(() => {
    {
      updateNews()
      updateSideBar()
      // eslint-disable-line no-use-before-define
    }
  }, [])


  const fetchData = async () => {

    // props.setProgress(20)
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${props.apiKey}&page=1&pagesize=5`
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`
    setpage(page + 1)

    // props.setProgress(50)
    let data = await fetch(url)
    let result = await data.json()

    setArticles(articles.concat(result.articles))
    setTotalArticles(result.totalResults)
    // props.setProgress(100)
  }

  const handleNext = async ()=>{

      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`
      setpage(page + 1)
      let data = await fetch(url)
      let result = await data.json()
      setTotalArticles(result.totalResults)
      updateNews()
    
  }
  const handlePrev = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pagesize=${props.pageSize}`
    setpage(page - 1)
    let data = await fetch(url)
    let result = await data.json()
    setTotalArticles(result.totalResults)
    updateNews()
  }
  // const captialize = (word) => {
  //   return word.charAt(0).toUpperCase() + word.slice(1)
  // }


  // document.title = `${captialize(props.category)} - News`



  return (
    <>
      <Helmet>
        <title>Sanjeev's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex justify-center items-center w-full" style={{zIndex: '200',position: 'fixed'}} />
        <div className="flex flex-row justify-center w-full mt-[120px] md:px-5 max-w-[1292px]" style={{}}>
          <div className="flex flex-col items-center justify-start w-full gap-[85px]">
            <Heading size="3xl" as="h1" className="w-[38%] tracking-[-0.50px] text-center">
              Read the latest <b>{props.category}</b> news from around the world
            </Heading>
            {/* <Input
              color="gray_50"
              size="md"
              name="bxfilter"
              placeholder="Filter"
              suffix={<Img src="images/img_bxfilter.svg" alt="bx:filter" />}
              className="w-[50%] sm:w-full gap-[11px] tracking-[-0.50px] font-semibold rounded-[15px]"
            /> */}
            <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5">
              <div className="flex flex-col items-center justify-start w-[75%] md:w-full gap-[50px]">
              {/* <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid"> */}


                {/* {loading && <Spinner />} */}
                {/* <InfiniteScroll
                  dataLength={articles.length}
                  next={fetchData}
                  hasMore={articles.length < totalArticles}
                  loader={<Spinner />}
                endMessage={<p style={{textAlign: "center"}}>No more data to load.</p>}
                > */}
                  <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">

                    {articles.map((ele) => {
                      return <div className="col-md-4" key={ele.url}>
                        <AllBlogCardnews
                          category = {props.category}
                          tittle={ele.title ? ele.title.slice(0, 40) : ''}
                          imageUrl={ele.urlToImage ? ele.urlToImage : defaultImage}
                          desc={ele.description ? ele.description.slice(0, 60) : ''}
                          url={ele.url}
                          author={ele.author ? ele.author : "Unknown"}
                          date={ele.publishedAt}
                          name={ele.source.name}
                          className="flex flex-col items-start justify-start w-full pb-[23px] gap-4 sm:pb-5"
                        />
                      </div>
                    })
                  }
                  </div>
                {/* </InfiniteScroll> */}
                <div className="flex flex-row justify-start items-center w-[25%] md:w-full pb-[3px] gap-2.5">
                  <button disabled={page <= 1}>
                  <Img  src="images/img_arrow_left.svg" alt="arrowleft_one" onClick={handlePrev} className="h-[15px] w-[15px]" />
                  </button>
                  <div className="flex flex-row w-[53%] gap-2.5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                      <Button
                        color="blue_gray_900"
                        size="md"
                        className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[5px] sm:min-w-full"
                      >
                        1
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                      <Button
                        color="gray_100"
                        size="md"
                        className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[5px] sm:min-w-full"
                        // onClick = {page = 2}
                      >
                        2
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                      <Button
                        color="gray_100"
                        size="md"
                        className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[5px] sm:min-w-full"
                        // onClick = {page = 3}
                      >
                        3
                      </Button>
                    </div>
                  </div>
                  <Button color="gray_100" size="lg" className="w-[35px] rounded-[5px]">
                    <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                  </Button>
                  <button disabled={page + 1 > Math.ceil(totalArticles / props.pageSize)}>
                    <Img  src="images/img_akar_icons_chevron_left.svg" alt="akaricons_one" onClick={handleNext} className="h-[15px] w-[15px]" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[24%] md:w-full gap-5">
                <div className="flex flex-col items-start justify-start w-[82%] md:w-full gap-3">
                  <div className="flex flex-row justify-between w-full">
                    <button onClick={newReleasedNews}>
                      <Heading  size="md" as="h2" className={`${!newReleasedClick ? '!text-black-900_90 tracking-[-0.50px] opacity-0.6' : 'opacity-1 !text-blue_gray-900 tracking-[-0.50px]'} `} >
                        New Released
                      </Heading>
                    </button>
                    <button  onClick={hotTopicNews}>
                    <Heading  size="md" as="h3" className={`${hotTopicClick ?'opacity-1 !text-blue_gray-900 tracking-[-0.50px]': '!text-black-900_90 tracking-[-0.50px] opacity-0.6' }`}>
                      Hot Topic
                    </Heading>
                    </button>
                    <button onClick={popularNews}>
                    <Heading  size="md" as="h4" className={`${popularClick ? 'opacity-1 !text-blue_gray-900 tracking-[-0.50px]' : '!text-black-900_90 tracking-[-0.50px] opacity-0.6'} popular`} >
                      Popular
                    </Heading>
                    </button>
                  </div>
                  <Img src="images/img_background.svg" alt="image" className="h-px" />
                </div>
                <div className="flex flex-col w-full gap-[19px]">
                  
                  {sideBarNews.map((ele) => {
                    return <div className="col-md-4" key={ele.url}>
                      <AllBlogCardnews1
                        tittle={ele.title ? ele.title.slice(0, 40) : ''}
                        imageUrl={ele.urlToImage ? ele.urlToImage : defaultImage}
                        url={ele.url}
                        author={ele.author ? ele.author : "Unknown"}
                        date={ele.publishedAt} name={ele.source.name}
                        className="flex flex-row justify-start w-full gap-2.5" />
                    </div>
                  })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px]" />
      </div>
    </>
  );
}

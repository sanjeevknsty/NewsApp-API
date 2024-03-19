import React from 'react'
import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../../components";

export default function hotTopic() {
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
      "urlToImage": "https://assets-prd.ignimgs.com/2023/11/06/elonmusktwitterign-1652442448608-1699284446499.jpg?width=1280",
      "publishedAt": "2024-03-05T15:20:10Z",
      "content": "A 19-year-old male bystander died early Tuesday morning as a result of a massive, multi-alarm fire at Select Distributors in Clinton Township, according to authorities.\r\nClinton Township Fire Chief T… [+2449 chars]"
    },
    
  ]



  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex flex-col items-center justify-start w-full gap-[49px]">
        <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] md:gap-5">
          <Img
            src={articles1[0].urlToImage}
            alt="image"
            className="w-[46%] md:w-full md:h-[255px] mb-px object-cover"
          />
          <div className="flex flex-col items-start justify-start w-[51%] md:w-full gap-[43px]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row justify-start items-start w-[16%] md:w-full gap-2.5">
                <div className="h-[15px] w-[15px] mt-px bg-blue_gray-900 rounded-[7px]" />
                <Text size="xl" as="p" className="!text-blue_gray-900 tracking-[-0.50px]">
                  Hot Topic
                </Text>
              </div>
              <Heading size="3xl" as="h1" className="mt-5 tracking-[-0.50px] !font-bold">
                {articles1[0].title}
              </Heading>
              <div className="flex flex-row justify-start mt-10">
                <Heading as="h2" className="tracking-[-0.50px]">
                  {new Date(articles1[0].publishedAt).toGMTString()}
                </Heading>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-[13px]">
              <a href={articles1[0].url}>
                <Text size="md" as="p" className="!text-blue_gray-900 tracking-[-0.50px]">
                  Read More
                </Text>
              </a>
              <Img src="images/img_arrow_1.svg" alt="arrowone_one" className="h-px" />
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
          <div className="flex flex-row md:flex-col ">

            {articles1.map((ele) => {

              return <div className="flex flex-row sm:flex-col justify-start items-center w-[47%] md:w-full gap-2.5 sm:gap-5" key={ele.url}>
                <Img
                  src={ele.urlToImage ? ele.urlToImage : defaultImage}
                  alt="fe"
                  className="w-[84px] md:h-auto object-cover"
                />
                <a href={ele.url} target="_blank">
                  <div className="flex flex-col items-start justify-start w-[100%] sm:w-full gap-[15px]">
                    <Heading as="h3" className="tracking-[-0.50px] !font-bold">
                      {ele.title.slice(0, 70)}..
                    </Heading>
                    <div className="flex flex-row justify-start w-[100%] md:w-full">
                      <div className="flex flex-row justify-start w-full gap-[7px]">
                        <Heading size="s" as="h4" className="mb-px tracking-[-0.50px]">
                          {new Date(ele.publishedAt).toGMTString()}
                        </Heading>
                        <Text as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5">
                          {ele.author}
                        </Text>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            })

            }
            {/* <div className="flex flex-row sm:flex-col justify-start items-center w-[47%] md:w-full gap-2.5 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_84x84.png"
                        alt="image"
                        className="w-[84px] md:h-auto object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[77%] sm:w-full gap-[26px]">
                        <Heading as="h5" className="tracking-[-0.50px] !font-bold">
                          john kennedy won 3rd oscar trophy at los angles
                        </Heading>
                        <div className="flex flex-row justify-start w-[80%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-1">
                            <Heading size="s" as="h6" className="mt-px tracking-[-0.50px]">
                              Los Angles, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5">
                              - 22 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[47%] md:w-full gap-2.5 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_84x84.png"
                        alt="image"
                        className="w-[84px] md:h-auto object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[77%] sm:w-full gap-[26px]">
                        <Heading as="h5" className="tracking-[-0.50px] !font-bold">
                          john kennedy won 3rd oscar trophy at los angles
                        </Heading>
                        <div className="flex flex-row justify-start w-[80%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-1">
                            <Heading size="s" as="h6" className="mt-px tracking-[-0.50px]">
                              Los Angles, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5">
                              - 22 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div> */}
          </div>
          {/* <Img
                    src="images/img_rectangle_1479_1.png"
                    alt="image_one"
                    className="w-[84px] md:h-auto ml-[55px] md:ml-5 object-cover"
                  />
                  <div className="flex flex-col items-start justify-start w-[24%] md:w-full ml-2.5 gap-[26px] md:ml-0">
                    <Heading as="h6" className="tracking-[-0.50px] !font-bold">
                      Miami Dolphins won the match and officially qualified for the final
                    </Heading>
                    <div className="flex flex-row justify-start w-[77%] md:w-full">
                      <div className="flex flex-row justify-start w-full gap-1">
                        <Heading size="s" as="p" className="mt-px tracking-[-0.50px]">
                          New York, 22 Agust 2022{" "}
                        </Heading>
                        <Text as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5">
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div> */}
        </div>
      </div>
    </div>
)}

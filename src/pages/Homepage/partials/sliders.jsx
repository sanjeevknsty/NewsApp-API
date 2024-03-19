import React from 'react'
import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../../components";


export default function Sliders() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex flex-row justify-center w-full mt-[120px]">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[500px] w-full relative">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image_three"
                    className="justify-center h-[500px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="justify-center h-[500px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                      renderDotsItem={(props) => {
                        return props?.isActive ? (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white-A700" />
                        ) : (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white_A700_4f" />
                        );
                      }}
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                      items={[...Array(3)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="flex flex-row md:flex-col justify-between items-center p-16 mx-auto md:gap-10 md:p-5 bg-gradient2">
                            <div className="flex flex-col items-start justify-start w-[49%] md:w-full mt-[127px] ml-[11px] md:ml-0 md:mt-0">
                              <div className="flex flex-row justify-start items-center w-[14%] md:w-full gap-2.5">
                                <div className="h-[15px] w-[15px] bg-deep_orange-A400 rounded-[7px]" />
                                <Text size="md" as="p" className="tracking-[-0.50px]">
                                  Life Topic
                                </Text>
                              </div>
                              <Heading size="4xl" as="h1" className="mt-[7px] !text-white-A700 tracking-[-0.50px]">
                                St Pete&#39;s most beautiful beach in Florida
                              </Heading>
                              <Button
                                color="white_A700"
                                size="4xl"
                                variant="outline"
                                shape="round"
                                className="mt-[57px] sm:px-5 tracking-[-0.50px] font-semibold min-w-[160px] sm:min-w-full"
                              >
                                Read More
                              </Button>
                            </div>
                            <div className="h-[60px] w-[60px] mr-3.5 relative">
                              <Img
                                src="images/img_bi_arrow_up.svg"
                                alt="biarrowup_one"
                                className="justify-center h-[27px] w-[27px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="justify-center h-[60px] w-[60px] left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border-2 border-solid absolute rounded-[50%]" />
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                </div>
              </div>
            </div>
  )
}

import React from 'react'
import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../../components";


export default function film() {
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  return (
    <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                <Heading size="3xl" as="h2" className="w-[39%] tracking-[-0.50px] text-center">
                  The Audience&#39;s choice of the Best Films
                </Heading>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[700px] w-full relative">
                          <Img
                            src="images/img_rectangle_11.png"
                            alt="image_two"
                            className="justify-center h-[700px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-row justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 p-[75px] m-auto md:p-5 bg-gradient3 absolute">
                            <div className="h-[60px] w-[60px] my-[245px] relative">
                              <Img
                                src="images/img_bi_arrow_up.svg"
                                alt="biarrowup_one"
                                className="justify-center h-[27px] w-[27px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="justify-center h-[60px] w-[60px] left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border-2 border-solid absolute rounded-[50%]" />
                            </div>
                            <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                              <Button
                                color="white_A700"
                                size="7xl"
                                shape="circle"
                                className="w-[60px] border-white-A700 border-2 border-solid"
                              >
                                <Img src="images/img_bi_arrow_up_deep_orange_a400.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 4 } }}
                      renderDotsItem={(props) => {
                        return props?.isActive ? (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white-A700" />
                        ) : (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white_A700_4f" />
                        );
                      }}
                      activeIndex={sliderState2}
                      onSlideChanged={(e) => {
                        setSliderState2(e?.item);
                      }}
                      ref={sliderRef2}
                      className="w-full mt-[-197px] md:px-5 max-w-[1292px]"
                      items={[...Array(12)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="flex flex-col items-center justify-start pb-[22px] gap-[21px] mx-2.5 sm:pb-5 bg-white-A700 rounded-[10px]">
                            <Img
                              src="images/img_rectangle_17.png"
                              alt="image"
                              className="w-[308px] md:w-full md:h-[307px] object-cover rounded-[10px]"
                            />
                            <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-[11px]">
                              <Heading as="h3" className="tracking-[-0.50px] text-center">
                                Captain Marvel
                              </Heading>
                              <Text size="md" as="p" className="!text-black-900_7f tracking-[-0.50px]">
                                Genres : Action Adventure Sci-Fi
                              </Text>
                              <RatingBar
                                value={3}
                                isEditable={true}
                                color="#d1d4d8"
                                activeColor="#ffe174"
                                size={20}
                                className="flex justify-between"
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                </div>
                <Button
                  color="blue_gray_900"
                  shape="round"
                  className="sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px] sm:min-w-full"
                >
                  View All
                </Button>
              </div>
            </div>
  )
}

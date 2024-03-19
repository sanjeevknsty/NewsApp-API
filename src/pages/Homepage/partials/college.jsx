import React from 'react'
import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../../components";

export default function college() {
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  return (
    <div className="flex flex-row justify-center w-full mt-[120px]">
              <div className="flex flex-row justify-center w-full p-12 md:p-5 bg-black-900">
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] mx-[25px] md:gap-5 sm:mx-5 max-w-[1291px]">
                  <div className="h-[600px] w-[62%] md:w-full relative">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 2 } }}
                      renderDotsItem={(props) => {
                        return props?.isActive ? (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white-A700" />
                        ) : (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white_A700_4f" />
                        );
                      }}
                      activeIndex={sliderState1}
                      onSlideChanged={(e) => {
                        setSliderState1(e?.item);
                      }}
                      ref={sliderRef1}
                      className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                      items={[...Array(6)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Img
                            src="images/img_unsplash_nygy58eb9aw.png"
                            alt="unsplash_one"
                            className="md:h-auto mx-auto object-cover"
                          />
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <div className="flex flex-col w-[35%] md:w-full gap-[43px]">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_84x121.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_2.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_3.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_4.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_5.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

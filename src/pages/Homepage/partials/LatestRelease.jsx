import React from 'react'
import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../../components";

export default function LatestRelease() {
  
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[50px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <Heading size="3xl" as="h1" className="mb-px tracking-[-0.50px]">
                  Latest Release
                </Heading>
                <Button
                  color="blue_gray_900"
                  shape="round"
                  className="sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px]"
                >
                  View All
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-start w-full gap-[50px] md:gap-5">
                <div className="flex flex-col items-start justify-start w-[43%] md:w-full gap-[25px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[270px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_10mwi2uawfg.png"
                        alt="unsplash_one"
                        className="justify-center h-[270px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[190px] left-0 bottom-0 right-0 top-0 p-[13px] m-auto bg-gradient absolute">
                        <Button
                          color="deep_orange_A400"
                          size="sm"
                          shape="square"
                          className="mt-2.5 ml-[424px] md:ml-5 tracking-[0.12px] font-bold min-w-[88px] sm:min-w-full"
                        >
                          Hot Topic
                        </Button>
                        <Text size="md" as="p" className="ml-[9px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[15px]">
                    <Heading size="2xl" as="h4" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text size="md" as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5 leading-[35px]">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    size="4xl"
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[177px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col w-[54%] md:w-full gap-[50px]">
                  <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[22px] md:gap-5">
                    <Img
                      src="images/img_unsplash_j5keq1jlqzk.png"
                      alt="image"
                      className="w-[44%] md:w-full md:h-[229px] object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[54%] md:w-full gap-5">
                      <div className="flex flex-col items-start justify-start w-full gap-3">
                        <Text size="md" as="p" className="!text-black-900 tracking-[-0.50px]">
                          New York, 19 april 2022
                        </Text>
                        <div className="flex flex-col items-center justify-start gap-2.5">
                          <Heading size="xl" as="h5" className="tracking-[-0.50px] !font-poppins">
                            Jhon Lorni has won 1st place in international match
                          </Heading>
                          <Text
                            as="p"
                            className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                          >
                            this is his first victory in the international olympics, so his name is quite explosive on
                            the international scene
                          </Text>
                        </div>
                      </div>
                      <Button
                        shape="round"
                        rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                        className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[22px] md:gap-5">
                    <Img
                      src="images/img_unsplash_l_2p8fapoa8.png"
                      alt="unsplashl_one"
                      className="w-[44%] md:w-full md:h-[229px] object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[54%] md:w-full gap-5">
                      <div className="flex flex-col items-start justify-start w-full gap-3">
                        <Text size="md" as="p" className="!text-black-900 tracking-[-0.50px]">
                          Amsterdam, 23 april 2022
                        </Text>
                        <div className="flex flex-col items-center justify-start gap-2.5">
                          <Heading size="xl" as="h5" className="tracking-[-0.50px] !font-poppins">
                            The extinction of the Arabian turtle made the government...
                          </Heading>
                          <Text
                            as="p"
                            className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                          >
                            The jalabiya turtle is a very unique species because it is thought to have existed from
                            ancient times, but has begun to become..
                          </Text>
                        </div>
                      </div>
                      <Button
                        shape="round"
                        rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                        className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

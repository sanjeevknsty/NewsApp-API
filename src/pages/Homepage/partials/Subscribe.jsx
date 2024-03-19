import React from 'react'
import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../../components";


export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[153px] gap-[30px] p-[37px] md:px-5 sm:p-5 bg-gray-900 max-w-[1290px] rounded-[20px]">
                <div className="flex flex-col items-center justify-start w-[54%] md:w-full gap-[37px]">
                  <Heading size="4xl" as="h1" className="!text-white-A700 tracking-[-0.50px] text-center">
                    Get the Latest Notifications and Info from Us
                  </Heading>
                  <Text size="lg" as="p" className="!text-white-A700_b2 tracking-[-0.50px] text-center !leading-[35px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled.
                  </Text>
                </div>
                <Button
                  color="white_A700"
                  size="5xl"
                  className="mb-[5px] sm:px-5 text-blue_gray-900 tracking-[-0.50px] font-semibold border-blue_gray-900 border border-solid min-w-[196px] rounded-[26px] sm:min-w-full"
                >
                  Subscribe Now
                </Button>
              </div>
  )
}

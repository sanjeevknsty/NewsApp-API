import React from "react";
import { Button, Heading, Img } from "../../components";
import AllBlogCardnews from "../../components/AllBlogCardnews";
import { default as ModalProvider } from "react-modal";

export default function AllBlogFilter({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1290px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full p-[37px] sm:p-5 bg-white-A700 rounded-[30px]">
          <div className="flex flex-col items-start justify-start w-[96%] mb-[7px] gap-14 mx-7 sm:mx-5">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading size="2xl" as="h1" className="mb-px tracking-[-0.50px]">
                Filter News
              </Heading>
              <Img src="images/img_bx_x_1_1.svg" alt="bxx1one_one" className="h-[24px] w-[24px] mt-[7px]" />
            </div>
            <div className="flex flex-col items-start justify-start w-[74%] md:w-full gap-6">
              <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                Category News
              </Heading>
              <div className="flex flex-row md:flex-col justify-start w-full gap-5">
                <Button
                  color="blue_gray_900"
                  size="xl"
                  shape="round"
                  className="tracking-[-0.50px] min-w-[86px] !rounded-[10px]"
                >
                  Sport
                </Button>
                <Button
                  color="gray_50"
                  size="xl"
                  shape="round"
                  className="tracking-[-0.50px] min-w-[94px] !rounded-[10px]"
                >
                  Health
                </Button>
                <Button
                  color="gray_50"
                  size="xl"
                  shape="round"
                  className="tracking-[-0.50px] min-w-[102px] !rounded-[10px]"
                >
                  Political
                </Button>
                <div className="flex flex-row sm:flex-col justify-start w-[60%] md:w-full gap-[22px] sm:gap-5">
                  <Button
                    color="gray_50"
                    size="xl"
                    shape="round"
                    className="tracking-[-0.50px] min-w-[113px] !rounded-[10px]"
                  >
                    Business
                  </Button>
                  <Button
                    color="gray_50"
                    size="xl"
                    shape="round"
                    className="tracking-[-0.50px] min-w-[104px] !rounded-[10px]"
                  >
                    Finance
                  </Button>
                  <Button
                    color="gray_50"
                    size="xl"
                    shape="round"
                    className="tracking-[-0.50px] min-w-[70px] !rounded-[10px]"
                  >
                    Life
                  </Button>
                  <Button
                    color="gray_50"
                    size="xl"
                    shape="round"
                    className="tracking-[-0.50px] min-w-[155px] !rounded-[10px]"
                  >
                    Entertainment
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-6">
              <div className="flex flex-row justify-start w-[27%] md:w-full">
                <div className="flex flex-row justify-start w-full">
                  <Heading size="2xl" as="h3" className="tracking-[-0.50px]">
                    News Rating
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-start gap-[23px] sm:gap-5">
                <Button
                  color="gray_50"
                  size="xl"
                  shape="round"
                  className="tracking-[-0.50px] min-w-[118px] !rounded-[10px]"
                >
                  Hot Topic
                </Button>
                <Button
                  color="gray_50"
                  size="xl"
                  shape="round"
                  className="tracking-[-0.50px] min-w-[127px] !rounded-[10px]"
                >
                  Most Seen
                </Button>
                <Button
                  color="blue_gray_900"
                  size="xl"
                  shape="round"
                  className="tracking-[-0.50px] min-w-[143px] !rounded-[10px]"
                >
                  The Craziest
                </Button>
                <Button
                  color="gray_50"
                  size="xl"
                  shape="round"
                  className="tracking-[-0.50px] min-w-[87px] !rounded-[10px]"
                >
                  Fraud
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-start w-[51%] md:w-full">
              <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[19px] sm:gap-5">
                <div className="flex flex-row justify-start w-[49%] sm:w-full">
                  <div className="flex flex-row justify-start items-start w-full">
                    <AllBlogCardnews className="flex flex-col items-center justify-start w-[62%] sm:w-full gap-[55px]" />
                    <Button
                      color="gray_50"
                      size="xl"
                      shape="round"
                      className="mt-[54px] ml-[-25px] tracking-[-0.50px] min-w-[135px] !rounded-[10px]"
                    >
                      Last 3 Hour
                    </Button>
                  </div>
                </div>
                <Button
                  color="blue_gray_900"
                  size="xl"
                  shape="round"
                  className="mt-[54px] sm:mt-0 tracking-[-0.50px] min-w-[124px] !rounded-[10px]"
                >
                  This Week
                </Button>
                <Button
                  color="gray_50"
                  size="xl"
                  shape="round"
                  className="mt-[54px] sm:mt-0 tracking-[-0.50px] min-w-[132px] !rounded-[10px]"
                >
                  This Month
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

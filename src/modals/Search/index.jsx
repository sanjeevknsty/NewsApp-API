import React from "react";
import { Button, Heading, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function Search({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1290px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-start w-full p-10 sm:p-5 bg-white-A700 rounded-[30px]">
          <div className="flex flex-col items-start justify-start w-[96%] mb-1 ml-[19px] gap-[50px]">
            <div className="flex flex-col items-center justify-start w-full gap-14">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="2xl" as="h1" className="mb-px tracking-[-0.50px]">
                  Search News
                </Heading>
                <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                  <Img src="images/img_bx_x_1_1.svg" alt="bxx1one_one" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-3.5">
                <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                  Search News here...
                </Text>
                <div className="h-px w-full bg-black-900_7f" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[74%] md:w-full gap-6">
              <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                Category News
              </Heading>
              <div className="flex flex-row md:flex-col justify-start gap-5">
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
        </div>
      </div>
    </ModalProvider>
  );
}

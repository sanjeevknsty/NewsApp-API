import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Input, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Sanjeev's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex justify-center items-center w-full" />
        <div className="flex flex-row justify-center w-full mt-[50px] md:px-5 max-w-[1290px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-[77px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.50px]">
                Welcome back, there is the latest news today !!
              </Heading>
              <div className="flex flex-row md:flex-col w-full gap-5">
                <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-4">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[181px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_376kn_isple_246x418.png"
                        alt="image"
                        className="justify-center h-[181px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[109px] left-0 bottom-0 right-0 top-0 p-[13px] m-auto bg-gradient absolute">
                        <Input
                          shape="square"
                          name="tag_one"
                          placeholder="Entertaiment "
                          className="w-[36%] md:w-full md:h-auto mt-0.5 ml-[177px] md:ml-5 tracking-[-0.50px] font-bold"
                        />
                        <Heading size="xs" as="h2" className="mb-1 !text-white-A700 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[13px]">
                    <Heading size="md" as="h3" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text size="xs" as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council. Lorem ipsom dolor
                    </Text>
                  </div>
                  <Button
                    size="md"
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[138px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-4">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[181px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_376kn_isple_246x418.png"
                        alt="unsplash376kn"
                        className="justify-center h-[181px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[109px] left-0 bottom-0 right-0 top-0 p-[13px] m-auto bg-gradient absolute">
                        <Input
                          shape="square"
                          name="tag_one"
                          placeholder="Entertaiment "
                          className="w-[36%] md:w-full md:h-auto mt-0.5 ml-[177px] md:ml-5 tracking-[-0.50px] font-bold"
                        />
                        <Heading size="xs" as="h4" className="mb-1 !text-white-A700 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[13px]">
                    <Heading size="md" as="h5" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text size="xs" as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council. Lorem ipsom dolor
                    </Text>
                  </div>
                  <Button
                    size="md"
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[138px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[42%] md:w-full mt-1 gap-14 p-[47px] md:mt-0 md:p-5 border-blue_gray-900 border border-solid bg-white-A700">
              <Heading size="3xl" as="h6" className="tracking-[-0.50px]">
                Neuzy
              </Heading>
              <div className="flex flex-col items-center justify-start w-[92%] md:w-full gap-[29px]">
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Text size="md" as="p" className="!text-black-900 tracking-[0.07px] !font-poppins">
                      Email
                    </Text>
                    <Input
                      color="black_900"
                      size="sm"
                      variant="outline"
                      shape="round"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full sm:w-full tracking-[0.08px] font-poppins"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Text size="md" as="p" className="!text-black-900 tracking-[0.07px] !font-poppins">
                      Password
                    </Text>
                    <Input
                      color="black_900"
                      size="sm"
                      variant="outline"
                      shape="round"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full sm:w-full tracking-[0.08px] font-poppins"
                    />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <CheckBox
                      shape="round"
                      name="rememberme"
                      label="Remember me?"
                      id="rememberme"
                      className="mb-0.5 gap-2 tracking-[0.08px] font-poppins text-left font-medium"
                    />
                    <a href="#">
                      <Text size="lg" as="p" className="!text-black-900 tracking-[0.08px] !font-poppins !font-medium">
                        Forgot password
                      </Text>
                    </a>
                  </div>
                </div>
                <Button
                  color="blue_gray_900"
                  size="6xl"
                  shape="round"
                  className="w-full sm:px-5 tracking-[0.08px] font-poppins font-medium !rounded-[10px]"
                >
                  Login
                </Button>
                <a href="#" className="flex">
                  <Text size="md" as="p" className="!text-black-900 tracking-[-0.50px]">
                    <span className="text-black-900">Don&#39;t have an account? </span>
                    <span className="text-blue_gray-900">Register here</span>
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[124px]" />
      </div>
    </>
  );
}

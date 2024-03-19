import React from "react";
import { Button, Img, Text, Heading, Input } from "./..";

export default function AllBlogCardnews(
  // {
  //  ,
  // tagOne,
  // ukrainetwentyfo,
  // zelensky,
  // description,
  // readMore,
  // ...props
// }
props) {
  return (
    // <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <div className="flex flex-row justify-start w-full">
          <div className="h-[181px] w-full sm:w-full relative">
            {
              <Img
                src={props.imageUrl}
                // alt=" "
                className="justify-center h-[181px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
           }
            <div className="flex flex-col items-start justify-center w-full h-full gap-[109px] left-0 bottom-0 right-0 top-0 p-[13px] m-auto bg-gradient absolute">
              {!!props.name ? (
                <Input
                  shape="square"
                  name="tag_one"
                  placeholder={props.category}
                  className="w-[36%] md:w-full md:h-auto mt-0.5 ml-[177px] md:ml-5 tracking-[-0.50px] font-bold"
                />
              ) : null}
              {!!props.date ? (
                <Heading size="xs" as="h1" className="mb-1 !text-white-A700 tracking-[-0.50px]">
                  {new Date(props.date).toGMTString()}
                </Heading>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[13px]">
          {
            <Heading size="md" as="h2" className="tracking-[-0.50px]">
              {props.tittle}..
            </Heading>
          }
          {
            <Text size="xs" as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5">
              {props.desc}
            </Text>
          }
        </div>
        <a href={props.url} rel="noreferrer" target="_blank" className="btn btn-primary">
        {
          <Button
            size="md"
            shape="round"
            rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
            className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[138px] sm:min-w-full"
  
            // onClick= {props.url}
          >
           ReadMore
          </Button>
        }
        </a> 
      </div>
    // </div>
  );
}

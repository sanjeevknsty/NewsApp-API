import React from "react";
import { Text, Heading, Img } from "./..";

export default function AllBlogCardnews1(props) {
  return (
    <div {...props}>
      <a href={props.url} target="_blank">
      <Img src={props.imageUrl}  className="w-[65px] md:h-auto object-cover" />
      </a>
      <div className="flex flex-col items-center justify-start w-[76%] gap-3">
        <Heading size="md" as="h1" className="tracking-[-0.50px] !font-poppins !font-bold">
          {props.tittle}
        </Heading>
        <div className="flex flex-row justify-start w-full">
          <Heading size="xs" as="h2" className="tracking-[-0.50px]">
          {new Date(props.date).toGMTString()}
          </Heading>
          <Text size="xs" as="p" className="ml-[5px] !text-black-900_87 tracking-[-0.50px] opacity-0.5">
            {props.author}
          </Text>
        </div>
      </div>
    </div>
  );
}

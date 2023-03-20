import React from "react";
import { Box, Divider, Image, Button } from "@nature-ui/core";

interface CardType {
  id: number;
  type: string;
  price: string;
  desc: string;
  features: {
    id: number;
    feature: string;
  }[];
}

function Card({ desc, features, id, price, type }: CardType) {
  return (
    <Box
      className={`${
        id == 2
          ? "bg-dark max-w-[360px] lg:max-w-[451px]"
          : "bg-white mt-7 lg:mt-0 max-w-[360px] lg:max-w-[412px]"
      } px-10 shadow-[#e9dfff] shadow-md py-7 rounded-[10px] w-full relative`}
    >
      {id == 2 && (
        <Box className="absolute right-4 top-2 text-xs text-white bg-purple px-2 py-1 rounded-full">
          Popular
        </Box>
      )}
      <Box
        className={`text-2xl font-bold  ${
          id == 2 ? "text-white" : "text-gray-700"
        }`}
      >
        {type}
      </Box>

      <Box
        className={`text-2xl font-bold ${
          id == 2 ? "text-white text-5xl mt-10" : "mt-6 text-dark text-[40px]"
        }`}
      >
        {price}{" "}
        <span
          className={`${
            id == 2
              ? "text-lg text-white font-semibold"
              : "text-sm text-gray-400 font-semibold"
          }`}
        >
          / month
        </span>
      </Box>
      <Box
        className={`leading-tight font-medium ${
          id == 2 ? "text-white mt-9" : "mt-6 text-gray-700"
        } `}
      >
        {desc}
      </Box>
      <Divider
        className={`my-7 ${id == 2 ? "opacity-30 mb-10" : ""}`}
        color="#cdcdcd"
      />

      <Box
        className={`${
          id == 2 ? "text-white font-medium" : "font-medium text-gray-700"
        }`}
      >
        {features.map(({ feature, id }) => (
          <Box className="w-full flex flex-row my-4 items-center" key={id}>
            <Image src="/Done.png" className="mr-4" />
            <Box>{feature}</Box>
          </Box>
        ))}
      </Box>

      <Button className="bg-purple w-full h-14 mt-7 text-white">
        Get Started
      </Button>
    </Box>
  );
}

export default Card;

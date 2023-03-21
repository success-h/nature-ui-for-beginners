import React from "react";
import { clsx } from "@nature-ui/system";
import { Box, Divider, Image, Button, Badge } from "@nature-ui/core";

interface CardType {
  id: string;
  type: string;
  price: string;
  desc: string;
  features: {
    featureId: string;
    feature: string;
  }[];
}

function Card({ desc, features, id, price, type }: CardType) {
  const isMiddle = id === "2";
  return (
    <Box
      className={clsx(
        "px-10 shadow-md py-7 rounded-xl w-full relative lg:mx-4",
        {
          ["bg-dark max-w-sm lg:max-w-lg"]: isMiddle,
          [" mt-7 lg:mt-0 max-w-sm lg:max-w-md"]: !isMiddle,
        }
      )}
    >
      {isMiddle && (
        <Badge className="absolute right-4 top-2 text-xs text-white bg-purple px-2 py-1 rounded-full">
          Popular
        </Badge>
      )}
      <Box
        className={`text-2xl font-bold  ${
          isMiddle ? "text-white" : "text-gray-700"
        }`}
      >
        {type}
      </Box>

      <Box
        className={`text-2xl font-bold ${
          isMiddle ? "text-white text-5xl mt-10" : "mt-6 text-dark text-4xl"
        }`}
      >
        {price}
        <span
          className={`${
            isMiddle
              ? "text-lg text-white font-semibold"
              : "text-sm text-gray-400 font-semibold"
          }`}
        >
          / month
        </span>
      </Box>
      <Box
        className={`leading-tight font-medium ${
          isMiddle ? "text-white mt-9" : "mt-6 text-gray-700"
        } `}
      >
        {desc}
      </Box>
      <Divider
        className={`my-7 ${isMiddle ? "opacity-30 mb-10" : ""}`}
        color="#cdcdcd"
      />

      <Box
        className={`${
          isMiddle ? "text-white font-medium" : "font-medium text-gray-700"
        }`}
      >
        {features.map(({ feature, featureId }) => (
          <Box
            className="w-full flex flex-row my-4 items-center"
            key={featureId}
          >
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

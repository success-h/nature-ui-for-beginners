import React from "react";
import { Box, Image, Stack } from "@nature-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper";
import Card from "./Card";
import { pricingData } from "../data.json";

export default function PricinComponent() {
  return (
    <Box className="mt-24">
      <Box
        className="mx-3 text-3xl w-full lg:text-5xl leading-tight font-extrabold text-dark"
        centerContent
      >
        Simple pricing for your business
      </Box>
      <Box
        className="text-gray-500 font-medium text-lg lg:text-2xl mt-3 mx-3"
        centerContent
      >
        Choose the right pricing for you and get started
      </Box>

      <Stack
        row
        className="hidden items-center justify-center lg:flex mt-24 mb-10 "
      >
        {pricingData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Stack>
      <Box className="lg:hidden">
        <Swiper
          modules={[Virtual]}
          spaceBetween={50}
          slidesPerView={1}
          virtual
          className="lg:hidden mt-10 w-2xl"
          navigation
        >
          {pricingData?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      <Box centerContent className="mt-4 lg:hidden">
        Swipe left
      </Box>
    </Box>
  );
}

import { Box, Image } from "@nature-ui/core";
import React from "react";
import Card from "./Card";
import { pricingData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper";

export default function PricinComponent() {
  return (
    <Box className="mt-24">
      <Box
        className="mx-3 text-[32px] w-full lg:text-5xl leading-tight font-extrabold text-[#0D0027]"
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

      <Box centerContent className="hidden lg:flex flex-col lg:flex-row mt-24">
        {pricingData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Box>
      <Box>
        <Swiper
          modules={[Virtual]}
          spaceBetween={50}
          slidesPerView={1}
          virtual
          className="lg:hidden mt-10 w-[390px]"
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

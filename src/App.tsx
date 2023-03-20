import { useState } from "react";
import PricinComponent from "./components/Pricing";
import { Box, Image, Input, Button } from "@nature-ui/core";

function App() {
  return (
    <Box className="max-w-[1440px] w-full bg-[#FBF9FF]" centered>
      <Box className="px-4 overflow-x-hidden">
        <PricinComponent />
      </Box>
      <Box className="bg-dark h-[232px] lg:h-[442px] w-full">
        <Image src="/background.png" className="" />
        <Box
          centered
          className="max-w-[396px] mt-11 flex flex-row px-4 lg:px-0"
        >
          <Input
            className="border bg-transparent rounded-lg text-white"
            placeholder="success@example.com"
          />
          <Button className="bg-purple rounded-lg text-white ml-3">
            <Box className="px-4">Subscribe</Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

import { useState } from "react";
import { Box, Image, Input, Button } from "@nature-ui/core";
import PricinComponent from "./components/Pricing";

function App() {
  return (
    <Box className="max-w-screen-2xl w-full bg-primary" centered>
      <Box className="px-4 overflow-x-hidden">
        <PricinComponent />
      </Box>
      <Box className="bg-dark h-xl lg:h-2xl w-full">
        <Image src="/background.png" className="w-full" />
        <Box centered className="max-w-md mt-11 flex flex-row px-4 lg:px-0">
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

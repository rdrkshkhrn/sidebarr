
import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  useDisclosure,
  Drawer,
  DrawerContent,
  Button,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Box h="full" title = "side">
      <Sidebar />
        <Button
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
          position="fixed"
          top="1rem"
          left="1rem"
        >
          Open Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <Box
              w="auto"
              h="full"
            >
              <Sidebar onClose={onClose} />
            </Box>
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} p="4" w="full">
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

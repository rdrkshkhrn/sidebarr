
import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  useDisclosure,
  Drawer,
  DrawerContent,
  Button,
  IconButton,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { LuList } from "react-icons/lu";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex direction={'row'} height={'100vh'} w='full' overflow={'hidden'} title = "parent" backgroundColor={'red'}>
        <Sidebar display={{base:'none', md:'block'}} />
      
        <Box flex={1} direction={'column'} overflow='auto' title='content'>
      
          <Box w={'full'} h={400} bg='green' p={4}>
          <Button
          as={IconButton}
          onClick={onOpen}
         
          display={{ base: "block", md: "none" }}
          icon={<LuList/>}
        />
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
              <Sidebar onClose={onClose} display={{base:"block"}}/>
            </Box>
          </DrawerContent>
        </Drawer>
          </Box>
          <Box w={'full'} h={400} bg='black'></Box>
          <Box w={'full'} h={400} bg='blue'></Box>
          <Box w={'full'} h={400} bg='gray'></Box>

        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import { Box, Flex, Text, CloseButton } from '@chakra-ui/react';
import SidebarItem from './sidebarItem';
import sidebarData from './sidebar_data1.json';

const Sidebar = ({ onClose, ...rest }) => {
  return (
    <Box
        display={{base:"none",md:"block"}}
      bg="white"
      borderRight="1px"
      borderRightColor= "gray.200"
      w={{base: "auto", md: "md"}}
      h="full"
      overflowY="auto"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          MyApp
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {sidebarData.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </Box>
  );
};

export default Sidebar;

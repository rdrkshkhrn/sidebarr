import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Icon,
  Collapse,
} from '@chakra-ui/react';
import {
  MdExpandLess,
  MdExpandMore,
} from 'react-icons/md';
import * as Icons from 'react-icons/md';

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const toggleOpen = () => setIsOpen(!isOpen);

  const MenuIcon = Icons[item.icon] || Icons['MdMenu'];

  return (
    <Box>
      <Flex
        align="center"
        p="2"
        mx="2"
        borderRadius="md"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
        }}
        onClick={hasChildren ? toggleOpen : undefined}
      >
        <Icon
          mr="4"
          fontSize="16"
          as={MenuIcon}
        />
        <Text flex="1">{item.label}</Text>
        {hasChildren && (
          <Icon
            as={isOpen ? MdExpandLess : MdExpandMore}
            ml="auto"
          />
        )}
      </Flex>
      {hasChildren && (
        <Collapse in={isOpen} animateOpacity>
          <Box ml="4" borderLeft="1px" borderColor="gray.200">
            {item.children.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default SidebarItem;

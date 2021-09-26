import {
  DrawerContent,
  DrawerOverlay,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  useBreakpointValue,
  DrawerHeader,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useSideBarContext } from "../../Contexts/SideBarContext";
import { SideBarNav } from "./SideBarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSideBarContext();

  const isFloatingSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isFloatingSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav></SideBarNav>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}

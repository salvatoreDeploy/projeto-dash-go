import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawerSideBar = useBreakpointValue({ base: true, lg: false });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
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

import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarContext } from "../../Contexts/SideBarContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
  const { onOpen } = useSideBarContext();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      mt="4"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navegation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion}></Profile>
      </Flex>
    </Flex>
  );
}

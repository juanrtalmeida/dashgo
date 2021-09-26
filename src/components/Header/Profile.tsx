import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>nome</Text>
          <Text color="gray.300" fontSize="small">
            email
          </Text>
        </Box>
      )}
      <Avatar size="md" src="https://github.com/juanrtalmeida.png" />
    </Flex>
  );
}

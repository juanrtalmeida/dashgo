import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      align="center"
      color="gray.200"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        px="4"
        mr="4"
        variant="unstyled"
        placeholder="Buscar na Plataforma"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="18" />
    </Flex>
  );
}

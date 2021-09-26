import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/Index";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box
      width="100%"
      my="6"
      maxWidth={1480}
      mx="auto"
      px="6"
      direction="column"
      h="100vh"
    >
      <Header />
      <Flex>
        <Sidebar />
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          px={["6", "8"]}
          py={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            {" "}
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700"></Divider>
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label=" Nome Completo"></Input>
              <Input name="email" label=" E-mail"></Input>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Senha"></Input>
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
              ></Input>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="purple">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

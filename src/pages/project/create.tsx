/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";

export default function RegisterProject() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Cadastrar Projeto
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="projeto" label="Projeto:" />
              <Input name="desenvolvedor" label="Nome do Desenvolvedor:" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="inicio" label="Data de Inicio:" type="date" />
              <Input name="final" label="Data de Entrega:" type="date" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Select name="linguagens" label="Linguagem Usada:">
                <option value="node">Node</option>
                <option value="react">React</option>
              </Select>
              <Select name="status" label="Status Projeto:">
                <option value="finalizado">Finalizado</option>
                <option value="desenvolvimento">Desenvolvimento</option>
              </Select>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button color="white" bgColor="gray.500">
                Cancelar
              </Button>
              <Button
                color="white"
                bgColor="pink.500"
                _hover={{ bg: "pink.700" }}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

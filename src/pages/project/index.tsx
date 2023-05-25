import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  LightMode,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import Link from "next/link";

export default function ProjectsList() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Projetos :
            </Heading>
            <Link href="/project/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                bgColor="pink.500"
                _hover={{ bg: "pink.700" }}
                leftIcon={<Icon as={RiAddLine} />}
              >
                Cadastrar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.800" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Projeto</Th>
                <Th>Desenvolvedor</Th>
                <Th>Linguagem</Th>
                {isWideVersion && <Th>Data de Inicio</Th>}
                {isWideVersion && <Th>Data de Termino</Th>}
                <Th>Status</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} color="gray.800" width="8">
                  <LightMode>
                    <Checkbox colorScheme="pink" />
                  </LightMode>
                </Td>
                <Td>Dash.Go</Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Henrique Araujo</Text>
                    <Text fontSize="sm" color="gray.300">
                      liderhenrique@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>React</Td>
                {isWideVersion && <Th>Data de Inicio</Th>}
                {isWideVersion && <Th>Data de Termino</Th>}
                <Td>Desenvolvimento</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    bgColor="purple.500"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    {isWideVersion ? "Editar" : ""}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]} color="gray.800" width="8">
                  <LightMode>
                    <Checkbox colorScheme="pink" />
                  </LightMode>
                </Td>
                <Td>RentalX</Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Henrique Araujo</Text>
                    <Text fontSize="sm" color="gray.300">
                      liderhenrique@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>Node.Js</Td>
                {isWideVersion && <Th>Data de Inicio</Th>}
                {isWideVersion && <Th>Data de Termino</Th>}
                <Td>Desenvolvimento</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    bgColor="purple.500"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    {isWideVersion ? "Editar" : ""}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}

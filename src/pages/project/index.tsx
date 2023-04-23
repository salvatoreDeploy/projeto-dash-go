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
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "../../components/Pagination";

export default function ProjectsList() {
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
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.800" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Projeto</Th>
                <Th>Desenvolvedor</Th>
                <Th>Linguagem</Th>
                <Th>Data de Inicio</Th>
                <Th>Data de Termino</Th>
                <Th>Status</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6" color="gray.800" width="8">
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
                <Td>15/04/23</Td>
                <Td>15/05/23</Td>
                <Td>Desenvolvimento</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    bgColor="purple.500"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6" color="gray.800" width="8">
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
                <Td>15/03/21</Td>
                <Td>15/10/21</Td>
                <Td>Desenvolvimento</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    bgColor="purple.500"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
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

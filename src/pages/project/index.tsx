import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Heading,
  Icon,
  LightMode,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { TfiReload } from "react-icons/tfi";
import Pagination from "../../components/Pagination";
import NextLink from "next/link";
import { useCallback, useState } from "react";
import { useProject } from "../../services/hooks/useProject";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

export default function ProjectsList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error, refetch } = useProject(page);

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const handleButtonClick = useCallback(() => {
    refetch(); // Chama a função refetch para buscar novamente os dados
  }, [refetch]);

  async function handlePrefetchProject(projectId: number | string) {
    await queryClient.prefetchQuery(
      ["project", projectId],
      async () => {
        const response = await api.get(`project/${projectId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutos
      }
    );
  }

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
            <Flex justify="flex-end">
              <HStack>
                <Button
                  size="sm"
                  fontSize="sm"
                  bgColor="pink.500"
                  _hover={{ bg: "pink.700" }}
                  leftIcon={
                    !isLoading && !isFetching && <Icon as={TfiReload} />
                  }
                  onClick={handleButtonClick}
                >
                  {!isLoading && isFetching ? (
                    <Spinner size="sm" color="gray.500" m="8" />
                  ) : (
                    "Atualizar"
                  )}
                </Button>
                <NextLink href="/project/create" passHref>
                  <Button
                    size="sm"
                    fontSize="sm"
                    bgColor="pink.500"
                    _hover={{ bg: "pink.700" }}
                    leftIcon={<Icon as={RiAddLine} />}
                  >
                    Cadastrar novo
                  </Button>
                </NextLink>
              </HStack>
            </Flex>
          </Flex>
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex>
              <Text>Não foi possivel obter os dados</Text>
            </Flex>
          ) : (
            <>
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
                  {data.projects.map((project) => {
                    return (
                      <>
                        <Tr key={project.id}>
                          <Td px={["4", "4", "6"]} color="gray.800" width="8">
                            <LightMode>
                              <Checkbox colorScheme="pink" />
                            </LightMode>
                          </Td>
                          <Td whiteSpace="nowrap">
                            <Link
                              color="purple.400"
                              onMouseEnter={() =>
                                handlePrefetchProject(project.id)
                              }
                            >
                              {project.project}
                            </Link>
                          </Td>
                          <Td>
                            <Box>
                              <Text>{project.nameDeveloper}</Text>
                              <Text fontSize="sm" color="gray.300">
                                liderhenrique@gmail.com
                              </Text>
                            </Box>
                          </Td>
                          <Td>{project.languageUsed}</Td>
                          {isWideVersion && <Th>{project.startDate}</Th>}
                          {isWideVersion && <Th>{project.deliveryDate}</Th>}
                          <Td>{project.projectStatus}</Td>
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
                      </>
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                registerPerPage={1}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

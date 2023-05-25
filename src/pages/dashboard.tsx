import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import {
  optionsPie,
  optionsArea,
  optionsBar,
} from "../utils/optionsConfigApexChart";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="4" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth={["300px", "380px"]}
          alignItems="flex-start"
        >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            maxHeight={400} /* pb="8" */
          >
            <Text fontSize="lg" mb="4">
              Funcionalidades Desenvolvidas por Semana
            </Text>
            <Chart
              options={optionsPie}
              series={optionsPie.series}
              type="donut"
            />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            maxHeight={400} /* pb="8" */
          >
            <Text fontSize="lg" mb="4">
              Projetos Desenvolvidos no Mês
            </Text>
            <Chart
              options={optionsArea}
              series={optionsArea.series}
              type="area"
            />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            maxHeight={400} /* pb="8" */
          >
            <Text fontSize="lg" mb="4">
              Liguagens mais utilizadas em Projetos
            </Text>
            <Chart options={optionsBar} series={optionsBar.series} type="bar" />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            maxHeight={400} /* pb="8" */
          >
            <Text fontSize="lg" mb="4">
              Projetos finalizados no Ano
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

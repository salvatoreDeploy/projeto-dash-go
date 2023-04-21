import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  labels: [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sabado",
    "Domingo",
  ],
  // colors: ["#93C3EE", "#E5C6A0", "#669DB5", "#94A74A"],

  legend: {
    /*  formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    }, */
    fontSize: "16px",
    labels: {
      colors: ["#fff", "#fff"],
    },
  },
  dataLabels: {
    enabled: true,
    /* formatter: function (val, opts) {
      const value = parseFloat(val.toString());
      return opts.w.globals.labels[opts.seriesIndex] + ":  " + value.toFixed();
    }, */
    background: {},
    style: {
      fontSize: "18px",
      fontFamily: undefined,
      fontWeight: "bold",
    },
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: undefined,
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: undefined,
            fontWeight: 400,
            color: "gray",
            offsetY: 16,
            formatter: function (val) {
              return val.toLocaleString();
            },
          },
          total: {
            show: true,
            fontSize: "22px",
            fontFamily: undefined,
            fontWeight: 600,
            label: "Total",
            color: undefined,
            formatter: function (w) {
              return w.globals.seriesTotals
                .reduce((a, b) => {
                  return a + b;
                }, 0)
                .toLocaleString();
            },
          },
        },
      },
    },
  },
  series: [3, 6, 1, 12, 15, 0, 20],
};

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="380px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8} /* pb="8" */>
            <Text fontSize="lg" mb="4">
              Funcionalidades Desenvolvidas por Semana
            </Text>
            <Chart options={options} series={options.series} type="donut" />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} /* pb="8" */>
            <Text fontSize="lg" mb="4">
              Projetos Desenvolvidos no Mês
            </Text>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} /* pb="8" */>
            <Text fontSize="lg" mb="4">
              Liguagens mais utilizadas
            </Text>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} /* pb="8" */>
            <Text fontSize="lg" mb="4">
              Projetos finalizados no Ano
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

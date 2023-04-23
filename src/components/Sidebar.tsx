import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" textAlign="center">
              <Icon as={RiDashboardLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                DashBoard
              </Text>
            </Link>
            <Link display="flex" textAlign="center">
              <Icon as={RiContactsLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Projetos
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" textAlign="center">
              <Icon as={RiInputMethodLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Formularios
              </Text>
            </Link>
            <Link display="flex" textAlign="center">
              <Icon as={RiGitMergeLine} fontSize="20"></Icon>
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

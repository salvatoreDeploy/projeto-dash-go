import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dash.Go
        <Text as="span" ml="1" color="pink.500">
          !
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        pl="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearch2Line} fontSize="20" />
      </Flex>
    </Flex>
  );
}

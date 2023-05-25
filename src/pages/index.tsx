import React from "react";
import { Button, Flex, Stack, FormLabel } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { resolve } from "path";

type SignInFormParamData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormParamData> = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(value);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="6"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register("email")}
          ></Input>
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          bg="pink.500"
          _hover={{ bg: "pink.700" }}
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

import React from "react";
import { Button, Flex, Stack, FormLabel } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormParamData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatorio")
    .email("Formato de email invalido"),
  password: yup.string().required("Senha obrigatoria"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  // console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormParamData> = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // console.log(value);
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
            error={errors.email as FieldError}
            {...register("email")}
          ></Input>
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password as FieldError}
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

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
import Link from "next/link";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type RegisterProjectFormParamData = {
  project: string;
  nameDeveloper: string;
  startDate: string;
  deliveryDate: string;
  languageUsed: string;
  projectStatus: string;
};

const registerProjectFormSchema = yup.object().shape({
  project: yup.string().required("Nome do Projeto Obrigatorio!").min(5).max(15),
  nameDeveloper: yup
    .string()
    .required("Nome do Desenvolvedor Obrigatorio!")
    .min(5)
    .max(15),
  startDate: yup.string().required("Data de Entrega Obrigatorio!"),
  deliveryDate: yup.string().required("Data de Entrega Obrigatorio!"),
  languageUsed: yup
    .string()
    .required("Linguagem Usada Obrigatorio")
    .oneOf(["node", "react"], "Escolha obrigatoria ou inexistente"),
  projectStatus: yup
    .string()
    .oneOf(
      ["finalizado", "desenvolvimento"],
      "Escolha obrigatoria ou inexistente"
    ),
});

export default function RegisterProject() {
  const router = useRouter();

  const registerProject = useMutation(
    async (project: RegisterProjectFormParamData) => {
      const response = await api.post("project", {
        project: {
          ...project,
        },
      });

      return response.data.project;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("projects");
      },
    }
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerProjectFormSchema),
  });

  const { errors } = formState;

  const handlerRegisterProject: SubmitHandler<
    RegisterProjectFormParamData
  > = async (value) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log(value);

    await registerProject.mutateAsync(value);
    router.push("/project");
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handlerRegisterProject)}
        >
          <Heading size="lg" fontWeight="normal">
            Cadastrar Projeto
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                name="project"
                label="Projeto:"
                {...register("project")}
                error={errors.project as FieldError}
              />
              <Input
                name="nameDeveloper"
                label="Nome do Desenvolvedor:"
                {...register("nameDeveloper")}
                error={errors.nameDeveloper as FieldError}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                name="startDate"
                label="Data de Inicio:"
                type="date"
                {...register("startDate")}
                error={errors.startDate as FieldError}
              />
              <Input
                name="deliveryDate"
                label="Data de Entrega:"
                type="date"
                {...register("deliveryDate")}
                error={errors.deliveryDate as FieldError}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Select
                name="languageUsed"
                label="Linguagem Usada:"
                {...register("languageUsed")}
                error={errors.languageUsed as FieldError}
              >
                <option value=""></option>
                <option value="node">Node</option>
                <option value="react">React</option>
              </Select>
              <Select
                name="projectStatus"
                label="Status Projeto:"
                {...register("projectStatus")}
                error={errors.projectStatus as FieldError}
              >
                <option value=""></option>
                <option value="finalizado">Finalizado</option>
                <option value="desenvolvimento">Desenvolvimento</option>
              </Select>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/project">
                <Button color="white" bgColor="gray.500">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                color="white"
                bgColor="pink.500"
                _hover={{ bg: "pink.700" }}
                isLoading={formState.isSubmitting}
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

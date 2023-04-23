import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChakraInputProps,
  Icon,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { RiCalendarLine } from "react-icons/ri";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...props }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChackraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...props}
      />
    </FormControl>
  );
}

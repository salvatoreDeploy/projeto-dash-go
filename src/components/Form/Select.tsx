import {
  FormControl,
  FormLabel,
  Select as SelectChakra,
  SelectProps as ChakraSelectProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  error?: FieldError;
  children: React.ReactNode;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, error = null, children, ...props },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      </FormLabel>
      <SelectChakra
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        ref={ref}
        {...props}
      >
        {children}
      </SelectChakra>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);

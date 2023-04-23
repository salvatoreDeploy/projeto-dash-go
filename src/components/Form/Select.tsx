import {
  FormControl,
  FormLabel,
  Select as SelectChakra,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  children: React.ReactNode;
}

export function Select({ name, label, children, ...props }: SelectProps) {
  return (
    <FormControl>
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
      >
        {children}
      </SelectChakra>
    </FormControl>
  );
}

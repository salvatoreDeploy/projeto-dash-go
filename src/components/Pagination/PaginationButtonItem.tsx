import { Button } from "@chakra-ui/react";

interface PaginationBUttonItemProps {
  isCurrent?: boolean;
  nummberPage: number;
}

export function PaginationButtonItem({
  nummberPage,
  isCurrent = false,
}: PaginationBUttonItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="pink.500"
        _hover={{ bg: "pink.700" }}
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {nummberPage}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {nummberPage}
    </Button>
  );
}

import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationButtonItem } from "./PaginationButtonItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      justify="space-between"
      align="center"
      mt="8"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationButtonItem nummberPage={1} isCurrent />
        <PaginationButtonItem nummberPage={2} />
        <PaginationButtonItem nummberPage={3} />
        <PaginationButtonItem nummberPage={4} />
      </Stack>
    </Stack>
  );
}

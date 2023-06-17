import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationButtonItem } from "./PaginationButtonItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

/* 
  Estrutura de paginação:
  1 ... 4 5 6 ... 20
*/

const siblingsCount = 1; // Paginas Irmãs Ex: 4 5 6

function generatePagesArray(from: number, to: number) {
  return [new Array(to - from)] // 2 e 5 -> 5 - 2 -> um array de 3 posições = paginas 3, 4, 5 cabem da pagina 2 a 5
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registerPerPage,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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
        {currentPage > siblingsCount + 1 && (
          <>
            <PaginationButtonItem onPageChange={onPageChange} nummberPage={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationButtonItem
                onPageChange={onPageChange}
                key={page}
                nummberPage={page}
              />
            );
          })}

        <PaginationButtonItem
          onPageChange={onPageChange}
          nummberPage={currentPage}
          isCurrent
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => {
            return (
              <PaginationButtonItem
                onPageChange={onPageChange}
                key={page}
                nummberPage={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationButtonItem
              onPageChange={onPageChange}
              nummberPage={lastPage}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
}

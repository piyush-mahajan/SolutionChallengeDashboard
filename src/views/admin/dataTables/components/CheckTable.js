import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

export default function ExercisePointsDashboard(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Exercise Points Dashboard
        </Text>
        <Menu />
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          {columns.map((column, index) => (
            <Th pe="10px" key={index} borderColor={borderColor}>
              <Flex
                justify="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"
              >
                {column.Header}
              </Flex>
            </Th>
          ))}
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {row.cells.map((cell, index) => {
                let data = cell.render("Cell");
                return (
                  <Td
                    key={index}
                    fontSize={{ sm: "14px" }}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {data}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
}

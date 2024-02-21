import React from "react";
import { Box, Flex, Text, Icon, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import Menu from "components/menu/MainMenu";
import IconBox from "components/icons/IconBox";

// Assets
import { MdCheckBox, MdDragIndicator } from "react-icons/md";

export default function ExerciseSchedule(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex alignItems="center" w="100%" mb="30px">
        <IconBox
          me="12px"
          w="38px"
          h="38px"
          bg={boxBg}
          icon={<Icon as={MdCheckBox} color={brandColor} w="24px" h="24px" />}
        />
        <Text color={textColor} fontSize="lg" fontWeight="700">
          Exercise Schedule
        </Text>
        <Menu ms="auto" />
      </Flex>
      <Box px="11px">
        <Flex mb="20px">
          <Text
            fontWeight="bold"
            color={textColor}
            fontSize="md"
            textAlign="start"
          >
            Morning Jogging
          </Text>
          <Icon
            ms="auto"
            as={MdDragIndicator}
            color="secondaryGray.600"
            w="24px"
            h="24px"
          />
        </Flex>
        <Flex mb="20px">
          <Text
            fontWeight="bold"
            color={textColor}
            fontSize="md"
            textAlign="start"
          >
            Afternoon Gym Session
          </Text>
          <Icon
            ms="auto"
            as={MdDragIndicator}
            color="secondaryGray.600"
            w="24px"
            h="24px"
          />
        </Flex>
        <Flex mb="20px">
          <Text
            fontWeight="bold"
            color={textColor}
            fontSize="md"
            textAlign="start"
          >
            Evening Yoga Class
          </Text>
          <Icon
            ms="auto"
            as={MdDragIndicator}
            color="secondaryGray.600"
            w="24px"
            h="24px"
          />
        </Flex>
        <Flex mb="20px">
          <Text
            fontWeight="bold"
            color={textColor}
            fontSize="md"
            textAlign="start"
          >
            Weekend Hiking Trip
          </Text>
          <Icon
            ms="auto"
            as={MdDragIndicator}
            color="secondaryGray.600"
            w="24px"
            h="24px"
          />
        </Flex>
        <Flex mb="20px">
          <Text
            fontWeight="bold"
            color={textColor}
            fontSize="md"
            textAlign="start"
          >
            Daily Stretching Routine
          </Text>
          <Icon
            ms="auto"
            as={MdDragIndicator}
            color="secondaryGray.600"
            w="24px"
            h="24px"
          />
        </Flex>
      </Box>
    </Card>
  );
}

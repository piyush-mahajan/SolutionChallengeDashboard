import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/NftBanner1.png";
import { blacken } from "@chakra-ui/theme-tools";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction="column"
      // bgImage={banner}
      bgColor={blacken}
      bgSize="cover"
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius="30px"
    >
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color="white"
        mb="14px"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight="700"
        lineHeight={{ base: "32px", md: "42px" }}
      >
        Fitness Challenge Leaderboard
      </Text>
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="40px"
        lineHeight="28px"
      >
        Track your progress and compete with others in our Fitness Challenge
        Leaderboard! Earn points for every exercise completed and see where you
        stand among fellow participants. Stay motivated, stay active, and climb
        the ranks to become the ultimate fitness champion
      </Text>
      <Flex align="center">
        <Button
          bg="white"
          color="black"
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight="500"
          fontSize="14px"
          py="20px"
          px="27"
          me="38px"
        >
          Start Now
        </Button>
        <Link>
          <Text color="white" fontSize="sm" fontWeight="500">
            Watch Excercises
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

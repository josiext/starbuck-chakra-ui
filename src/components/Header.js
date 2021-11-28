import { ReactComponent as StarbuckLogo } from '../assets/starbuck.svg';

import { Box, Text, Link, HStack } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box position="sticky" top="0" zIndex="100">
      <Box
        bg="#FFF"
        h="100px"
        fontSize="l"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pr="10"
        pl="10"
        fontWeight="bold"
      >
        <HStack spacing="24px">
          <Link w="51px" alignSelf="center">
            <StarbuckLogo width="100%" height="100%" />
          </Link>
          <Link alignSelf="center" textTransform="uppercase">
            Menu
          </Link>
          <Link alignSelf="center" textTransform="uppercase">
            Rewards
          </Link>
          <Link alignSelf="center" textTransform="uppercase">
            Gift Cards
          </Link>
        </HStack>
        <HStack spacing="24px">
          <Link alignSelf="center">Find a store</Link>
          <Link alignSelf="center">Sign in</Link>
          <Link>Join now</Link>
        </HStack>
      </Box>
      <Box h="50px" bg="rgb(30,57,50)" display="flex" alignItems="center">
        <Text
          color="#fff"
          fontWeight="bold"
          w="100%"
          ml="12%"
          textTransform="uppercase"
        >
          Starbucks® Rewards
        </Text>
      </Box>
    </Box>
  );
}

import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Container,
  Center,
  Heading,
  Button,
  Image,
  HStack,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ReactComponent as YourSvg } from './assets/starbuck.svg';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Presentation />
      <GettingStarted />
    </ChakraProvider>
  );
}

function Header() {
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
            <YourSvg width="100%" height="100%" />
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

function Presentation() {
  return (
    <Box
      maxH="810px"
      h="810px"
      bgColor="rgb(212, 233, 226)"
      bgImage="url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')"
      bgPosition="50%"
      bgRepeat="no-repeat"
      bgSize="cover"
      display="flex"
      alignItems="center"
    >
      <Box ml="10">
        <Heading as="h1" size="lg" textTransform="uppercase">
          Free coffee <br /> is a tap away
        </Heading>
        <Text mt="2" fontWeight="600">
          Join now to start earning Rewards.
        </Text>
        <Button mt="2">Join now</Button>
        <Text mt="2" fontWeight="600">
          Or <Link textDecor="underline">join in the app</Link> for the best
          experience
        </Text>
      </Box>
    </Box>
  );
}

function GettingStarted() {
  return (
    <Box py="100px">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading as="h2">Getting started is easy</Heading>
        <Text mt="4">Earn Stars and get rewarded in a few easy steps.</Text>
      </Box>

      <HStack mt="12" display="flex">
        <Steps number="1" title="Create an account">
          <Text>
            To get started, join now. You can also join in the app to get access
            to the full range of Starbucks® Rewards benefits.
          </Text>
        </Steps>
        <Steps number="2" title="Order and pay how you'd like">
          <Text>
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways. Learn how
          </Text>
        </Steps>
        <Steps number="3" title="Earn Stars, get Rewards">
          <Text>
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </Text>
        </Steps>
      </HStack>
    </Box>
  );
}

function Steps({ number, title, children, ...props }) {
  return (
    <Box {...props}>
      <Box display="flex" justifyContent="center">
        <Image
          src={`https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-${number}@2x.jpg`}
          alt={`number ${number}`}
          boxSize="48px"
        />
      </Box>
      <Heading as="h2" mt="8" textAlign="center" fontSize="19" fontWeight="600">
        {title}
      </Heading>
      <Box
        mt="6"
        display="flex"
        justifyContent="center"
        fontSize="16"
        textAlign="center"
      >
        {children}
      </Box>
    </Box>
  );
}

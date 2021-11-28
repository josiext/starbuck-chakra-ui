import { Box, Text, Heading, Image, HStack } from '@chakra-ui/react';

export default function GettingStarted() {
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

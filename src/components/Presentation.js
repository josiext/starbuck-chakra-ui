import { Box, Text, Link, Heading, Button } from '@chakra-ui/react';

export default function Presentation() {
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
      px="var(--mg-content)"
    >
      <Box>
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

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import Presentation from './components/Presentation';
import GettingStarted from './components/GettingStarted';
import theme from './theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box sx={{ '--mg-content': '12%' }}>
        <Header />
        <Presentation />
        <GettingStarted />
      </Box>
    </ChakraProvider>
  );
}

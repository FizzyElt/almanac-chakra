import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react'
import { theme } from './theme'
import Almanac from './components/Almanac'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box p='20'>
      <Almanac />
    </Box>
  </ChakraProvider>
)

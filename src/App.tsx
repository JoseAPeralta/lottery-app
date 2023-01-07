import { Box, Text } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Box bg={'red.800'} p={30} color={'white'} fontSize={'6xl'}>
        Hello
      </Box>
      <Text as={'h1'} bg={'red.800'} p={30} color={'white'} fontSize={'6xl'}>
        Hello
      </Text>
    </>
  );
}

export default App;

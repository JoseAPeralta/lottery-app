import { Card, CardHeader, CardBody, Box, Heading, Text, Flex } from '@chakra-ui/react';

const LotteryBoard = () => {
  return (
    <>
      <Card as={'section'} w={'96'} m='5'>
        <CardHeader as={'header'} textAlign='center' bg={'primary.500'} color={'gray.50'}>
          <Heading as={'h2'} size={'xl'}>
            Sorteo dominical
          </Heading>
          <Heading as={'h3'} size={'lg'}>
            1 de enero del 2023
          </Heading>
        </CardHeader>

        <CardBody>
          <Flex as='section' justifyContent={'center'}>
            <Box w={'60'}>
              <Flex as={'p'} justifyContent={'space-between'}>
                Primer premio <Text as='b'>5826</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Segundo premio <Text as='b'>5826</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Tercer premio <Text as='b'>5826</Text>
              </Flex>
            </Box>
          </Flex>

          <Flex as='section' justifyContent={'center'}>
            <Box w={'40'} pt={'5'}>
              <Flex as={'p'} justifyContent={'space-between'}>
                Letras <Text as='b'>BDBB</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Serie <Text as='b'>25</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Folio <Text as='b'>12</Text>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default LotteryBoard;

import { Card, CardHeader, CardBody, Box, Heading, Text, Flex } from '@chakra-ui/react';
import { LotteryDraw } from '@/models';
import { DateToSpanish } from '@/helpers';

const LotteryBoard = (props: LotteryDraw) => {
  const { drawDate, folio, letters, prizes, serie, type } = props;
  const newDrawDate = DateToSpanish(drawDate);

  return (
    <>
      <Card as={'section'} w={'96'} m='5'>
        <CardHeader as={'header'} textAlign='center' bg={'primary.500'} color={'gray.50'}>
          <Heading as={'h2'} size={'xl'}>
            Sorteo {type}
          </Heading>
          <Heading as={'h3'} size={'lg'}>
            {newDrawDate}
          </Heading>
        </CardHeader>

        <CardBody>
          <Flex as='section' justifyContent={'center'}>
            <Box w={'60'}>
              <Flex as={'p'} justifyContent={'space-between'}>
                Primer premio <Text as='b'>{prizes.first}</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Segundo premio <Text as='b'>{prizes.second}</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Tercer premio <Text as='b'>{prizes.third}</Text>
              </Flex>
            </Box>
          </Flex>

          <Flex as='section' justifyContent={'center'}>
            <Box w={'40'} pt={'5'}>
              <Flex as={'p'} justifyContent={'space-between'}>
                Letras <Text as='b'>{letters}</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Serie <Text as='b'>{serie}</Text>
              </Flex>
              <Flex as={'p'} justifyContent={'space-between'}>
                Folio <Text as='b'>{folio}</Text>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default LotteryBoard;

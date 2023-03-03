import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, Box } from '@chakra-ui/react';
import { LotteryDraws } from '@/models';
import { MonthAndYearToSpanish } from '@/helpers';

interface myprops {
  lotteryDraws: LotteryDraws;
}

const LotteryList = (props: myprops) => {
  const lotteryDraws = props.lotteryDraws;

  return (
    <Box as={'section'}>
      <Heading
        as={'h2'}
        m={'8'}
        size={'lg'}
        textAlign={'center'}
        p={'4'}
        bg={'primary.500'}
        color={'gray.50'}
        textTransform={'capitalize'}
      >
        {MonthAndYearToSpanish(lotteryDraws[0].drawDate)}
      </Heading>
      <TableContainer m={'8'}>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>Tipo</Th>
              <Th>Día</Th>
              <Th>Primero</Th>
              <Th>Segundo</Th>
              <Th>Tercero</Th>
              <Th>Letras</Th>
              <Th>Serie</Th>
              <Th>Folio</Th>
            </Tr>
          </Thead>

          <Tbody>
            {lotteryDraws.map((draw, index) => (
              <Tr key={index}>
                <Td>{draw.type}</Td>
                <Td>{new Date(draw.drawDate).getDate()}</Td>
                <Td>{draw.prizes.first}</Td>
                <Td>{draw.prizes.second}</Td>
                <Td>{draw.prizes.third}</Td>
                <Td>{draw.letters}</Td>
                <Td>{draw.serie}</Td>
                <Td>{draw.folio}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LotteryList;

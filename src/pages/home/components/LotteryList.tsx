import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from '@chakra-ui/react';

const LotteryList = () => {
  return (
    <section>
      <Heading as={'h2'} m={'8'} size={'lg'} textAlign={'center'} p={'4'} bg={'primary.500'} color={'gray.50'}>
        Diciembre 2023
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
            <Tr>
              <Td>Zodiaco</Td>
              <Td>02</Td>
              <Td>3861</Td>
              <Td>88</Td>
              <Td>56</Td>
              <Td>DADC</Td>
              <Td>5</Td>
              <Td>23</Td>
            </Tr>
            <Tr>
              <Td>Dominical</Td>
              <Td>04</Td>
              <Td>0411</Td>
              <Td>8595</Td>
              <Td>8502</Td>
              <Td>BBDC</Td>
              <Td>19</Td>
              <Td>7</Td>
            </Tr>
            <Tr>
              <Td>Intermedio</Td>
              <Td>07</Td>
              <Td>8421</Td>
              <Td>8912</Td>
              <Td>8912</Td>
              <Td>ADCD</Td>
              <Td>8</Td>
              <Td>15</Td>
            </Tr>
            <Tr>
              <Td>Extraordinario</Td>
              <Td>11</Td>
              <Td>04588</Td>
              <Td>97513</Td>
              <Td>97513</Td>
              <Td>BABA</Td>
              <Td>1</Td>
              <Td>6</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default LotteryList;

import { Flex } from '@chakra-ui/react';
import { Navbar } from '@/components';
import { LotteryBoard } from './components';
const Home = () => {
  return (
    <>
      <Navbar />
      <Flex justifyContent={'center'}>
        <LotteryBoard />
        <LotteryBoard />
        <LotteryBoard />
      </Flex>
    </>
  );
};

export default Home;

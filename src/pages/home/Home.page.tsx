import { Flex, Show } from '@chakra-ui/react';
import { Navbar } from '@/components';
import { LotteryBoard, LotteryList } from './components';
const Home = () => {
  return (
    <>
      <Navbar />
      <Flex justifyContent={'center'}>
        <LotteryBoard />
        <Show above='md'>
          <LotteryBoard />
        </Show>
        <Show above='xl'>
          <LotteryBoard />
        </Show>
        <Show above='2xl'>
          <LotteryBoard />
        </Show>
      </Flex>
      <LotteryList />
      <LotteryList />
    </>
  );
};

export default Home;

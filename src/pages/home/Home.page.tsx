import { useState, useEffect } from 'react';
import { Flex, Show } from '@chakra-ui/react';
import { LotteryDraws, LotteryDrawsEmptyState } from '@/models';
import { fetchLotteryDraws } from './services';
import { Navbar } from '@/components';
import { LotteryBoard } from './components';

// import { LotteryBoard, LotteryList } from './components';

const Home = () => {
  const [lotteryDraw, setLotteryDraw] = useState<LotteryDraws>(LotteryDrawsEmptyState);

  const getDraws = async () => {
    const result = await fetchLotteryDraws();
    setLotteryDraw(result);
    console.log(result);
  };

  useEffect(() => {
    getDraws();
  }, []);

  return (
    <>
      <Navbar />
      <Flex justifyContent={'center'}>
        <LotteryBoard {...lotteryDraw[0]} />
        <Show above='md'>
          <LotteryBoard {...lotteryDraw[1]} />
        </Show>
        <Show above='xl'>
          <LotteryBoard {...lotteryDraw[2]} />
        </Show>
        <Show above='2xl'>
          <LotteryBoard {...lotteryDraw[3]} />
        </Show>
      </Flex>
      {/* <LotteryList />
      <LotteryList /> */}
    </>
  );
};

export default Home;

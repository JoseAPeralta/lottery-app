import { useState, useEffect } from 'react';
import { Flex, Show } from '@chakra-ui/react';
import { LotteryDraws, LotteryDrawsEmptyState } from '@/models';
import { fetchLotteryDraws } from './services';
import { Navbar } from '@/components';
import { LotteryBoard, LotteryList } from './components';
import { lotteryDrawByMonth } from '@/helpers';

const Home = () => {
  const [lotteryDraws, setLotteryDraws] = useState<LotteryDraws>(LotteryDrawsEmptyState);

  const getDraws = async () => {
    const result = await fetchLotteryDraws();
    setLotteryDraws(result);
  };

  useEffect(() => {
    getDraws();
  }, []);
  const lotteryByMonth = lotteryDrawByMonth(lotteryDraws);
  console.log(lotteryByMonth);
  return (
    <>
      <Navbar />

      <Flex justifyContent={'center'}>
        <LotteryBoard {...lotteryDraws[0]} />
        <Show above='md'>
          <LotteryBoard {...lotteryDraws[1]} />
        </Show>
        <Show above='xl'>
          <LotteryBoard {...lotteryDraws[2]} />
        </Show>
        <Show above='2xl'>
          <LotteryBoard {...lotteryDraws[3]} />
        </Show>
      </Flex>
      {lotteryByMonth[0].length !== 0 && <LotteryList lotteryDraws={lotteryByMonth[0]} />}
      {lotteryByMonth[1].length !== 0 && <LotteryList lotteryDraws={lotteryByMonth[1]} />}
      {lotteryByMonth[2].length !== 0 && <LotteryList lotteryDraws={lotteryByMonth[2]} />}
      {lotteryByMonth[3].length !== 0 && <LotteryList lotteryDraws={lotteryByMonth[3]} />}
    </>
  );
};

export default Home;

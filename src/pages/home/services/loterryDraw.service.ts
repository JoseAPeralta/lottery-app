import { LotteryDrawsAdapter } from '../adapter';

export const fetchLotteryDraws = async () => {
  const url = 'https://us-east-1.aws.data.mongodb-api.com/app/data-llcjw/endpoint/lotteryDraws';
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => LotteryDrawsAdapter(res));
};

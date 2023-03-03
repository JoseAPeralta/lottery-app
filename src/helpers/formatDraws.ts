import { LotteryDraws } from '@/models';
import { subtractMonth } from './index';

export const lotteryDrawByMonth = (lotteryDraw: LotteryDraws) => {
  const LotteryByMonth: LotteryDraws[] = [[], [], [], []];

  const thisMonth = new Date().getMonth();
  const oneMonthAgo = subtractMonth(1);
  const twoMonthAgo = subtractMonth(2);
  const threeMonthAgo = subtractMonth(3);

  lotteryDraw.map((draw) => {
    if (new Date(draw.drawDate).getMonth() == thisMonth) {
      LotteryByMonth[0].push(draw);
    }
    if (new Date(draw.drawDate).getMonth() == oneMonthAgo) {
      LotteryByMonth[1].push(draw);
    }
    if (new Date(draw.drawDate).getMonth() == twoMonthAgo) {
      LotteryByMonth[2].push(draw);
    }
    if (new Date(draw.drawDate).getMonth() == threeMonthAgo) {
      LotteryByMonth[3].push(draw);
    }
  });

  return LotteryByMonth;
};

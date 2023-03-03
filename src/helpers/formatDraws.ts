import { LotteryDraws } from '@/models';
import { subtractMonth } from './index';

export const lotteryDrawByMonth = (lotteryDraw: LotteryDraws) => {
  const LotteryByMonth: LotteryDraws[] = [[], [], [], []];

  const thisMonth = new Date().getMonth();
  const oneMonthAgo = subtractMonth(1);
  const twoMonthAgo = subtractMonth(2);
  const threeMonthAgo = subtractMonth(3);

  lotteryDraw.map((draw) => {
    const drawMonth = new Date(draw.drawDate).getMonth();
    if (drawMonth == thisMonth) {
      LotteryByMonth[0].push(draw);
    }
    if (drawMonth == oneMonthAgo) {
      LotteryByMonth[1].push(draw);
    }
    if (drawMonth == twoMonthAgo) {
      LotteryByMonth[2].push(draw);
    }
    if (drawMonth == threeMonthAgo) {
      LotteryByMonth[3].push(draw);
    }
  });

  return LotteryByMonth;
};

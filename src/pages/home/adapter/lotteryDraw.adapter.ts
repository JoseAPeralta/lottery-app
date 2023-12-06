import { ApiLotteryDraw, LotteryDraws } from '@/models';

export const LotteryDrawAdapter = (LotteryDraw: ApiLotteryDraw) => {
  return {
    id: LotteryDraw._id,
    drawDate: LotteryDraw.date,
    folio: LotteryDraw.folio,
    letters: LotteryDraw.letters,
    prizes: LotteryDraw.prizes,
    serie: LotteryDraw.serie,
    ticketDate: LotteryDraw.number,
    type: LotteryDraw.type,
  };
};

export const LotteryDrawsAdapter = (LotteryDraws: ApiLotteryDraw[]): LotteryDraws => {
  return LotteryDraws.map((lotteryDraw) => LotteryDrawAdapter(lotteryDraw));
};

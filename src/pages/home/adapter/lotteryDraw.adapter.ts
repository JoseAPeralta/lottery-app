import { ApiLotteryDraw } from '@/models';

export const LotteryDrawAdapter = (LotteryDraw: ApiLotteryDraw) => {
  return {
    id: LotteryDraw._id,
    drawDate: LotteryDraw.draw_date,
    folio: LotteryDraw.folio,
    letters: LotteryDraw.letters,
    prizes: LotteryDraw.prizes,
    serie: LotteryDraw.serie,
    ticketDate: LotteryDraw.ticket_date,
    type: LotteryDraw.type,
  };
};

export const LotteryDrawsAdapter = (LotteryDraws: ApiLotteryDraw[]) => {
  return LotteryDraws.map((lotteryDraw) => LotteryDrawAdapter(lotteryDraw));
};

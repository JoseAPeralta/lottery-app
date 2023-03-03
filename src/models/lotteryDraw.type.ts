export interface ApiLotteryDraw {
  _id: string;
  draw_date: Date;
  folio: number;
  letters: string;
  prizes: {
    first: string;
    second: string;
    third: string;
  };
  serie: number;
  ticket_date: Date;
  type: string;
}

export interface LotteryDraw {
  id: string;
  drawDate: Date;
  folio: number;
  letters: string;
  prizes: {
    first: string;
    second: string;
    third: string;
  };
  serie: number;
  ticketDate: Date;
  type: string;
}

export type LotteryDraws = Array<LotteryDraw>;

export const LotteryDrawsEmptyState: LotteryDraws = [
  {
    id: '',
    drawDate: new Date(),
    folio: 0,
    letters: '',
    prizes: {
      first: '',
      second: '',
      third: '',
    },
    serie: 0,
    ticketDate: new Date(),
    type: '',
  },
  {
    id: '',
    drawDate: new Date(),
    folio: 0,
    letters: '',
    prizes: {
      first: '',
      second: '',
      third: '',
    },
    serie: 0,
    ticketDate: new Date(),
    type: '',
  },
  {
    id: '',
    drawDate: new Date(),
    folio: 0,
    letters: '',
    prizes: {
      first: '',
      second: '',
      third: '',
    },
    serie: 0,
    ticketDate: new Date(),
    type: '',
  },
  {
    id: '',
    drawDate: new Date(),
    folio: 0,
    letters: '',
    prizes: {
      first: '',
      second: '',
      third: '',
    },
    serie: 0,
    ticketDate: new Date(),
    type: '',
  },
];

export const LotteryDrawEmptyState: LotteryDraw = {
  id: '',
  drawDate: new Date(),
  folio: 0,
  letters: '',
  prizes: {
    first: '',
    second: '',
    third: '',
  },
  serie: 0,
  ticketDate: new Date(),
  type: '',
};

export interface ApiLotteryDraw {
  _id: string;
  date: Date;
  folio: number;
  letters: string;
  prizes: {
    first: string;
    second: string;
    third: string;
  };
  serie: number;
  number: number;
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
  ticketDate: number;
  type: string;
}

export type LotteryDraws = Array<LotteryDraw>;

export const emptyLotteryDraws: LotteryDraws = [
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
    ticketDate: 0,
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
    ticketDate: 0,
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
    ticketDate: 0,
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
    ticketDate: 0,
    type: '',
  },
];

export const emptyLotteryDraw: LotteryDraw = {
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
  ticketDate: 0,
  type: '',
};

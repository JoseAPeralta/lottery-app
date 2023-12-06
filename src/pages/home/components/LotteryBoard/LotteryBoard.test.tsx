import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { LotteryBoard } from './index';

describe('Component LotteryBoard', () => {
  const LotteryBoardProps = {
    drawDate: new Date('2023-03-01T05:00:00Z'),
    folio: 3,
    id: '64016e15240ffc0368141fa5',
    letters: 'BADB',
    prizes: { first: '0961', second: '1700', third: '0687' },
    serie: 22,
    type: 'Intermedio',
  };

  it('Should match to snapshot', () => {
    const result = render(<LotteryBoard {...LotteryBoardProps} />);
    expect(result).toMatchSnapshot();
  });

  it('Should accesible LotteryBoard', async () => {
    const { container } = render(<LotteryBoard {...LotteryBoardProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

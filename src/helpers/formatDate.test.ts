import { dateToSpanish, monthAndYearToSpanish, subtractMonth } from './index';
import { expect, it } from 'vitest';

describe('Helper function DateToSpanish ', () => {
  it('Passing ISO8601 format date', () => {
    const expectDate = '23 de febrero de 2023';
    const SpanishDate = dateToSpanish('2023-02-23T05:00:00Z');

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing localDateString format date', () => {
    const expectDate = '23 de febrero de 2023';
    const SpanishDate = dateToSpanish('2/23/2023');

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing timestamp format date', () => {
    const expectDate = '23 de febrero de 2023';
    const SpanishDate = dateToSpanish(1677128400000);

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing invalid format date', () => {
    const expectDate = 'Invalid Date';
    const SpanishDate = dateToSpanish('23 de febrero de 2023');

    expect(expectDate).toEqual(SpanishDate);
  });
});

describe('Helper function MonthAndYearToSpanish', () => {
  it('Passing ISO8601 format date', () => {
    const expectDate = 'febrero de 2023';
    const SpanishDate = monthAndYearToSpanish('2023-02-23T05:00:00Z');

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing localDateString format date', () => {
    const expectDate = 'febrero de 2023';
    const SpanishDate = monthAndYearToSpanish('2/23/2023');

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing timestamp format date', () => {
    const expectDate = 'febrero de 2023';
    const SpanishDate = monthAndYearToSpanish(1677128400000);

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing invalid format date', () => {
    const expectDate = 'Invalid Date';
    const SpanishDate = monthAndYearToSpanish('23 de febrero de 2023');

    expect(expectDate).toEqual(SpanishDate);
  });
});

describe('Helper function subtractMonth', () => {
  it('Return a number of previous month', () => {
    const expectMonth = new Date('1/23/2023').getMonth();
    const februaryMonth = new Date('2/23/2023');
    const monthsToSubtract = 1;
    const februarySubtract = subtractMonth(monthsToSubtract, februaryMonth);

    expect(expectMonth).toEqual(februarySubtract);
  });

  it('Return the number of previous month, if the subtraction is from the previous year', () => {
    const expectMonth = new Date('12/23/2022').getMonth();
    const februaryMonth = new Date('2/23/2023');
    const monthsToSubtract = 2;
    const februarySubtract = subtractMonth(monthsToSubtract, februaryMonth);

    expect(expectMonth).toEqual(februarySubtract);
  });
});

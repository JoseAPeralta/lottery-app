import { DateToSpanish } from './index';
import { expect } from 'vitest';

describe('Helper function DateToSpanish ', () => {
  it('Passing ISO8601 format date', () => {
    const expectDate = '23 de febrero de 2023';
    const SpanishDate = DateToSpanish('2023-02-23T05:00:00Z');

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing localDateString format date', () => {
    const expectDate = '23 de febrero de 2023';
    const SpanishDate = DateToSpanish('2/23/2023');

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing timestamp format date', () => {
    const expectDate = '23 de febrero de 2023';
    const SpanishDate = DateToSpanish(1677128400000);

    expect(expectDate).toEqual(SpanishDate);
  });

  it('Passing invalid format date', () => {
    const expectDate = 'Invalid Date';
    const SpanishDate = DateToSpanish('23 de febrero de 2023');

    expect(expectDate).toEqual(SpanishDate);
  });
});

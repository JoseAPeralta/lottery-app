export const DateToSpanish = (date: Date | string | number) => {
  const myDate = new Date(date);
  return myDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' });
};

export const MonthAndYearToSpanish = (date: Date | string | number) => {
  const myDate = new Date(date);
  return myDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
};

export const subtractMonth = (subtrahend: number) => {
  const myDate = new Date();
  return new Date(new Date().setMonth(myDate.getMonth() - subtrahend)).getMonth();
};

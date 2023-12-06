export const dateToSpanish = (date: Date | string | number) => {
  const myDate = new Date(date);
  return myDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' });
};

export const monthAndYearToSpanish = (date: Date | string | number) => {
  const myDate = new Date(date);
  return myDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
};

export const subtractMonth = (subtrahend: number, myDate = new Date()) => {
  return new Date(new Date().setMonth(myDate.getMonth() - subtrahend)).getMonth();
};

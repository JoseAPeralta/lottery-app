export const DateToSpanish = (date: Date | string | number) => {
  const myDate = new Date(date);
  return myDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' });
};

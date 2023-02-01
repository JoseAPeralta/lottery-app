export const DateToSpanish = (date: Date) => {
  const myDate = new Date(date);
  return myDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' });
};

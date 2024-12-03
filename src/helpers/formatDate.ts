export const formatDate = (date: string | number | Date | null) => {
  if (date === '' || date === null) {
    return null;
  }

  return new Intl.DateTimeFormat('ua', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));
};

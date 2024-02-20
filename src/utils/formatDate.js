export const formatDate = (dateString = '') => {
  const parsedDate = new Date(dateString);
  const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", 'декабря',
  ];
  const day = parsedDate.getDate();
  const monthIndex = parsedDate.getMonth();
  const month = months[monthIndex];
  return dateString ? day + " " + month : dateString;
}
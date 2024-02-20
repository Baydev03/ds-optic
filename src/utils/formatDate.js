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

export const formatDateToLocal = (dateString) => {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ];
  
  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // months are zero-based
  const day = parseInt(dateParts[2]);
  
  const formattedDate = `${day} ${months[month]}`;
  
  return formattedDate;
}
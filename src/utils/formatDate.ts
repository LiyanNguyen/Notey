const formatDate = (date: Date): string => {
  // Get the day, month, and year from the Date object
  const day: number = date.getDate();
  const month: number = date.getMonth() + 1; // Months are zero-based
  const year: number = date.getFullYear();

  // Pad the day and month with leading zeros if necessary
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;

  // Concatenate the day, month, and year with hyphens
  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

  return formattedDate;
}

export default formatDate
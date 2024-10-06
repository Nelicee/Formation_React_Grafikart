export function convertToDate(dateString) {
  // Split the date string by "/"
  const [day, month, year] = dateString.split("/");

  // Months are zero-indexed in JavaScript (0 = January, 11 = December), so subtract 1 from the month

  return new Date(year, month - 1, day);
}

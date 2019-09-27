const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

export const splitMonth = (date) => {
  const dateSplit = date.split("-");

  return months[dateSplit[1]];
};

export const splitDay = (date) => {
  const dateSplit = date.split("-");

  return dateSplit[2];
};

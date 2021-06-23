var d = new Date();

function getDateString(dateObject) {
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const dateString = `${year}-${month}-${day}`;

  return dateString;
}

console.log(getDateString(d));

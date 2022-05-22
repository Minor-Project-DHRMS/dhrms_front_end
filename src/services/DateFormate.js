const dateFormate = (recordDate) => {
  var date = new Date(recordDate);
  console.log(date);

  return (
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
  );
};

export { dateFormate };

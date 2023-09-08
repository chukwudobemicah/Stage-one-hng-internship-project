const displayCurrentDay = document.querySelector(".currentDayOfTheWeek");
const displayCurrentUtcTime = document.querySelector(".currentUtcTime");

const getUserDate = () => {
  const userDate = new Date();
  console.log(userDate);

  const days = [
    "",
    "monday",
    "tuesday",
    "wednesday",
    "thursay",
    "friday",
    "saturday",
    "sunday",
  ];

  const dayFigure = userDate.getDay();
  const day = days[dayFigure];

  const utcMilliSeconds = Date.now();
  displayCurrentDay.textContent = day;
  displayCurrentUtcTime.textContent = utcMilliSeconds;
};

getUserDate();
setInterval(getUserDate, 1000);

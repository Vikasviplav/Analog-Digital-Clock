setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;
}, 1000);

setInterval(() => {
    const time = document.querySelector(".display #time");
    const calendar = document.querySelector(".display #calendar");
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthDays = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let date = new Date();

    var day = date.getDay();
    var date1 = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day_night = "AM";
    if (hours >= 12) {
      day_night = "PM";
      hours = hours - 12;
      // hours = hours % 12 || 12;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    time.textContent =
      hours + ":" + minutes + ":" + seconds + " " + day_night;
    calendar.textContent =
      weekDays[day] + ", " + date1 + " " + monthDays[month] + " " + year;
  });
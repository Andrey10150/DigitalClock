function showTime() {
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("minute");
  var seconds = document.getElementById("second");

  var date = new Date();
  hours.innerHTML = date.getHours();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
}

var interval = setInterval(showTime, 1000);

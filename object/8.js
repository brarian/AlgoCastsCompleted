const time = () => {
  let d = new Date();
  let sec = d.getSeconds();
  let min = d.getMinutes();
  let hour = d.getHours();
  let display = `${hour} : ${min} : ${sec}`;
  document.getElementById("elem").innerHTML = display;
};

time();

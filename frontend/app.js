let minutes = 240;
setInterval(() => {
  minutes--;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  document.getElementById("timer").textContent = `${h}h ${m}m`;
}, 60000);

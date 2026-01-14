// Splash screen display for 1 second (1000ms)
setTimeout(()=>{
  document.getElementById("splash").style.display="none";
  document.getElementById("app").classList.remove("hidden");
}, 1000); // 1000ms = 1 second

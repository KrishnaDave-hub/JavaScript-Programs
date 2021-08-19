const countdown = document.querySelector(".countdown");

// Set Launch Date in Milisecond
const launchDate = new Date("jan 1, 2022 13:00:00").getTime();

// Update Every Second
const intvl = setInterval(() => {
  // Get Todays Date And Time In Milisecond
  const now = new Date().getTime();

  // Get The Distance From Now To The Launch Date
  const distance = launchDate - now;

  // Time Calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   Display The Result
  countdown.innerHTML = `<div>${days}<span>Days</span></div>
                       <div>${hours}<span>Hours</span></div>
                       <div>${mins}<span>Minutes</span></div>
                       <div>${seconds}<span>Second</span></div>`;

// If Launch Date Passed 
if( distance < 0 ){
    // Stop Countdown
    clearInterval(intvl);
    // Style And Output Text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!!';
}
}, 1000);

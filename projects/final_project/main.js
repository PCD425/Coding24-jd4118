// Select all rotating boats
document.querySelectorAll('.rotating-boat').forEach((boat) => {
    // Random vertical offset (-5vh to +5vh)
    const offset = Math.random() * 10 - 5;
  
    // Random delay (0s to 3s)
    const delay = Math.random() * 3;
  
    // Random animation duration (3s to 6s for float)
    const duration = 3 + Math.random() * 3;
  
    // Random tilt range (-3deg to -5deg and +3deg to +5deg)
    const tiltRange = 3 + Math.random() * 2;
  
    // Random tilt duration (1.5s to 3s)
    const tiltDuration = 1.5 + Math.random() * 1.5;
  
    // Set custom properties for each boat
    boat.style.setProperty('--offset', `${offset}vh`);
    boat.style.setProperty('--delay', `${delay}s`);
    boat.style.setProperty('--duration', `${duration}s`);
    boat.style.setProperty('--tilt-range', `${tiltRange}deg`);
    boat.style.setProperty('--tilt-duration', `${tiltDuration}s`);
  });
  

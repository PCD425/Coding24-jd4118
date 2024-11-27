// Select all rotating boats
document.querySelectorAll('.rotating-boat').forEach((boat) => {
    // Random vertical offset (-5vh to +5vh)
    const offset = Math.random() * 10 - 5;
  
    // Random delay (0s to 3s)
    const delay = Math.random() * 3;
  
    // Random animation
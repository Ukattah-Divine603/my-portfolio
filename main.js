// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.remove('active'));
    }
});
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  setTimeout(() => {
    preloader.style.opacity = "0";   // fade out effect
    preloader.style.transition = "opacity 1s ease";

    setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block";
    }, 1000);
  }, 5000); // 15 seconds minimum
});



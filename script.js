const words = ["Software Developer", "Student", "pogi ko"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const typeSpeed = 100;
const eraseSpeed = 60;
const delayBetweenWords = 1200;

// Splash screen logic
window.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('splash-active');
  const splashVideo = document.getElementById('splash-video');
  const unmuteBtn = document.getElementById('unmute-btn');
  const skipBtn = document.getElementById('skip-btn');
  if (splashVideo && unmuteBtn && skipBtn) {
    // Unmute button logic
    unmuteBtn.addEventListener('click', function() {
      splashVideo.muted = false;
      splashVideo.volume = 1.0;
      splashVideo.play();
      unmuteBtn.style.display = 'none';
    });
    // Skip button logic
    skipBtn.addEventListener('click', function() {
      document.getElementById('video-splash').style.display = 'none';
      document.body.classList.remove('splash-active');
      splashVideo.pause();
    });
    splashVideo.onended = function() {
      document.getElementById('video-splash').style.display = 'none';
      document.body.classList.remove('splash-active');
    };
  }
});

function type() {
  const typewriter = document.getElementById('typewriter');
  if (!typewriter) {
    setTimeout(type, 100);
    return;
  }
  const fullWord = words[i];
  if (isDeleting) {
    currentWord = fullWord.substring(0, j - 1);
    j--;
  } else {
    currentWord = fullWord.substring(0, j + 1);
    j++;
  }
  typewriter.textContent = currentWord;

  let timeout = isDeleting ? eraseSpeed : typeSpeed;

  if (!isDeleting && currentWord === fullWord) {
    timeout = delayBetweenWords;
    isDeleting = true;
  } else if (isDeleting && currentWord === '') {
    isDeleting = false;
    i = (i + 1) % words.length;
    timeout = typeSpeed;
  }
  setTimeout(type, timeout);
}

type();

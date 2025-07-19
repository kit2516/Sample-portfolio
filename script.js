const words = ["Software Developer", "Student"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const typeSpeed = 100;
const eraseSpeed = 60;
const delayBetweenWords = 1200;

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

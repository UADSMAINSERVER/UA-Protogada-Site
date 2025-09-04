// Toggle Light/Dark Mode
const modeIcon = document.getElementById('mode-icon');
modeIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  modeIcon.src = document.body.classList.contains('dark-mode')
    ? 'public/icons/penguin.png'
    : 'public/icons/polar.png';
});

// Login / Sign-Up Modal Logic
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const modalClose = document.getElementById('modal-close');
const loginSubmit = document.getElementById('login-submit');
const signupSubmit = document.getElementById('signup-submit');

loginBtn.addEventListener('click', () => loginModal.classList.remove('hidden'));
modalClose.addEventListener('click', () => loginModal.classList.add('hidden'));

loginSubmit.addEventListener('click', () => {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const stored = JSON.parse(localStorage.getItem('uaUsers') || '{}');
  if (stored[user] && stored[user] === pass) {
    alert('Login successful!');
    loginModal.classList.add('hidden');
  } else {
    alert('Error 404: user not found or password mismatch.');
  }
});

signupSubmit.addEventListener('click', () => {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const stored = JSON.parse(localStorage.getItem('uaUsers') || '{}');
  if (stored[user]) {
    alert('User already exists!');
  } else {
    stored[user] = pass;
    localStorage.setItem('uaUsers', JSON.stringify(stored));
    alert('Account created! You can now log in.');
  }
});

// Message Carousel
const carousel = document.getElementById('message-carousel');
const form = document.getElementById('message-form');
let messages = [
  'Agent Ice: All systems go.',
  'Agent Frost: Relay incoming forecast.',
  'Agent Snow: Supplies have arrived.'
];
let idx = 0;

function showMessage() {
  carousel.textContent = messages[idx];
  idx = (idx + 1) % messages.length;
}

setInterval(showMessage, 4000);
showMessage();

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = form.querySelector('input').value.trim();
  if (text) {
    messages.push(text);
    form.reset();
  }
});

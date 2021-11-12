const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

const skillBars = document.querySelectorAll('.skills__bar');
const skillPercentages = document.querySelectorAll('.skills__percentage');

for (let i = 0; i <= skillBars.length-1; i++) {
  skillBars[i].style.width = `${skillPercentages[i].innerText.split('%')[0]}%`;
}

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.skills__full');

readMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('show-more');
  if (readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less';
  } else {
    readMoreBtn.innerText = 'Read More';
  }
});

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOverTxt = document.querySelector('.game-over-txt');

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500);
}

const loop = setInterval(() => {

  const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 127 && pipePosition > 0 && marioPosition < 100 ) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clouds.style.animation = 'none'
    clouds.style.left = `${cloudsPosition}px`;

    gameOverTxt.style.display = 'block';
    
    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump)
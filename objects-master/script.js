/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = 20;
  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
    console.log('ok: ' + this.left);
  };
  this.moveLeft = function () {
    this.left -= this.speed;
    console.log('ok: ' + this.left);
  };
  this.moveDown = function () {
    this.top += this.speed;
    console.log('ok: ' + this.top);
  };
  this.moveUp = function () {
    this.top -= this.speed;
    console.log('ok: ' + this.top);
  }
  this.setSpeed = function (speed) {
    this.speed = speed;
  }
  this.getSpeed = function () {
    return this.speed;
  }
}

var hero = new Hero('ball.jpg', 20, 30, 200);

function start() {
  let left = 20;
  let top = 30;
  let right = window.innerWidth - hero.size - left;
  let bot = window.innerHeight - hero.size - top;

  if (hero.left < right && hero.top <= bot) {
    hero.moveRight();
  }
  else if (hero.left >= right && hero.top < bot) {
    hero.moveDown();
  }
  else if (hero.left > left && hero.top >= bot) {
    hero.moveLeft();
  }

else if (hero.left <= left && hero.top > top) {
  hero.moveUp();
}
document.getElementById('game').innerHTML = hero.getHeroElement();
setTimeout(() => {
  start();
}, 10);
}
hero.setSpeed(10);
start();
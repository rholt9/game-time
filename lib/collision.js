var Paddle = require('./paddle');
var Ball = require('./ball');
var Blockwall = require('./blockwall');
var Game = require('./breakout-game');



function Collision(options) {
  this.context = options.context;
  this.canvas = options.canvas;
  this.paddle = options.paddle;
  this.ball = options.ball;
  this.blockwall = options.blockwall;
};


Collision.prototype.changeBallDY = function () {
  return this.ball.dy =- this.ball.dy;
};

Collision.prototype.changeBallDX = function () {
  return this.ball.dx =- this.ball.dx;
};

Collision.prototype.collisionLeftRight = function(){
  return this.ball.x > this.canvas.width - this.ball.radius || this.ball.x < this.ball.radius;
};

Collision.prototype.collisionBottom = function() {
  return this.ball.y > this.canvas.height - (this.ball.radius + this.paddle.height);
};

Collision.prototype.collisionTop = function(){
  return this.ball.y < this.ball.radius;
};

Collision.prototype.collisionBallPaddle = function() {
  return this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width;
};


Collision.prototype.wallPaddleCollision = function() {
  if(this.collisionLeftRight()) {
    this.changeBallDX();
    console.log('side');
  }

  if(this.collisionTop()) {
    this.changeBallDY();
    console.log('top');
  }
  else if (this.ball.y + this.ball.dy > this.canvas.height-this.ball.radius)
  {

  if(this.collisionBallPaddle()) {
    this.changeBallDY();
    console.log('paddle');
    } else {
      alert("GAME OVER");
      console.log('you lose');
      document.location.reload();
    }
  }
}



Collision.prototype.collisionBlock = function() {
  return   this.ball.x > this.blockwall.x &&   this.ball.x < this.blockwall.x+this.blockwall.width;
  console.log('heyyyyy');
};

Collision.prototype.collisionBlocks = function() {
  return   this.ball.y > this.blockwall.y &&   this.ball.y < this.blockwall.y+this.blockwall.height;
  console.log('hiiiii');
};




module.exports = Collision;

// var Paddle = require('./paddle');
// var Ball = require('./ball');
//
// function Collision(options) {
//   this.context = options.context;
//   this.canvas = options.canvas;
//   this.paddle = Paddle;
//   this.ball = Ball;
// };
//
//
//
// Collision.prototype.ballCollision = function () {
//   if(this.ball.x + this.ball.dx > this.canvas.width-this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
//     this.ball.dx =-this.ball.dx;
//   }
//   if(this.ball.y + this.ball.dy < this.ball.radius) {
//     this.ball.dy =-this.ball.dy;
//   }
//   if (this.ball.y + this.ball.dy > this.canvas.height-this.ball.radius) {
//     alert("GAME OVER");
//     document.location.reload();
//   }
// };
//
//
//
//
// module.exports = Collision;
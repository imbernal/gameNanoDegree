// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
    //this.y +=  dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(ctx) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{
  constructor(x,y,name){
    this.x = x;
    this.y = y;

    this.name = "Isra";
    this.sprite = "images/char-boy.png";
  }

  update(dt){
    // this.x +=dt;
    // this.y += dt;
  }

  render(ctx){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(keyCode){

    if(keyCode == "left") {
      if(this.x - 100 >= 0)
        this.x -= 100;
    }

    if (keyCode == "right") {

      if(this.x+100 <= 400)
        this.x += 100;
    }

    if (keyCode == "down") {

      if(this.y + 100 <= 410)
        this.y +=80;
    }

    if (keyCode == "up") {
      
      if( this.y ==  60 )
        this.y = 300;
      else
        this.y-=80;
    }

  }

}

var player = new Player(100,300,"isra" );

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

allEnemies.push(new Enemy(50,60 , Math.floor(Math.random() * (100 -40) + 40)));
allEnemies.push(new Enemy(80,130, Math.floor(Math.random() * (100 -40) + 40)));



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

module.exports = {
  player:player,allEnemies:allEnemies
};

// Enemies our player must avoid
var Enemy = function(x,y,speed , enemyWith , enemyHeigth) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.with = enemyWith;
    this.height = enemyHeigth;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x > 506){
      this.x -=500;
    }else
      this.x += this.speed*dt;
    //this.y += dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(ctx) {
    ctx.drawImage(Resources.get(this.sprite), this.x-this.with, this.y-this.height);
};

// Now  write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Gem{
  constructor(x,y ,sprite , gemWith , gemHeigth){
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.with  = gemWith;
    this.height = gemHeigth;
  }

  render(ctx){
    ctx.drawImage(Resources.get(this.sprite), this.x - 52, this.y-118);
  }





}

class Player{
  constructor(x,y,name , playerWith , playerHeight){
    this.x = x;
    this.y = y;
    this.score = 0;
    this.with = playerWith;
    this.height = playerHeight;

    this.name = "Isra";
    this.sprite = "images/char-boy.png";
  }

  update(dt){

  }


  render(ctx){
    ctx.drawImage(Resources.get(this.sprite), this.x-this.with, this.y-this.height);
  }

  collision(allEnemies){
      var result = 0;
      allEnemies.forEach(function(enemy){
        result = Math.sqrt( Math.pow((player.x-player.with) - (enemy.x-enemy.with) , 2) + Math.pow((player.y-player.height) - (enemy.y - enemy.height) ,2));

        if(result < 60){
          player.y = 430;
          player.x = 150;
          player.score = 0;
          document.getElementById('score').innerHTML = "Score:0";
        }


      });
    }

      gemCollision(gemies){
        var result = 0;
        gemies.forEach(function(gem,item){
          result = Math.sqrt( Math.pow((player.x-player.with) - (gem.x-gem.with) , 2) + Math.pow((player.y-player.height) - (gem.y - gem.height) ,2));

          if(result < 60){
            player.score +=1;
            document.getElementById("score").innerHTML = "Score:"+player.score;
            gemies.splice(item, 1);
          }

        });
  }

  handleInput(keyCode){

    if(keyCode == "left") {

      if(this.x - 100 >= 50)
        this.x -= 100;
    }

    if (keyCode == "right") {

      if(this.x+100 <= 450)
        this.x += 100;
    }

    if (keyCode == "down") {

      if(this.y + 100 <= 530)
        this.y +=80;
    }

    if (keyCode == "up") {

      if( this.y ==  190 ){
        this.y = 430;
        this.x = 150;
      }
      else
        this.y-=80;
    }



  }

}

var gemies = [];

var imagesGem = ["images/Gem_Green.png" , "images/Gem Orange.png" , "images/Gem Blue.png"];

gemies.push(new Gem((80)*Math.floor((Math.random() * 5)+1),(170)*Math.floor((Math.random() * 3)+1),imagesGem[Math.floor((Math.random() *2)+1)], 52 , 118) );
gemies.push(new Gem((80)*Math.floor((Math.random() * 5)+1),(170)*Math.floor((Math.random() * 3)+1),imagesGem[Math.floor((Math.random() *2)+1)], 52 , 118) );
gemies.push(new Gem((80)*Math.floor((Math.random() * 5)+1),(170)*Math.floor((Math.random() * 3)+1),imagesGem[Math.floor((Math.random() *2)+1)], 52 , 118) );

var player = new Player(150,430,"isra" , 52 , 118);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

allEnemies.push(new Enemy(100,170 , Math.floor(Math.random() * (100 -40) + 40 ), 51 , 115));
allEnemies.push(new Enemy(200,250, Math.floor(Math.random() * (100 -40) + 40), 51 , 115));
allEnemies.push(new Enemy(300,340, Math.floor(Math.random() * (100 -40) + 40), 51 , 115));


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
  player:player,allEnemies:allEnemies , gemies:gemies , gem:Gem
};

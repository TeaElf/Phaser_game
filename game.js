const gameState = {}
const config = {
  width: 1200,
  height: 800,
  backgroundColor: 0x1a54b2,//0xd17a10, //0x1a54b2,
  scene: {
  	preload,
    create,
    update
	}
}

function preload () {
  this.load.image('dino', 'DinoSprites_mort.gif');
}

function create () {
  gameState.dino = this.add.sprite(40, 70, 'dino');
  
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update () {
    if (gameState.cursors.left.isDown) {
      gameState.dino.x -= 3;
    }
    if (gameState.cursors.right.isDown) {
        gameState.dino.x += 3;
      }
    if (gameState.cursors.up.isDown) {
        gameState.dino.y -= 3;
    }
    if (gameState.cursors.down.isDown) {
        gameState.dino.y += 3;
    }
  }
const game = new Phaser.Game(config)
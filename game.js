const gameState = {}
const config = {
  width: 1200,
  height: 800,
  backgroundColor: 0x1a54b2,//0xd17a10, //0x1a54b2,
  scene: {
  	preload,
  	create
	}
}

function preload () {
  this.load.image('dino', 'DinoSprites_mort.gif');
}

function create () {
  gameState.dino = this.add.sprite(40, 70, 'dino');
  
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

const game = new Phaser.Game(config)
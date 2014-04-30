var load_state = {

	preload: function() {
		this.game.stage.backgroundColor = '#71c5cf';
		this.game.load.image('bird', '/FlappyRes/assets/bird.png');
		this.game.load.image('pipe', '/FlappyRes/assets/pipe.png');
		this.game.load.audio('jump_sound', '/FlappyRes/assets/jump.wav');
	},

	create: function() {
		this.game.state.start('menu');
	}

};
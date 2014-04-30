var play_state = {

		create: function() {

		// Call jump when spacebar is hit
		var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		space_key.onDown.add(this.jump, this);
		// Display the bird on the screen
		this.bird = this.game.add.sprite(100, 245, 'bird');

		// Add gravity onto the bird to make it fall
		this.bird.body.gravity.y = 1000;
		this.bird.anchor.setTo(-0.2, 0.5); 

		this.pipes = game.add.group();
		this.pipes.createMultiple(12, 'pipe');

		this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);

		score = 0;  
		var style = { font: "30px Arial", fill: "#ffffff" };  
		this.label_score = this.game.add.text(20, 20, "0", style); 

		this.jump_sound = this.game.add.audio('jump_sound');

	},

	update: function() {

		if(this.bird.angle < 20)
			this.bird.angle +=1;



		if (this.bird.inWorld == false){
			this.restart_game();
		}

		this.game.physics.overlap(this.bird, this.pipes, this.hit_pipe, null, this);

	},

	jump: function() {

		if (this.bird.alive == false){
			return;
		}

		this.jump_sound.play();
		//Add a vertical velocity to the bird
		this.bird.body.velocity.y = -350

		var animation =  this.game.add.tween(this.bird);
		animation.to({angle: -20}, 100);
		animation.start();
	},

	restart_game: function() {
		// Restart the timer when game restarts
		this.game.time.events.remove(this.timer);
		// Select the main state which restarts the game
		this.game.state.start('menu');
	},

	add_one_pipe: function(x, y) {

		// Get the first dead pipe in our group
		var pipe = this.pipes.getFirstDead();	

		// Set the position of our pipe
		pipe.reset(x, y);

		// Add velocity to our pipe to make it move left
		pipe.body.velocity.x = -200;

		// Kill the pipe when its not visible
		pipe.outOfBoundsKill = true;

	},

	add_row_of_pipes: function() {

		var hole = Math.floor(Math.random()*5)+1;
		
		for(var i = 0; i < 8; i++){
			if(i != hole && i != hole + 1)
				this.add_one_pipe(400, i*60+10);
		}

		score+= 1;
		// Update the label every time a set of pipes is made
		this.label_score.content = score;
	},

	hit_pipe: function() {

		if (this.bird.alive == false){
			return;
		}

		this.bird.alive = false;

		this.game.time.events.remove(this.timer);

		this.pipes.forEachAlive(function(p){p.body.velocity.x = 0;}, this);
	},

};
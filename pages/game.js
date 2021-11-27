  const config = {
    width: 800,
    height: 600,
    backgroundColor: '0xdda0dd',
    scene: {
      preload,
      create,
      update
    }
  }
  
  var gameState = {}

  var randomX = rando(1, 700);
  var randomY = rando(1, 500);
  var randRad = rando(10, 50);

  var lastCalledTime;
  var fps;

  var score = 0;
  var scoreText;
  
  function preload() {
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
  }
  
  function create() {
    gameState.target = this.add.circle(randomX, randomY, randRad, 0x6666ff);

    gameState.codey = this.add.sprite(rando(1, 700), rando(1, 500), 'codey');
    gameState.codey.setDepth(100);

    gameState.cursors = this.input.keyboard.createCursorKeys();

    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    fpsCounter = this.add.text(54, 45, 'FPS:', { fontSize: '32px', fill: '#000'});
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
  }
  
  function update() {
    if (gameState.cursors.down.isDown) {
      gameState.codey.y += 5;
    } else if (gameState.cursors.up.isDown) {
      gameState.codey.y -= 5;
    } else if (gameState.cursors.left.isDown) {
      gameState.codey.x -= 5;
    } else if (gameState.cursors.right.isDown) {
      gameState.codey.x += 5;
    }

    if (keySpace.isDown && gameState.codey.getBounds().contains(gameState.target.x, gameState.target.y)) {
        removeElement();
        newRandCircle();
    }

    requestAnimFrame();

  }

  function newRandCircle() {
      gameState.target.x = rando(1, 700);
      gameState.target.y = rando(1, 600);
      gameState.target.setRadius(rando(10, 50));
      gameState.target.setVisible(true);
  }

  function removeElement() {
      gameState.target.setActive(false).setVisible(false);

      score += 1;
      scoreText.setText('score: ' + score);
  }

  function requestAnimFrame() {
    if(!lastCalledTime) {
        lastCalledTime = Date.now();
        fps = 0;
        return;
    }
      delta = (Date.now() - lastCalledTime)/1000;
      lastCalledTime = Date.now();
      fps = Math.round(1/delta);

      fpsCounter.setText('FPS: ' + fps);
    }

    function setScore(count) {
        score = count;
        scoreText.setText('score: ' + score);

        return "Set the score to: " + score;
    }


  var game = new Phaser.Game(config);
  
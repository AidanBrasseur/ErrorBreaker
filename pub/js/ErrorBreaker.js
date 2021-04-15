"use strict";
(function (global, document, $) {
    const a = [
        [0, 1, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1]]
    const b = [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 0]]
    const c = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1]]
    const d = [
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 0]]
    const e = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1]]
    const f = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0]]
    const g = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]]
    const h = [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1]]
    const i = [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1]]
    const j = [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0]]
    const k = [
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 1]]
    const l = [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1]]
    const m = [
        [1, 0, 1],
        [1, 2, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1]]
    const n = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1]]
    const o = [
        [0, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0]]
    const p = [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0]]
    const q = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1]]
    const r = [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1]]
    const s = [
        [1, 1, 1],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]]
    const t = [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]]
    const u = [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]]
    const v = [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0]]
    const w = [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 2, 1],
        [1, 0, 1]]
    const x = [
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1]]
    const y = [
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]]
    const z = [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1]]
    const one = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]]
    const two = [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]]
    const three = [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 1],
        [0, 0, 1],
        [1, 1, 1]]
    const four = [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]]
    const five = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]]
    const six = [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]]
    const seven = [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]]
    const eight = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]]
    const nine = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]]
    const zero = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]]

    const levelMap = new Map([
        ['a', a],
        ['b', b],
        ['c', c],
        ['d', d],
        ['e', e],
        ['f', f],
        ['g', g],
        ['h', h],
        ['i', i],
        ['j', j],
        ['k', k],
        ['l', l],
        ['m', m],
        ['n', n],
        ['o', o],
        ['p', p],
        ['q', q],
        ['r', r],
        ['s', s],
        ['t', t],
        ['u', u],
        ['v', v],
        ['w', w],
        ['x', x],
        ['y', y],
        ['1', one],
        ['2', two],
        ['3', three],
        ['4', four],
        ['5', five],
        ['6', six],
        ['7', seven],
        ['8', eight],
        ['9', nine],
        ['0', zero]
    ]);


    function drawMessage() {
        let messageContainer = document.createElement('div')

        messageContainer.style.transition = "opacity 1s"
        messageContainer.style.marginBottom = '20px'
        messageContainer.style.fontWeight = "900";
        messageContainer.style.fontSize = "xx-large"
        messageContainer.style.textAlign = 'center'
        messageContainer.style.fontFamily = 'Segoe UI'
        messageContainer.style.justifyContent = 'center'
        messageContainer.style.color = this.messageColour
        let messageElement = document.createTextNode(this.message);

        messageContainer.appendChild(messageElement)
        this.parentDiv.appendChild(messageContainer)
        this.messageContainer = messageContainer
    }
    function drawInitialLoading() {
        let loadingContainer = document.createElement('div')

        loadingContainer.style.width = '80%'
        loadingContainer.style.position = 'relative'
        loadingContainer.style.minWidth = '550px'
        loadingContainer.style.transition = "opacity 1s"
        loadingContainer.style.height = '10%'
        loadingContainer.style.marginBottom = '25px'
        loadingContainer.style.verticalAlign = 'center'
        let progressIndicator = document.createElement('div')
        let loadingBricks = document.createElement("table");

        loadingBricks.style.borderCollapse = 'collapse'
        loadingBricks.style.width = '95%';
        loadingBricks.style.height = '65%';
        loadingBricks.style.margin = 0;
        loadingBricks.style.position = `absolute`;
        loadingBricks.style.top = `50%`;
        loadingBricks.style.zIndex = 2;
        loadingBricks.style.transform = `translateY(-50%)`;
        loadingBricks.style.transform = `translateY(-50%)`;
        let loadingBricksRow = loadingBricks.insertRow()
        for (let i = 0; i < 5; i++) {
            let brick = loadingBricksRow.insertCell()
            brick.style.padding = 0;
            brick.style.margin = 0;
            brick.style.border = '5px solid black'
        }
        loadingContainer.appendChild(loadingBricks)
        progressIndicator.style = `font-family: Helvetica ; position: relative; border-radius: 50%; height: 100%; width: 10%; background-color: black; float: right; z-index: 3; display: flex; justify-content: center; align-items: center`
        let progressText = document.createElement('div')
        progressText.style.color = 'white'
        progressText.innerText = '0%'
        progressIndicator.appendChild(progressText)
        this.progressText = progressText
        loadingContainer.appendChild(progressIndicator)
        this.progressIndicator = progressIndicator
        let progress = document.createElement('div')
        progress.style.margin = 0;
        progress.style.position = `absolute`;
        progress.style.top = `50%`;
        progress.style.transform = `translateY(-50%)`;
        progress.style.transform = `translateY(-50%)`;
        progress.style.width = `${this.progress}%`
        progress.style.height = '65%'
        progress.style.transition = `width 600ms linear;`
        progress.style.backgroundColor = this.progressColour
        loadingContainer.appendChild(progress)
        this.progressDiv = progress
        this.parentDiv.appendChild(loadingContainer)
        this.loadingContainer = loadingContainer
    }
    function drawGameSpace() {
        let gameSpace = document.createElement('div')
        gameSpace.style.transition = "opacity 1s"
        gameSpace.style.transition = "background 1s ease-out"
        gameSpace.style.width = '80%'
        gameSpace.style.borderRadius = '5px'
        gameSpace.style.minWidth = '550px'
        gameSpace.style.height = '100%'
        this.parentDiv.appendChild(gameSpace)
        this.div = gameSpace
    }
    function stopGame() {
        if (this.restarting) return;
        this.balls.forEach(ball => {
            if (ball.ballElement) ball.ballElement[0].remove();

        });
        this.currPowerups.forEach(powerup => {
            powerup.element[0].remove();
        })
        this.currPowerups = []
        this.restarting = true;
        this.speedFactor = 1 / 2
        this.balls = [{
            x: 0,
            y: 0,
            height: 0,
            width: 0,
            timeOld: null,
            timeElapsed: null,
            step: 1,
            dx: 1,
            dy: 1,
            ballElement: null,
        }]
        cancelAnimationFrame(this.animationId)
        this.animationId = undefined
        this.restarting = false;
    }
    function resetGame() {

        $(this.levelTable)[0].remove()
        drawInitialLevel.call(this)

        drawInitialBall.call(this)
    }

    function startDrawing() {
        this.animationId = requestAnimationFrame((timestamp) => {
            draw.call(this, timestamp)
        })
    }
    function animateDeath() {
        this.score = 0;
        this.gameOverSound.play()
        let gameOverElement = document.createElement('div')
        gameOverElement.style.position = 'absolute'
        gameOverElement.style.left = 0
        gameOverElement.style.top = 0
        gameOverElement.style.right = 0
        gameOverElement.style.bottom = 0
        gameOverElement.style.marginRight = 'auto'
        gameOverElement.style.marginLeft = 'auto'
        gameOverElement.style.marginTop = 'auto'
        gameOverElement.style.marginBottom = 'auto'
        gameOverElement.style.width = '50%'
        gameOverElement.style.height = '50%'
        gameOverElement.style.zIndex = 1
        gameOverElement.style.opacity = 1
        gameOverElement.style.backgroundColor = 'Crimson'
        gameOverElement.style.borderRadius = '5px'
        gameOverElement.style.transition = "opacity 2s"
        gameOverElement.style.display = 'flex'
        gameOverElement.style.fontFamily = "'Black Ops One', cursive";
        gameOverElement.style.justifyContent = 'center'
        let gameOverDiv = document.createElement('div')
        gameOverDiv.style = "display: flex; flex-direction: column; align-items: center; width: 100%; height: 50%; justify-content: space-between;  align-self: center;"
        let gameOverText = document.createElement('div')
        gameOverText.style = "color: white; font-size: x-large"
        gameOverText.innerText = "Game Over"
        gameOverDiv.appendChild(gameOverText)
        let gameOverButton = document.createElement('BUTTON')
        gameOverButton.style = "border-radius: 5px; font-family: 'Segoe UI'; font-weight: bold; width: 65%; height: 20%"
        gameOverButton.innerText = "Play Again?"
        gameOverDiv.appendChild(gameOverButton)
        gameOverElement.appendChild(gameOverDiv)

        this.div.appendChild(gameOverElement)
        $(gameOverButton).click(() => {

            $(gameOverElement)[0].remove()
            resetGame.call(this);
            this.balls[0].ballElement[0].style.opacity = 1
            startDrawing.call(this)
        });
    }
    function animateWin() {
        this.score = 0;
        this.winSound.play()
        let winElement = document.createElement('div')
        winElement.style.position = 'absolute'

        winElement.style.left = 0
        winElement.style.top = 0
        winElement.style.right = 0
        winElement.style.bottom = 0
        winElement.style.marginRight = 'auto'
        winElement.style.marginLeft = 'auto'
        winElement.style.marginTop = 'auto'
        winElement.style.marginBottom = 'auto'
        winElement.style.width = '50%'
        winElement.style.height = '50%'
        winElement.style.zIndex = 1
        winElement.style.opacity = 1
        winElement.style.backgroundColor = 'DarkOliveGreen'
        winElement.style.borderRadius = '5px'
        winElement.style.transition = "opacity 2s"
        winElement.style.display = 'flex'
        winElement.style.fontFamily = "'Black Ops One', cursive";
        winElement.style.justifyContent = 'center'
        let winDiv = document.createElement('div')
        winDiv.style = "display: flex; flex-direction: column; align-items: center; width: 100%; height: 50%; justify-content: space-between;  align-self: center;"
        let winText = document.createElement('div')
        winText.style = "color: white; font-size: x-large"
        winText.innerText = "You Win!"
        winDiv.appendChild(winText)
        let winButton = document.createElement('BUTTON')
        winButton.style = "border-radius: 5px; font-family: 'Segoe UI'; font-weight: bold; width: 65%; height: 20%"
        winButton.innerText = "Play Again?"
        winDiv.appendChild(winButton)
        winElement.appendChild(winDiv)

        this.div.appendChild(winElement)
        $(winButton).click(() => {

            $(winElement)[0].remove()
            resetGame.call(this)
            this.balls[0].ballElement[0].style.opacity = 1
            startDrawing.call(this)
        });
    }
    function animateOpening() {

        this.div.style.border = `5px solid ${this.ballColour}`;

        this.div.style.backgroundColor = this.backgroundColour

        this.paddleElement[0].style.opacity = 1
        this.balls[0].ballElement[0].style.opacity = 1
        setTimeout(() => { startDrawing.call(this) }, 1000);
    }


    function draw(timestamp) {

        drawBall.call(this, timestamp)
        drawPowerups.call(this, timestamp)
        if (this.animationId) {
            this.animationId = requestAnimationFrame((timestamp) => draw.call(this, timestamp))
        }

    }
    function drawPowerups(timestamp) {
        let clientHeight = this.div.clientHeight - $(this.levelTable)[0].clientHeight
        this.currPowerups.forEach(powerup => {
            if (!powerup.timeOld) powerup.timeOld = timestamp;
            powerup.timeElapsed = timestamp - powerup.timeOld;
            powerup.timeOld = timestamp;

            powerup.y += (1 * powerup.timeElapsed * 1 / 3 * (clientHeight / (clientHeight + 400)))//an attempt to scale speed to different screen sizes
            powerup.element[0].style.transform = `translate(${0}px, ${powerup.y}px)`;
        });
        checkPowerUps.call(this);
    }
    function checkPowerUps() {

        this.currPowerups.forEach(powerup => {
            let powerupRect = powerup.element[0].getBoundingClientRect();
            let paddleRect = this.paddleElement[0].getBoundingClientRect()
            if ((powerupRect.right > paddleRect.left && powerupRect.left < paddleRect.right && powerupRect.bottom > paddleRect.top && powerupRect.top < paddleRect.bottom)) {
                this.powerupSound.play()
                if (powerup.effect === 'multi') {
                    let ball = document.createElement('div')

                    ball.style.position = 'absolute'
                    ball.style.borderRadius = '50%'
                    ball.style.width = '5%'
                    ball.style.height = 0
                    ball.style.paddingBottom = '5%'
                    ball.style.backgroundColor = this.ballColour
                    ball.style.opacity = 0;
                    ball.style.transform = `translate(${this.balls[0].x}px, ${this.balls[0].y}px)`;
                    let ball2 = document.createElement('div')

                    ball2.style.position = 'absolute'
                    ball2.style.borderRadius = '50%'
                    ball2.style.width = '5%'
                    ball2.style.height = 0
                    ball2.style.paddingBottom = '5%'
                    ball2.style.backgroundColor = this.ballColour
                    ball2.style.opacity = 0;
                    ball2.style.transform = `translate(${this.balls[0].x}px, ${this.balls[0].y}px)`;

                    this.div.appendChild(ball)
                    this.div.appendChild(ball2)
                    let ballElement1 = $(ball)
                    let ballElement2 = $(ball2)

                    let activeBall1 = {
                        x: this.balls[0].x,
                        y: this.balls[0].y,
                        height: this.balls[0].height,
                        width: this.balls[0].width,

                        timeOld: null,
                        timeElapsed: null,
                        step: 1,
                        dx: -this.balls[0].dx,
                        dy: this.balls[0].dy,
                        ballElement: ballElement1
                    }
                    let activeBall2 = {
                        x: this.balls[0].x,
                        y: this.balls[0].y,
                        height: this.balls[0].height,
                        width: this.balls[0].width,

                        timeOld: null,
                        timeElapsed: null,
                        step: 1,
                        dx: this.balls[0].dx,
                        dy: -this.balls[0].dy,
                        ballElement: ballElement2
                    }
                    activeBall1.ballElement[0].style.opacity = 1
                    activeBall2.ballElement[0].style.opacity = 1
                    this.balls.push(activeBall1)
                    this.balls.push(activeBall2)

                    const index = this.currPowerups.indexOf(powerup);
                    if (index > -1) {
                        this.currPowerups.splice(index, 1);
                    }
                    powerup.element[0].remove()
                    this.currPowerups.filter(powerup => powerup != powerup)
                }
                else if (powerup.effect == 'increase') {
                    this.paddleElement[0].style.width = '25%'
                    setTimeout(() => this.paddleElement[0].style.width = '15%', 7000);
                    const index = this.currPowerups.indexOf(powerup);
                    if (index > -1) {
                        this.currPowerups.splice(index, 1);
                    }
                    powerup.element[0].remove()
                    this.currPowerups.filter(powerup => powerup != powerup)

                }
                else if (powerup.effect == 'speed') {
                    this.speedFactor = 1 / 1.5
                    setTimeout(() => this.speedFactor = 1 / 2, 7000);
                    const index = this.currPowerups.indexOf(powerup);
                    if (index > -1) {
                        this.currPowerups.splice(index, 1);
                    }
                    powerup.element[0].remove()
                    this.currPowerups.filter(powerup => powerup != powerup)
                }
            }

            if (powerupRect.top >= paddleRect.top + 50 && !this.restarting) {
                const index = this.currPowerups.indexOf(powerup);
                if (index > -1) {
                    this.currPowerups.splice(index, 1);
                }
                powerup.element[0].remove()
            }
        });
    }

    function checkBallCollisions() {
        this.balls.forEach(ball => {
            let ballRect = ball.ballElement[0].getBoundingClientRect();
            for (let i = 0; i < this.bricks.length; i++) {
                for (let j = 0; j < this.bricks[i].length; j++) {
                    for (let k = 0; k < this.bricks[i][j].length; k++) {
                        let brick = this.bricks[i][j][k].element

                        let rect = brick.getBoundingClientRect();


                        if (this.bricks[i][j][k].avail === 1 && (ballRect.right > rect.left && ballRect.left < rect.right && ballRect.bottom > rect.top && ballRect.top < rect.bottom)
                        ) {
                            if (this.playCollision1) {
                                this.collisionSound.play()
                                this.playCollision1 = false
                            }
                            else {
                                this.secondaryCollisionSound.play()
                                this.playCollision1 = true
                            }
                            this.bricks[i][j][k].avail = 0;
                            this.score += 1;

                            let leftDiff = ballRect.right - rect.left
                            let rightDiff = rect.right - ballRect.left
                            let topDiff = ballRect.bottom - rect.top
                            let bottomDiff = rect.bottom - ballRect.top
                            let minDiff = Math.min(leftDiff, rightDiff, topDiff, bottomDiff)
                            if (minDiff === leftDiff) {
                                ball.dx = -ball.step;
                            }
                            if (minDiff === rightDiff) {
                                ball.dx = ball.step;
                            }
                            if (minDiff === topDiff) {
                                ball.dy = -ball.step;
                            }
                            if (minDiff === bottomDiff) {
                                ball.dy = ball.step;
                            }

                            brick.style.backgroundColor = 'transparent';


                            let randomNum = Math.floor(Math.random() * 100);
                            console.log(randomNum)
                            let icon = ""
                            let effect = ""
                            if (randomNum <= 7) {
                                icon = "⚇"
                                effect = "multi"
                            }
                            if (randomNum <= 15 && randomNum > 7) {
                                icon = "⚎"
                                effect = "increase"
                            }
                            if (randomNum <= 23 && randomNum > 14) {
                                icon = "↯"
                                effect = 'speed'

                            }
                            if (randomNum <= 23) {
                                let powerupElement = document.createElement('div')
                                powerupElement.style.borderRadius = '50%'
                                powerupElement.style.width = '5%'
                                powerupElement.style.height = 0
                                powerupElement.style.paddingBottom = '5%'
                                powerupElement.style.display = 'flex'
                                powerupElement.style.justifyContent = 'center'

                                powerupElement.style.alignContent = 'center'
                                powerupElement.style.alignItems = 'center'

                                powerupElement.style.position = 'absolute'
                                powerupElement.style.transform = `translate(${0}px, ${ball.y}px)`;

                                powerupElement.style.left = `${ball.x}px`;
                                this.div.appendChild(powerupElement)
                                let innerText = document.createElement('div');
                                innerText.width = '100%'
                                innerText.display = 'inline-block'
                                innerText.height = '100%'
                                innerText.style.position = 'absolute'

                                innerText.innerText = icon
                                innerText.style.textAlign = "center"
                                innerText.style.color = this.powerupColour
                                innerText.style.fontSize = '4vw'
                                powerupElement.appendChild(innerText)

                                let keyframeRotate = [
                                    {
                                        transform: "rotate(0deg)",
                                        offset: 0
                                    },
                                    {
                                        transform: "rotate(359deg)",
                                        offset: 1

                                    },
                                ]
                                $(innerText)[0].animate(keyframeRotate, {
                                    // timing options
                                    duration: 2000,
                                    iterations: Infinity
                                })
                                let powerup = {
                                    element: $(powerupElement),
                                    y: ball.y,
                                    timeOld: null,
                                    timeElapsed: null,
                                    effect: effect
                                }
                                this.currPowerups.push(powerup)
                            }
                            if (this.score == this.levelText.length * 5 * 3) {
                                stopGame.call(this)
                                animateWin.call(this);
                            }

                        }
                    }
                }
            }
            let paddleRect = this.paddleElement[0].getBoundingClientRect()
            if ((ballRect.right > paddleRect.left && ballRect.left < paddleRect.right && ballRect.bottom > paddleRect.top && ballRect.top < paddleRect.bottom)) {

                let leftDiff = ballRect.right - paddleRect.left
                let rightDiff = paddleRect.right - ballRect.left
                let topDiff = ballRect.bottom - paddleRect.top
                let bottomDiff = paddleRect.bottom - ballRect.top
                let minDiff = Math.min(leftDiff, rightDiff, topDiff, bottomDiff)
                if (minDiff === leftDiff) {
                    ball.dx = -ball.step;
                }
                if (minDiff === rightDiff) {
                    ball.dx = ball.step;
                }
                if (minDiff === topDiff) {
                    ball.dy = -ball.step;
                }
                if (minDiff === bottomDiff) {
                    ball.dy = ball.step;
                }
                if (this.playCollision1) {
                    this.collisionSound.play()
                    this.playCollision1 = false
                }
                else {
                    this.secondaryCollisionSound.play()
                    this.playCollision1 = true
                }


            }

            let clientWidth = this.div.clientWidth
            let clientHeight = this.div.clientHeight - $(this.levelTable)[0].clientHeight
            let hitSide = false
            if (ball.x + ball.width >= clientWidth) {
                ball.dx = -ball.step;
                hitSide = true
            }
            if (ball.x <= 0) {
                ball.dx = ball.step;
                hitSide = true
            }
            if (ball.y <= -$(this.levelTable)[0].clientHeight) {
                ball.dy = ball.step;
                hitSide = true
            }
            if (hitSide) {
                if (this.playCollision1) {
                    this.collisionSound.play()
                    this.playCollision1 = false
                }
                else {
                    this.secondaryCollisionSound.play()
                    this.playCollision1 = true
                }
            }
            if (ball.y + ball.height >= clientHeight && !this.restarting) {


                const index = this.balls.indexOf(ball);
                if (index > -1) {
                    this.balls.splice(index, 1);
                }
                ball.ballElement[0].remove();

            }

        });
        if (this.balls.length == 0) {
            stopGame.call(this);
            animateDeath.call(this);
        }

    }


    function drawBall(timestamp) {

        let clientWidth = this.div.clientWidth
        let clientHeight = this.div.clientHeight - $(this.levelTable)[0].clientHeight
        this.balls.forEach(ball => {
            if (!ball.timeOld) ball.timeOld = timestamp;
            ball.timeElapsed = timestamp - ball.timeOld;
            ball.timeOld = timestamp;
            ball.x += (ball.dx * ball.timeElapsed * this.speedFactor * (clientWidth / (clientWidth + 400))) //an attempt to scale speed to different screen sizes
            ball.y += (ball.dy * ball.timeElapsed * this.speedFactor * (clientHeight / (clientHeight + 400)))//an attempt to scale speed to different screen sizes
            ball.ballElement[0].style.transform = `translate(${ball.x}px, ${ball.y}px)`;
        });
        checkBallCollisions.call(this);

    }

    function drawInitialBall() {
        let ball = document.createElement('div')
        ball.className = 'ball'
        ball.style.width = '5%'
        ball.style.height = 0
        ball.style.paddingBottom = '5%'
        ball.style.position = 'absolute'
        ball.style.borderRadius = '50%'
        ball.style.backgroundColor = this.ballColour
        ball.style.opacity = 0;
        ball.style.transition = "opacity 1s"
        this.div.appendChild(ball)
        this.balls[0].ballElement = $(ball)
        this.balls[0].width = this.balls[0].ballElement[0].clientWidth
        this.balls[0].height = this.balls[0].ballElement[0].clientHeight
    }


    function drawInitialPaddle() {
        let paddle = document.createElement('div')
        paddle.style.height = '5%'
        paddle.style.width = '15%'
        paddle.style.bottom = '7.5%'
        paddle.style.position = 'absolute'
        paddle.style.backgroundColor = this.primaryColour
        paddle.style.opacity = 0;
        paddle.style.transition = "opacity 1s"
        this.div.appendChild(paddle)
        this.paddleElement = $(paddle)
        $(document).mousemove((e) => {
            if (this.paddle != null) {
                drawPaddle.call(this, e);
            }
        });
    }

    function drawPaddle(e) {
        if (e === undefined) {
            return
        }
        let offset = $(this.div).offset()


        let divPos = {
            left: e.pageX - offset.left,
            top: e.pageY - offset.top
        };
        if (divPos.left < 0) {
            divPos.left = 0
        }
        let paddleWidth = this.paddleElement[0].clientWidth
        let clientWidth = this.div.clientWidth


        if (divPos.left > clientWidth - paddleWidth) {
            divPos.left = clientWidth - paddleWidth
        }
        this.paddle.x = divPos.x;
        if (this.paddle.width == 0) {
            this.paddle.width = paddleWidth
        }
        this.paddleElement[0].style.transform = `translateX(${divPos.left}px)`


    }
    function drawStartButton() {
        let startButtonContainer = document.createElement("div")
        startButtonContainer.style.flexDirection = 'row'
        startButtonContainer.style.display = 'flex'
        startButtonContainer.style.position = 'relative'
        startButtonContainer.style.justifyContent = 'center'
        startButtonContainer.style.transition = "opacity 0.3s"
        startButtonContainer.style.marginTop = '10px'
        startButtonContainer.style.alignItems = 'center'
        startButtonContainer.style.cursor = 'pointer'
        let startButton = document.createElement("div")
        startButton.style = `font-family: Helvetica ; margin-left: 5%; margin-right: 10px; position: relative; border-radius: 50%; width: 50px; height: 50px; background-color: black; display: 'flex'; float: left; z-index: 3; justify-content: center; align-items: center`
        startButton.innerHTML = `<div style='color: white; margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);'>►</div>`
        startButtonContainer.appendChild(startButton)
        let startText = document.createElement("div")
        startText.style.display = 'flex'
        startText.style.alignItems = 'center'
        startText.innerHTML = `<div style='font-family: Helvetica ;' >Click Here to Start Game</div>`
        startButtonContainer.appendChild(startText)
        this.div.appendChild(startButtonContainer)
        this.startButtonContainer = startButtonContainer
        let keyframePulse = [
            {
                transform: "scale(0.95)",
                boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
                offset: 0
            },
            {
                transform: "scale(1)",
                boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)",
                offset: 0.7
            },
            {
                transform: "scale(0.95)",
                boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
                offset: 1

            },
        ]

        $(startButton)[0].animate(keyframePulse, {
            // timing options
            duration: 2000,
            iterations: Infinity
        })
        $(startButtonContainer).click(() => {
            $(this.levelTable)[0].style.transform = `scale(1)`
            $(this.levelTable)[0].style.cursor = 'default'
            $(this.levelTable).unbind('mouseenter mouseleave');
            $(this.levelTable).unbind('click');
            startButtonContainer.style.opacity = 0;
            setTimeout(() => {
                startButtonContainer.remove();
                animateOpening.call(this);
            }, 400);

        });

    }


    function drawInitialLevel() {
        let levelDiv = document.createElement("table");
        levelDiv.style.width = '100%';
        levelDiv.style.height = '40%';
        let levelDivRow = levelDiv.insertRow()
        let brickWidth = 100 / this.levelText.length / 3
        let brickHeight = 100 / 5
        for (let i = 0; i < this.levelText.length; i++) {
            let currLetter = levelMap.get(this.levelText[i])
            let letterTable = document.createElement("table")
            letterTable.style.width = '100%'
            letterTable.style.height = '100%'
            let letterArr = []
            for (let j = 0; j < 5; j++) {
                let row = letterTable.insertRow()
                letterArr[j] = []
                for (let k = 0; k < 3; k++) {
                    let brick = row.insertCell()
                    letterArr[j].push({
                        avail: 1,
                        brickWidth: brickWidth,
                        brickHeight: brickHeight,
                        element: brick,
                    });
                    brick.style.width = `${brickWidth}%`;
                    brick.style.height = `${brickHeight}%`;
                    if (currLetter[j][k] > 0) {
                        brick.style.backgroundColor = this.primaryColour
                    }
                    else {
                        brick.style.backgroundColor = this.secondaryColour;
                    }
                }
            }
            this.bricks.push(letterArr)

            let letterCell = levelDivRow.insertCell()
            letterCell.appendChild(letterTable)
        }


        (this.div).appendChild(levelDiv)
        this.levelTable = levelDiv
        if (this.initialClick) {
            this.initialClick = false;
            $(levelDiv)[0].style.transition = 'all .2s ease-in-out;'
            $(levelDiv).hover(function () {
                $(levelDiv)[0].style.transform = `scale(1.05)`
                $(levelDiv)[0].style.cursor = `pointer`
            }, function () {
                $(levelDiv)[0].style.transform = `scale(1)`
            })
            $(levelDiv).click(() => {
                $(levelDiv)[0].style.transform = `scale(1)`
                $(levelDiv)[0].style.cursor = 'default'
                $(levelDiv).unbind('mouseenter mouseleave');
                $(levelDiv).unbind('click');
                $(this.startButtonContainer)[0].style.opacity = 0;
                setTimeout(() => {
                    $(this.startButtonContainer)[0].remove();
                    animateOpening.call(this);
                }, 400);
            });
        }
        if (this.slam) {
            let keyframeShake = [
                {
                    marginTop: 0,
                    marginLeft: 0,
                    offset: 0
                },
                {
                    marginTop: '-5px',
                    marginLeft: 0,
                    offset: 0.1
                },
                {
                    marginTop: 0,
                    marginLeft: '-5px',
                    offset: 0.2
                },
                {
                    marginTop: '5px',
                    marginLeft: 0,
                    offset: 0.3
                },
                {
                    marginTop: 0,
                    marginLeft: '5px',
                    offset: 0.4
                },
                {
                    marginTop: '-2px',
                    marginLeft: 0,
                    offset: 0.5
                },
                {
                    marginTop: 0,
                    marginLeft: '-2px',
                    offset: 0.6
                },
                {
                    marginTop: '2px',
                    marginLeft: 0,
                    offset: 0.7
                },
                {
                    marginTop: 0,
                    marginLeft: '2px',
                    offset: 0.8
                },
                {
                    marginTop: '1px',
                    marginLeft: 0,
                    offset: 0.9
                },
                {
                    marginTop: 0,
                    marginLeft: 0,
                    offset: 1
                },
            ]
            this.div.animate(keyframeShake, {
                // timing options

                duration: 200,
                iterations: 1,
                delay: 500,
            })

            let keyframeSlam = [
                {
                    transform: "scale(10, 10)",
                    offset: 0
                },
                {
                    opacity: 0,
                    offset: 0.4

                },
                {
                    transform: "scale(1,1)",
                    offset: 1
                },
            ]

            $(levelDiv)[0].animate(keyframeSlam, {
                // timing options
                easing: 'ease-in',
                duration: 500,
                iterations: 1
            })
            this.slam = false;
        }
    }
    // obj = {
    //     levelText,
    //     message,
    //     div,
    //     primaryColour,
    //     secondaryColour,
    //     backgroundColour,
    //     ballColour,
    //     messageColour,
    //     loading,
    //     progressColour,
    //     onClose,
    //     powerupColour,
    //     collisionSound: ,
    //     secondaryCollisionSound: ,
    //     gameOverSound:,
    //     winSound:,
    //     slam:, 
    // } 
    class ErrorBreaker {
        constructor(obj) {
            this.levelText = obj.levelText.toString().toLowerCase();
            this.message = obj.message;
            if (obj.collisionSound) {
                this.collisionSound = new Audio(obj.collisionSound)
            }
            else {
                this.collisionSound = new Audio('./assets/audio/collision.mp3')
            }
            this.playCollision1 = true
            if (obj.secondaryCollisionSound) {
                this.secondaryCollisionSound = new Audio(obj.secondaryCollisionSound)
            }
            else {
                this.secondaryCollisionSound = new Audio('./assets/audio/secondaryCollision.mp3')
            }

            if (obj.gameOverSound) {
                this.gameOverSound = new Audio(obj.gameOverSound)
            }
            else {
                this.gameOverSound = new Audio("./assets/audio/gameOver.mp3")
            }

            if (obj.winSound) {
                this.winSound = new Audio(obj.winSound)
            }
            else {
                this.winSound = new Audio("./assets/audio/win.mp3")
            }
            if (obj.powerupSound) {
                this.powerupSound = new Audio(obj.powerupSound)
            }
            else {
                this.powerupSound = new Audio("./assets/audio/powerup.mp3")
            }
            this.slam = obj.slam
            this.powerupColour = obj.powerupColour
            this.onClose = obj.onClose
            this.messageColour = obj.messageColour
            this.primaryColour = obj.primaryColour
            this.ballColour = obj.ballColour
            this.secondaryColour = obj.secondaryColour
            this.backgroundColour = obj.backgroundColour
            this.progressColour = obj.progressColour
            this.parentDiv = obj.div
            this.parentDiv.style.display = 'flex'
            this.parentDiv.style.flexDirection = 'column'
            this.parentDiv.style.justifyContent = 'center'
            this.parentDiv.style.alignItems = 'center'
            this.score = 0;
            this.pulse = false;
            this.div = null
            this.levelTable = null
            this.startButtonContainer = null
            this.progressText = null
            this.progressIndicator = null
            this.progressDiv = null
            this.loadingContainer = null
            this.messageContainer = null
            if (this.message !== undefined) {
                drawMessage.call(this);
            }
            this.progress = 0;
            if (obj.loading) {
                drawInitialLoading.call(this);
            }
            drawGameSpace.call(this);
            this.div.style.position = 'relative';
            this.bricks = []
            this.paddle = {
                height: '5%',
                width: 0,
                x: 0,
            }
            this.initialClick = true;
            this.restarting = false;
            this.speedFactor = 1 / 2
            this.balls = [{
                x: 0,
                y: 0,
                height: 0,
                width: 0,
                timeOld: null,
                timeElapsed: null,
                step: 1,
                dx: 1,
                dy: 1,
                ballElement: null,
            }]
            this.paddleElement = null;
            this.currPowerups = [];
            drawInitialLevel.call(this)
            drawStartButton.call(this)
            drawInitialPaddle.call(this)
            drawInitialBall.call(this)
        }
        setProgress(percentage) {
            if ($(this.progressDiv)[0] === undefined) return


            if (percentage >= 100 && !this.pulse) {
                this.pulse = true;
                let keyframePulse = [
                    {
                        transform: "scale(0.95)",
                        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.7)",
                        offset: 0
                    },
                    {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)",
                        offset: 0.7
                    },
                    {
                        transform: "scale(0.95)",
                        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
                        offset: 1

                    },
                ]
                $(this.progressText)[0].innerText = "✖";
                $(this.progressIndicator)[0].animate(keyframePulse, {
                    // timing options
                    duration: 2000,
                    iterations: Infinity
                })
                $(this.progressIndicator)[0].style.cursor = `pointer`
                $(this.progressIndicator).click(() => {
                    $(this.progressIndicator).unbind('click');
                    this.animateClose.call(this);
                });
            }
            else {
                if (!this.pulse) {
                    $(this.progressDiv)[0].style.width = `${percentage / 100 * 95}%`
                    $(this.progressText)[0].innerText = `${Math.round(percentage)}%`
                }
            }
        }
        animateClose() {
            if ($(this.loadingContainer)[0]) {
                $(this.loadingContainer)[0].style.opacity = 0;
            }

            if (this.message) {
                $(this.messageContainer)[0].style.opacity = 0;
            }
            this.div.style.opacity = 0;

            stopGame.call(this)

            setTimeout(() => {
                this.parentDiv.remove()
                if (this.onClose) {
                    this.onClose.call(this);
                }
            }, 1000);
        }
    }
    global.ErrorBreaker = global.ErrorBreaker || ErrorBreaker
})(window, window.document, $);

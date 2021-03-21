"use strict";
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
//
// }
class ErrorBreaker {
    constructor(obj) {
        this.levelText = obj.levelText.toString().toLowerCase();
        this.message = obj.message;
        this.onClose = obj.onClose
        this.messageColour = obj.messageColour
        this.primaryColour = obj.primaryColour
        this.ballColour = obj.ballColour
        this.secondaryColour = obj.secondaryColour
        this.backgroundColour = obj.backgroundColour
        this.progressColour = obj.progressColour
        this.parentDiv = obj.div[0]
        this.parentDiv.style.display = 'flex'
        this.parentDiv.style.flexDirection = 'column'
        this.parentDiv.style.justifyContent = 'center'
        this.parentDiv.style.alignItems = 'center'
        this.score = 0;
        this.pulse = false;
        this.div = null
        if (this.message !== undefined) {
            this.drawMessage();
        }
        this.progress = 0;
        if (obj.loading) {
            this.drawInitialLoading();
        }
        this.drawGameSpace();
        this.div.style.position = 'relative';
        this.bricks = []
        this.paddle = {
            height: '5%',
            width: 0,
            x: 0,
        }
        this.initialClick = true;
        this.restarting = false;
        this.ball = {
            x: 0,
            y: 0,
            height: 0,
            width: 0,
            factor: 1 / 2,
            timeOld: null,
            timeElapsed: null,
            step: 1,
            dx: 1,
            dy: 1,

        }
        this.paddleElement = null;

        this.ballElement = null;
        this.drawInitialLevel()
        this.drawInitialPaddle()
        this.drawInitialBall()
    }
    setProgress(number) {
        if( $('#progress')[0] === undefined) return
    

        if (number >= 100 && !this.pulse) {
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
            $('#progressText')[0].innerText = "►";
            $('#progressIndicator')[0].animate(keyframePulse, {
                // timing options
                duration: 2000,
                iterations: Infinity
            })
            $('#progressIndicator')[0].style.cursor = `pointer`
            $('#progressIndicator').click(() => {
                $('#progressIndicator').unbind('click');
                this.animateClose();
            });
        }
        else {
            if (!this.pulse) {
                $('#progress')[0].style.width = `${number / 100 * 95}%`
                $('#progressText')[0].innerText = `${Math.round(number)}%`
            }
        }
    }
    animateClose() {
        $('#loadingContainer')[0].style.opacity = 0;
        if (this.message) {
            $('#messageContainer')[0].style.opacity = 0;
        }
        this.div.style.opacity = 0;
        
        this.stopGame()
    
        setTimeout(() => {
            this.parentDiv.remove()
            this.onClose();
        }, 1000);
    }
    drawMessage() {
        let messageContainer = document.createElement('div')
        messageContainer.id = 'messageContainer'
        messageContainer.style.transition = "opacity 1s"
        messageContainer.style.marginBottom = '20px'
        messageContainer.style.fontWeight = "900";
        messageContainer.style.fontSize = "xx-large"
        messageContainer.style.textAlign = 'center'
        messageContainer.style.fontFamily = 'Segoe UI'
        messageContainer.style.justifyContent = 'center'
        messageContainer.style.color = this.messageColour
        let messageElement = document.createTextNode(this.message);
        messageElement.id = 'message'
        messageContainer.appendChild(messageElement)
        this.parentDiv.appendChild(messageContainer)
    }
    drawInitialLoading() {
        let loadingContainer = document.createElement('div')
        loadingContainer.id = 'loadingContainer'
        loadingContainer.style.width = '80%'
        loadingContainer.style.position = 'relative'
        loadingContainer.style.minWidth = '550px'
        loadingContainer.style.transition = "opacity 1s"
        loadingContainer.style.height = '10%'
        loadingContainer.style.marginBottom = '25px'
        loadingContainer.style.verticalAlign = 'center'
        let progressIndicator = document.createElement('div')
        progressIndicator.id = 'progressIndicator'
        let loadingBricks = document.createElement("table");
        loadingBricks.id = 'bricksLoading'
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
        progressIndicator.innerHTML = `<div id='progressText' style='color: white'>0%</div>`
        loadingContainer.appendChild(progressIndicator)
        let progress = document.createElement('div')
        progress.id = 'progress'
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

        this.parentDiv.appendChild(loadingContainer)
    }
    drawGameSpace() {
        let gameSpace = document.createElement('div')
        gameSpace.id = 'gameSpace'
        gameSpace.style.transition = "opacity 1s"
        gameSpace.style.transition = "background-color 1000ms linear outline 3s linear;"
        gameSpace.style.width = '80%'
        gameSpace.style.borderRadius = '5px'
        gameSpace.style.minWidth = '550px'
        gameSpace.style.height = '100%'
        this.parentDiv.appendChild(gameSpace)
        this.div = $("#gameSpace")[0]
    }
    stopGame() {
        if (this.restarting) return;
        if(this.ballElement)  this.ballElement[0].remove();
       
        this.ball.x = 0
        this.ball.y = 0
        this.ball.dx = 1
        this.ball.dy = 1
        this.ball.timeOld = null
        this.ball.timeElapsed = null
        this.bricks = []
        this.ballElement = null;
        this.restarting = true;
        cancelAnimationFrame(this.animationId)
        this.animationId = undefined
        this.restarting = false;
    }
    resetGame() {

        $('#levelTable')[0].remove()
        this.drawInitialLevel()

        this.drawInitialBall()
    }

    startDrawing() {
        this.animationId = requestAnimationFrame((timestamp) => {
            this.draw(timestamp)
        })
    }
    animateDeath() {
        this.score = 0;
        let gameOverElement = document.createElement('div')
        gameOverElement.style.position = 'absolute'
        gameOverElement.id = 'gameOver'
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
        gameOverElement.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; width: 100%; height: 50%; justify-content: space-between;  align-self: center;">
       <div style="color: white; font-size: x-large">Game Over</div>
       <button type="button" id='playAgainGameOver' style="border-radius: 5px; font-family: 'Segoe UI'; font-weight: bold; width: 65%; height: 20%">Play Again?</button>
        </div>`
        this.div.appendChild(gameOverElement)
        $('#playAgainGameOver').click(() => {

            $('#gameOver')[0].remove()
            this.resetGame();
            this.ballElement[0].style.opacity = 1
            this.startDrawing()
        });
    }
    animateWin() {
        this.score = 0;
        let winElement = document.createElement('div')
        winElement.style.position = 'absolute'
        winElement.id = 'win'
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
        winElement.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; width: 100%; height: 50%; justify-content: space-between;  align-self: center;">
       <div style="color: white; font-size: x-large">You Win!</div>
       <button type="button" id='playAgainWin' style="border-radius: 5px; font-family: 'Segoe UI'; font-weight: bold; width: 65%; height: 20%">Play Again?</button>
        </div>`
        this.div.appendChild(winElement)
        $('#playAgainWin').click(() => {
            $('#win')[0].remove()
            this.resetGame();
            this.ballElement[0].style.opacity = 1
            this.startDrawing()
        });
    }
    animateOpening() {
        this.div.style.backgroundColor = this.backgroundColour
        gameSpace.style.border = `5px solid ${this.ballColour}`;
        this.paddleElement[0].style.opacity = 1
        this.ballElement[0].style.opacity = 1
        setTimeout(() => { this.startDrawing() }, 1000);
    }


    draw(timestamp) {

        this.drawBall(timestamp)
        if (this.animationId) {
            this.animationId = requestAnimationFrame((timestamp) => this.draw(timestamp))
        }

    }

    checkCollisions() {

        let ballRect = this.ballElement[0].getBoundingClientRect();
        for (let i = 0; i < this.bricks.length; i++) {
            for (let j = 0; j < this.bricks[i].length; j++) {
                for (let k = 0; k < this.bricks[i][j].length; k++) {
                    let brick = this.bricks[i][j][k].element

                    let rect = brick.getBoundingClientRect();

                    if (this.bricks[i][j][k].avail === 1 && (ballRect.right > rect.left && ballRect.left < rect.right && ballRect.bottom > rect.top && ballRect.top < rect.bottom)
                    ) {
                        this.bricks[i][j][k].avail = 0;
                        this.score += 1;

                        let leftDiff = ballRect.right - rect.left
                        let rightDiff = rect.right - ballRect.left
                        let topDiff = ballRect.bottom - rect.top
                        let bottomDiff = rect.bottom - ballRect.top
                        let minDiff = Math.min(leftDiff, rightDiff, topDiff, bottomDiff)
                        if (minDiff === leftDiff) {
                            this.ball.dx = -this.ball.step;
                        }
                        if (minDiff === rightDiff) {
                            this.ball.dx = this.ball.step;
                        }
                        if (minDiff === topDiff) {
                            this.ball.dy = -this.ball.step;
                        }
                        if (minDiff === bottomDiff) {
                            this.ball.dy = this.ball.step;
                        }

                        brick.style.backgroundColor = 'transparent';
                        if (this.score == this.levelText.length * 5 * 3) {
                            this.stopGame()
                            this.animateWin();
                        }
                        return;
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
                this.ball.dx = -this.ball.step;
            }
            if (minDiff === rightDiff) {
                this.ball.dx = this.ball.step;
            }
            if (minDiff === topDiff) {
                this.ball.dy = -this.ball.step;
            }
            if (minDiff === bottomDiff) {
                this.ball.dy = this.ball.step;
            }

            return;
        }

        let clientWidth = this.div.clientWidth
        let clientHeight = this.div.clientHeight - $('#levelTable')[0].clientHeight
        if (this.ball.x + this.ball.width >= clientWidth) this.ball.dx = -this.ball.step;
        if (this.ball.x <= 0) this.ball.dx = this.ball.step;
        if (this.ball.y + this.ball.height >= clientHeight && !this.restarting) {
            this.stopGame();
            this.animateDeath();
            return;
        }
        if (this.ball.y <= -$('#levelTable')[0].clientHeight) this.ball.dy = this.ball.step;
    }


    drawBall(timestamp) {
        let clientWidth = this.div.clientWidth
        let clientHeight = this.div.clientHeight - $('#levelTable')[0].clientHeight
        if (!this.ball.timeOld) this.ball.timeOld = timestamp;
        this.ball.timeElapsed = timestamp - this.ball.timeOld;
        this.ball.timeOld = timestamp;
        this.ball.x += (this.ball.dx * this.ball.timeElapsed * this.ball.factor * (clientWidth / (clientWidth + 400))) //an attempt to scale speed to different screen sizes
        this.ball.y += (this.ball.dy * this.ball.timeElapsed * this.ball.factor * (clientHeight / (clientHeight + 400)))//an attempt to scale speed to different screen sizes
        this.ballElement[0].style.transform = `translate(${this.ball.x}px, ${this.ball.y}px)`;
        this.checkCollisions();
    }

    drawInitialBall() {
        let ball = document.createElement('div')
        ball.id = 'ball'
        ball.style.width = '5%'
        ball.style.height = 0
        ball.style.paddingBottom = '5%'
        ball.style.position = 'relative'
        ball.style.borderRadius = '50%'
        ball.style.backgroundColor = this.ballColour
        ball.style.opacity = 0;
        ball.style.transition = "opacity 1s"
        this.div.appendChild(ball)
        this.ballElement = $("#ball")
        this.ball.width = this.ballElement[0].clientWidth
        this.ball.height = this.ballElement[0].clientHeight
    }


    drawInitialPaddle() {
        let paddle = document.createElement('div')
        paddle.id = 'paddle'
        paddle.style.height = '5%'
        paddle.style.width = '15%'
        paddle.style.bottom = '7.5%'
        paddle.style.position = 'absolute'
        paddle.style.backgroundColor = this.primaryColour
        paddle.style.opacity = 0;
        paddle.style.transition = "opacity 1s"
        this.div.appendChild(paddle)
        this.paddleElement = $("#paddle")
        $(document).mousemove((e) => {
            if (this.paddle != null) {
                this.drawPaddle(e);
            }
        });
    }
    drawPaddle(e) {
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


    drawInitialLevel() {
        let levelDiv = document.createElement("table");
        levelDiv.id = 'levelTable'
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
        if (this.initialClick) {
            this.initialClick = false;
            $('#levelTable')[0].style.transition = 'all .2s ease-in-out;'
            $('#levelTable').hover(function () {
                $('#levelTable')[0].style.transform = `scale(1.05)`
                $('#levelTable')[0].style.cursor = `pointer`
            }, function () {
                $('#levelTable')[0].style.transform = `scale(1)`
            })
            $('#levelTable').click(() => {
                $('#levelTable')[0].style.transform = `scale(1)`
                $('#levelTable')[0].style.cursor = 'default'
                $('#levelTable').unbind('mouseenter mouseleave');
                $('#levelTable').unbind('click');
                this.animateOpening();
            });
        }
    }
}

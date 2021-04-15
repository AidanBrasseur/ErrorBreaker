"use strict";
const spawnBasic = () => {
    let errorContainer1 = $('#errorContainer1');
    let button = $('#btn1Basic')[0]
    button.remove();
    const obj = {
        levelText: '404',
        message: "We’re sorry, the page you are looking for has vanished",
        div: errorContainer1[0],
        primaryColour: 'Coral',
        secondaryColour: 'Gainsboro',
        backgroundColour: 'LightSteelBlue',
        ballColour: 'Navy',
        messageColour: 'black',
        powerupColour: 'red',
        slam: true
    }
    let errorBreaker = new ErrorBreaker(obj)
}



const onCloseLoading = () => {
    let errorContainer2 = $('#loadingGameWrapper');
    let afterLoad = document.createElement('div')
    afterLoad.innerHTML = `<div id='afterLoad' >
        Now the application can continue on with whatever it was waiting for
    </div>`
    errorContainer2[0].appendChild(afterLoad)
}

const spawnLoading = () => {
    let interval = null
    let errorContainer2 = $('#errorContainer2');
    let button = $('#btn2Loading')[0]
    button.remove();
    const obj = {
        levelText: 'loading',
        div: errorContainer2[0],
        primaryColour: 'DeepSkyBlue',
        secondaryColour: 'Aquamarine',
        backgroundColour: 'AliceBlue',
        ballColour: 'black',
        messageColour: 'black',
        powerupColour: 'DarkGoldenRod',
        loading: true,
        progressColour: 'LightGreen',
        onClose: onCloseLoading
    }
    let errorBreaker = new ErrorBreaker(obj)
    let step = 0.4;
    let progress = 0;
    //fake loading progress
    interval = setInterval(function () {
        progress += step

        if (progress >= 40) {
            step = 0.3
        }
        if (progress >= 50) {
            step = 0.25
        }
        if (progress >= 70) {
            step = 0.2
        }
        errorBreaker.setProgress(progress)
    }, 100);
    if (progress >= 100) {
        clearInterval(interval)
        interval = null
    }
}



const spawnClose = () => {
    let errorContainer1 = $('#errorContainer3');
    let button = $('#btn3Close')[0]
    button.remove();
    let closeButton = $('#btn4Close')[0]
    closeButton.style.opacity = 1
    const obj = {
        levelText: '309',
        message: "Thanks for playing",
        div: errorContainer1[0],
        primaryColour: 'DarkRed',
        secondaryColour: 'DarkBlue',
        backgroundColour: 'LightSteelBlue',
        ballColour: 'Navy',
        messageColour: 'black',
        powerupColour: 'red',
        slam: true
    }
    let errorBreaker = new ErrorBreaker(obj)
    closeButton.onclick = () => {
        errorBreaker.animateClose()
        closeButton.style.opacity = 0
    }
}

const spawnAudio = () => {
    let errorContainer1 = $('#errorContainer4');
    let button = $('#btn5Audio')[0]
    button.remove();
    const obj = {
        levelText: '309',
        message: "Hear the difference",
        div: errorContainer1[0],
        primaryColour: 'DarkCyan',
        secondaryColour: 'Aquamarine',
        backgroundColour: 'LightSteelBlue',
        ballColour: 'Navy',
        messageColour: 'black',
        powerupColour: 'red',
        slam: true,
        winSound: './assets/audio/alt-win.mp3',
        gameOverSound:  './assets/audio/alt-gameOver.mp3',
        collisionSound:  './assets/audio/alt-col.mp3',
        secondaryCollisionSound: './assets/audio/alt-sec-col.mp3',
    }
    let errorBreaker = new ErrorBreaker(obj)
}


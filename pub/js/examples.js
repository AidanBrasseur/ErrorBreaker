"use strict";
const documentDiv = $('#documentContainer');

const onClose = () => {
    let afterLoad = document.createElement('div')
    afterLoad.innerHTML = `<div id='afterLoad'>
        Now the application can continue on with whatever it was waiting for
    </div>`
    documentDiv[0].appendChild(afterLoad)
}
let interval = null;
const HTML = `<div id='errorContainer' style="width: 55vw; height: 80vh;">`
const displayLoad = () => {
    if($('#errorContainer')[0] !== undefined){
        $('#errorContainer')[0].remove();
        if(interval !== null){
            clearInterval(interval)
            interval = null
        }
       
    }
    if($('#afterLoad')[0] !== undefined){
        $('#afterLoad')[0].remove()
    }
    let parentDiv = document.createElement('div');
    parentDiv.innerHTML = HTML
    documentDiv[0].appendChild(parentDiv)
    parentDiv = $('#errorContainer');
    const obj = {
        levelText: 'loading',
        div: parentDiv,
        primaryColour: 'DeepSkyBlue',
        secondaryColour: 'Aquamarine',
        backgroundColour: 'AliceBlue',
        ballColour: 'black',
        messageColour: 'black',
        loading: true,
        progressColour: 'LightGreen',
        onClose: onClose
    }
    const errorBreaker = new ErrorBreaker(obj)
    let step = 0.4;
    let progress = 0;
    //fake loading progress
    interval = setInterval(function () {
        progress += step
      
        if(progress >= 40){
            step = 0.3
        }
        if(progress >= 50){
            step = 0.25
        }
        if(progress >= 70){
            step = 0.2
        }
        errorBreaker.setProgress(progress)
    }, 100);
    if (progress >= 100) {
       clearInterval(interval)
       interval = null
    }
}

const displayError = () => {
    if($('#errorContainer')[0] !== undefined){
        $('#errorContainer')[0].remove();
        if(interval !== null){
            clearInterval(interval)
            interval = null
        }
        
    }
    if($('#afterLoad')[0] !== undefined){
        $('#afterLoad')[0].remove()
    }
    let parentDiv = document.createElement('div');
    parentDiv.innerHTML = HTML
    documentDiv[0].appendChild(parentDiv)
    parentDiv = $('#errorContainer');
    const obj = {
        levelText: '404',
        message: "We’re sorry, the page you are looking for has vanished",
        div: parentDiv,
        primaryColour: 'Coral',
        secondaryColour: 'Gainsboro',
        backgroundColour: 'LightSteelBlue',
        ballColour: 'Navy',
        messageColour: 'black',
    }
    const errorBreaker = new ErrorBreaker(obj)
}



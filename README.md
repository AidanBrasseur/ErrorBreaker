# ErrorBreaker

The full landing page for ErrorBreaker can be accessed at the following link: [LandingPage](https://csc309errorbreaker.herokuapp.com/index.html#home)

The full documentation can be accessed at the following link:  [Documentation](https://csc309errorbreaker.herokuapp.com/docs.html)

## Getting Started

Using ErrorBreaker is very simple, but first we need to set up a few dependencies before we can get started.

ErrorBreaker utilizes jQuery, and thus you must include jQuery as a script in the head of your HTML as follows

<code>              `<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>` </code>

ErrorBreaker also utilizes a custom font that must be imported. Include this font in the head of your HTML as follows

<code>                `<link href='https://fonts.googleapis.com/css?family=Black+Ops+One' rel='stylesheet' type='text/css'>` 
            </code>

Finally, we are ready to include the main ErrorBreaker.js library code. This code can be found [here.](https://csc309errorbreaker.herokuapp.com/js/ErrorBreaker.js) Include this script in the head of your HTML as follows

<code>                `<script defer type="text/javascript" src='ErrorBreaker.js'> </script>` 
           </code>

Now that we're all set up, we can begin creating our first game with ErrorBreaker!

Create an HTML div element and ensure that you set its width and height.

Next, in your JavaScript code, create an instance of the ErrorBreaker object, passing in a single object with this div and all other required attributes. Creating this object will spawn the ErrorBreaker game in the div provided.

If you want to skip the instructions and hop straight to the code, create an HTML div with id errorContainer, set its width and height, and copy the following code to create your first basic example of the ErrorBreaker game

```
parentDiv = $('#errorContainer'); 
const obj = { 
        levelText: '404', 
        message: "We’re sorry, the page you are looking for has vanished", 
        div: parentDiv[0],
        primaryColour: 'Coral',
        secondaryColour: 'Gainsboro',
        backgroundColour: 'LightSteelBlue',
        ballColour: 'Navy', 
        messageColour: 'black',
        slam: true 
} 
const errorBreaker = new ErrorBreaker(obj)
```

Check out the [Examples Page](https://csc309errorbreaker.herokuapp.com/examples.html) to see some demos and instructions on how to play!


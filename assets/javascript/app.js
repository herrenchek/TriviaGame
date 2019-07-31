window.onload = function () {
    // Click handler for Start button
    $("#start").on("click", start);
};

// Global variables
var interval = 0;
var clockRunning = false;
var timeout = 60;

function start() {
    // Use setInterval to start the count here and set the clock to running
    if (!clockRunning) {
        // Change the "display" p
        $("#display").text("Time remaining: 01:00");
        interval = setInterval(decrement, 1000);
        clockRunning = true;
    }
};

function decrement() {
    // Decrement time by 1
    timeout--;
    // Get current time, pass that into the timeConverter function, and save the result in a variable
    var converted = timeConverter(timeout);
    // Use the variable we just created to show the converted time in the "display" div.
    $("#display").text("Time remaining: " + converted);

    if (timeout === 0) {
        // Use clearInterval to stop the count here and set the clock to not be running
        clearInterval(interval);
        clockRunning = false;
    }
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    return minutes + ":" + seconds;
}
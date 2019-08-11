window.onload = function () {
    $("#submit").hide();
    // Click handler for Start button
    $("#start").click(function (e) {
        e.preventDefault();
        start();
        // Hide Start button
        $("#start").hide();
        // Show Submit button
        $("#submit").show();
    });
    // Click handler for submit button
    $("#submit").on("click", reset);
};

// Global variables
var interval = 0;
var clockRunning = false;
var timeout = 60;
var score = 0;

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
    // Show the converted time in the "display" div
    $("#display").text("Time remaining: " + converted);

    if (timeout === 0) {
        reset();
    }
}

function reset() {
    // Change the "display" p
    $("#display").text("Time remaining: 00:00");
    // Use clearInterval to stop the count here and reset the clock
    clearInterval(interval);
    timeout = 60;
    clockRunning = false;
    alert("Time's up! You scored " + score + "/" + questions.length + ".");
    // Show and hide buttons
    $("#start").show();
    $("#submit").hide();
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

var questions = [
    {
        prompt: "What color are apples?\n(a) Red",
        answer: "a"
    },
    {
        prompt: "What color are apples?\n(a) Red",
        answer: "a"
    }
]

for (var i = 0; i < questions.length; i++) {
    var response = questions.answer;
    if (response === questions[i].answer) {
        score++;
    }
}
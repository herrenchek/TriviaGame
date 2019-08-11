window.onload = function () {
    $("#submit").hide();
    $("#quiz").hide();
    // Click handler for submit button
    $("#submit").on("click", reset);
};

$(document).on("click", "#start", function () {
    start();
    // Show Submit button and "quiz" form
    $("#submit").show();
    $("#quiz").show();
});

// Global variables
var interval = 0;
var clockRunning = false;
var timeout = 60;
var score = 0;

// Trivia questions
var trivia = [
    {
        question: "Shelob is a character introduced in 'The Two Towers' and is which of the following types of creatures?",
        options: ["Elf", "Giant spider", "Orc", "Ent"],
        answer: "Giant spider"
    },
    {
        question: "Who is the dwarf featured most prominently in J.R.R. Tolkien's 'Lord of the Rings' series?",
        options: ["Glóin", "Frodo", "Gimli", "Thorin"],
        answer: "Gimli"
    },
    {
        question: "Which of the following characters is NOT a memeber of the Fellowship of the Ring?",
        options: ["Legolas", "Samwise", "Gandalf", "Gollum"],
        answer: "Gollum"
    },
    {
        question: "Which of the following characters possesses one of the three Elvish Rings of Power?",
        options: ["Galadriel", "Legolas", "Thranduil", "Celeborn"],
        answer: "Galadriel"
    },
    {
        question: "What is the name of Gandalf's horse?",
        options: ["Strider", "Shadowfax", "Fatty Lumpkin", "Snowmane"],
        answer: "Shadowfax"
    },
    {
        question: "Théoden is betrayed by which of his advisors?",
        options: ["Éomer", "Éomer", "Grima", "Gandalf"],
        answer: "Grima"
    },
    {
        question: "Where must Frodo take The One Ring in order for it to be destroyed?",
        options: ["The Undying Lands", "Erebor", "Barad-dûr", "Mount Doom"],
        answer: "Mount Doom"
    },
    {
        question: "What type of being is Sauron?",
        options: ["Maia", "Balrog", "Demon", "Hobbit"],
        answer: "Maia"
    },
    {
        question: "Which of the following fictional creatures is the character Gollum rumored to be inspired by?",
        options: ["Grendel", "Kappa", "Kraken", "Siren"],
        answer: "Grendel"
    },
    {
        question: "How many children does the elf Elrond have?",
        options: ["None", "One", "Two", "Three"],
        answer: "Three"
    }
];

function start() {
    $("#start").hide();
    // Use setInterval to start the count here and set the clock to running
    if (!clockRunning) {
        // Change the "display" p
        $("#display").text("Time remaining: 01:00");
        interval = setInterval(decrement, 1000);
        clockRunning = true;
    }
    // Appends trivia questions to "trivia" div
    for (var i = 0; i < trivia.length; i++) {
        $("#quiz").append("<p>" + trivia[i].question + "</p>");
        for (var j = 0; j < trivia[i].options.length; j++) {
            $("#quiz").append("<div class='form-check form-check-inline mb-3'> <input class='form-check-input' type='radio' name='Question-" + (i + 1) +
                "' value='" + trivia[i].options[j] + "'>" + "<label class='form-check-label'>" + trivia[i].options[j]);
        }
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
    alert("Time's up! You scored " + score + "/" + trivia.length + ".");
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

// for (var i = 0; i < questions.length; i++) {
//     var response = questions.answer;
//     if (response === trivia[i].answer) {
//         score++;
//     }
// }
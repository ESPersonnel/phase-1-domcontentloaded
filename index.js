// Your code goes here

// set up DOM content loaded event. Use the event's callback function to target the paragraph element with id="text" and replace its text with the text "This is really cool!"
document.addEventListener("DOMContentLoaded", function() {
    var text = document.getElementById("text");
    text.innerHTML = "This is really cool!";
})
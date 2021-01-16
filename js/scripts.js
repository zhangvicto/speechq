document.getElementById("textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("startButton").click();
    }
});

var textbox = document.getElementById("inbox").value; 
console.log(textbox);

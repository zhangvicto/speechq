var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

function begin() { 
    var textbox = document.getElementById("inbox").value; 
    console.log(textbox); //test
    var str = textbox.split(" ");

    //print the array on html
    //for(let i=0;i<str.length;i++) {
    //    document.getElementById("output").innerHTML= str[i];
    //}

    recognition.lang = select_dialect.value;
    recognition.start();
    
    //need some condition and then nextWord(); //find next word
}

function nextWord() {

}
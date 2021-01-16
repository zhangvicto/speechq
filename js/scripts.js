var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
    var SpeechRecognitionList = new SpeechGrammarList();
    SpeechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = SpeechRecognitionList;

    recognition.continuous = false;
    recognition.lang='en-US';
    recognition.interrimResults = false;
    recognition.maxAlternatives = 1;


function begin() { 
    var textbox = document.getElementById("inbox").value; 
    console.log(textbox); //test
    var str = textbox.split(" ");

    //print the array on html
    for(let i=0;i<str.length;i++) {
        document.getElementById("output").innerHTML= str[i];
    }

    recognition.start();

}

function nextWord() {

}
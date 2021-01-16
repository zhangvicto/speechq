var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
}

var final_transcript = '';

function begin() { 
    var textbox = document.getElementById("inbox").value; 
    console.log(textbox); //test
    var str = textbox.split(" ");

    speechLength(str);

    recognition.lang = 'en-US';
    recognition.start();
    listen(str);

    document.getElementById("textbox").style.display = "none";
    document.getElementById("stats").style.display = "block";

    //need some condition and then nextWord(); //find next word
}

function listen(str) {
    recognition.onresult = function(event) {
    var interim_transcript = '';

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
        //test
        document.getElementById("q0").innerHTML= interim_transcript;
        if (interim_transcript = str[0]) {
            startQ(str);
        }

      }
    }
    //final_transcript = capitalize(final_transcript);
    //final_span.innerHTML = linebreak(final_transcript);
    //interim_span.innerHTML = linebreak(interim_transcript);
  };
}

function startQ(str) {
    //print the array on html
    document.getElementById("q0").innerHTML= str[i];

}

function speechLength(str) {
    document.getElementById("length").innerHTML= str.length;
    document.getElementById("speech-time-sec").innerHTML= Math.round(str.length/130*60);
    document.getElementById("speech-time-min").innerHTML= Math.round(str.length/130);
}
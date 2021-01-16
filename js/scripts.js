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

function begin() { 
    var textbox = document.getElementById("inbox").value; 
    console.log(textbox); //test
    var str = textbox.split(" ");

    //print the array on html
    //for(let i=0;i<str.length;i++) {
    //    document.getElementById("output").innerHTML= str[i];
    //}

    recognition.lang = 'en-US';
    recognition.start();
    listen(str);

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
        if (interim_transcript = str[0]) {
            startQ(str);
        }
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
  };
}

function startQ(str) {
    
}
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
    var str0 = textbox.match(/[^_\W]+/g).join(' ');
    console.log(str0);
    var str1 = str0.toLowerCase();
    var str = str1.split(" ");

    console.log(str);

    createList(str);

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
        //document.getElementById("q0").innerHTML= interim_transcript;

        let j = 0;
        console.log(str[j].localeCompare(interim_transcript));
        console.log(interim_transcript);
        console.log(str[j]);
        
        //compare value
        if (str[j].localeCompare(interim_transcript.trim()) === 0) {
            startQ(str);
            j++;
        }

      }
    }

    console.log(final_transcript);
    //final_transcript = capitalize(final_transcript);
    //final_span.innerHTML = linebreak(final_transcript);
    //interim_span.innerHTML = linebreak(interim_transcript);
  };
}

function startQ(str) {
    //print the array on html
    document.getElementById("q0").innerHTML= str[0];
    document.getElementById("q1").innerHTML= str[1];
    document.getElementById("q2").innerHTML= str[2];
    document.getElementById("q3").innerHTML= str[3];
    document.getElementById("q4").innerHTML= str[4];
}

function speechLength(str) {
    document.getElementById("length").innerHTML= str.length;
    document.getElementById("speech-time-sec").innerHTML= Math.round(str.length/130*60);
    document.getElementById("speech-time-min").innerHTML= Math.round(str.length/130);
}

function showTy() {
    document.getElementById("ty").style.display = "block";
    recognition.stop();
}


//linked list
function L(val){
    this.val = val;
    this.next = null;
}

function createList(str){
    let node, temp;
    for(let i=str.length-1; i >= 0; i--){
        if(!node)
            node = new L(str[i]);
        else {
            temp = new L(str[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}
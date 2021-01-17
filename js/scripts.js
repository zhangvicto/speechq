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
    var str0 = textbox.match(/[^_\W]+/g).join(' ');
    var str1 = str0.toLowerCase();
    var str = str1.split(" ");

    //console.log(str);

    let node = createList(str);

    speechLength(str);

    recognition.lang = 'en-US';
    recognition.start();
    listen(str, node);

    document.getElementById("textbox").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("stats").style.display = "block";
}

function listen(str, node) {
    recognition.onresult = function(event) {
    var interim_transcript = '';
    var i = event.resultIndex;
    var resultLength = event.results.length;

    while (i < resultLength) {
        //if (event.results[i].isFinal) {
        //final_transcript += event.results[i][0].transcript;
        //} else {

        if (event.results[i].isFinal) {
            interim_transcript += event.results[i][0].transcript;
        }
        console.log(interim_transcript);
        //}
        ++i;
    }
    
    //here
    let currentWord0 = interim_transcript.trim();
    let currentWord1 = currentWord0.toLowerCase();
    let currentWord = currentWord1.split(" ");

    let inputListNode = createList(currentWord);

    console.log(inputListNode.val);

    let j = 0, len = currentWord1.length;
        while (j < len) {
            if (inputListNode.val === node.val) {

                startQ(str, node);
                node = node.next;
                inputListNode = inputListNode.next;

            } else if (!node.next) {
                    showTy();
                }
            j++
        }
    //to here
  };
}

function startQ(str, node) {
    //print the array on html
    document.getElementById("q0").innerHTML= node.val;
    document.getElementById("q1").innerHTML= node.next.val;
    document.getElementById("q2").innerHTML= node.next.next.val;
    document.getElementById("q3").innerHTML= node.next.next.next.val;
    document.getElementById("q4").innerHTML= node.next.next.next.next.val;
}

function speechLength(str) {
    document.getElementById("length").innerHTML= str.length;
    document.getElementById("speech-time-sec").innerHTML= Math.round(str.length/130*60);
    document.getElementById("speech-time-min").innerHTML= Math.round(str.length/130);
}

function showTy() {
    document.getElementById("ty").style.display = "block";
    document.getElementById("output").style.display = "none";
    recognition.stop();
}

function shortenStr (str, wordNum) {
        return str.split(" ").splice(0,wordNum).join(" ");
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
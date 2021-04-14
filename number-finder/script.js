
const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();
console.log('Number:',randomNum); 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();
 
//start recognition and game
recognition.start();

//Capture User Speak
function onSpeack(e){
    const msg = e.results[0][0].transcript;

 //   writeMessage(msg);
  //  checkNumber(msg);
}

function getRandomNumber(){
    return Math.floor(Math.random () * 100) + 1;

}

//speak result
recognition.addEventListener('result',onSpeack);

/*<div>You said:</div>
<span class="box">20</span>
<div>Go HIGHER</div>*/

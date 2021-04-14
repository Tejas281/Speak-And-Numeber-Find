
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

   writeMessage(msg);
    checkNumber(msg);

}
function writeMessage(msg)
{
    msgEl.innerHTML = `
    <div>You said:</div>
    <span class="box">${msg}</span>
  `;
}

function checkNumber(msg){
    const num =  +msg;

    //check if is valid number
    if(Number.isNaN(num)){
        msgEl.innerHTML += '<div>That is Not a Valid Number</div>';
        return;
    }
    //check in rang 
    if(num >100 || num<1){
        msgEl.innerHTML +='<div>Number Must be between 1 and 100</div>';
    return;
    }

    if(num === randomNum){
        document.body.innerHTML = `<h2>Congrats! You have guessed the number ! <br> <br>It was ${num}  </h2> <button class="play-again" id="play-again">Play Again</button>`;

    }
    else if(num>randomNum){
        msgEl.innerHTML += '<div>GO LOWER</div>';
    }else{
        msgEl.innerHTML += '<div>Go HIGHER</div>'
    }
}

function getRandomNumber(){
    return Math.floor(Math.random () * 100) + 1;

}

//speak result
recognition.addEventListener('result',onSpeack);


/*end sr service*/

recognition.addEventListener('end', () =>recognition.start());


document.body.addEventListener('click', (e) =>{
    if(e.target.id == 'play-again'){
        window.location.reload();

    }
});
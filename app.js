const button = document.querySelector("button");
 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("speech recognition started")
};
recognition.onresult = function(event) {
    console.log(event);

    const spokenwords = event.results[0][0].transcript;
    console.log("spoken words are: ", spokenwords);
};

button.addEventListener("click", ()=> {
    recognition.start();


});
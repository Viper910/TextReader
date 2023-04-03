const textarea = document.getElementById("text");
const playbtn = document.getElementById("playbtn");
const language = document.getElementById("language");
let isSpeaking = true;
//Creating a speechSynthesis object
const synth = speechSynthesis;

//function to get all available language
function getLanguage() {
  const voices = window.speechSynthesis.getVoices();
  voices.forEach((element) =>
    language.appendChild(
      new Option(
        element.voiceURI,
        element.voiceURI,
        null,
        element.voiceURI === "Google UK English Female" ? true : false
      )
    )
  );
}

//Function to convert text to speech using SpeechSynthesisUtterance
function textToSpeech(text) {
  let utterence = new SpeechSynthesisUtterance(text);
  for (let voice of window.speechSynthesis.getVoices()) {
    console.log(language.value);
    if (voice.voiceURI === language.value) {
      utterence.voice = voice;
    }
  }
  synth.speak(utterence);
}


function togglePlay(){
    isSpeaking ? synth.resume() : synth.pause() 
}


//Adding an eventListiner
synth.addEventListener("voiceschanged", getLanguage);
playbtn.addEventListener("click", () => {
  const text = textarea.value;
  textToSpeech(text);
});

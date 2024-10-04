
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
//     let input = document.querySelector('input').value; 
//     let utterance = new SpeechSynthesisUtterance(input);
//     speechSynthesis.speak(utterance);
//     console.log(utterance);
// });

let btn = document.querySelector('#btn');
let output = document.querySelector('#output');
let voiceSelect = document.querySelector('#voiceSelect');
let voices = [];

// Function to populate the voices array and the dropdown list
function populateVoices() {
    voices = speechSynthesis.getVoices();

    // Clear existing options in the select element
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang}) ${voice.default ? '-- DEFAULT' : ''}`;
        voiceSelect.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = populateVoices;

btn.addEventListener('click', function () {
    let input = document.querySelector('input').value;
    let utterance = new SpeechSynthesisUtterance(input);

    let selectedVoice = voices[voiceSelect.value];
    utterance.voice = selectedVoice; // Assign selected voice to the utterance

    speechSynthesis.speak(utterance);
    console.log(utterance);
});

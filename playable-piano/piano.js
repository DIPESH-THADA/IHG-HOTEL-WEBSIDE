const pianoKeys = document.querySelectorAll(".piano-keys")

let audio = new Audio("../playable-piano/tune/a#.wav") //by defult, adio src is "a tune"

const playTune = (key) => {
    audio.src = `../playable-piano/tune/${key}.wav`; //passing audio src based on key pressed
    audio.play() //playing audio
}

pianoKeys.forEach(key => {
    // calling playtune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))

})

const pressedKey = (e) => {
    console.log(e)
}

document.addEventListener("keydown", pressedKey)
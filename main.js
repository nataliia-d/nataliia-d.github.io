import { createRandomWord } from "./generator.mjs"
import { wordToBlank } from "./converter.mjs";

$( document ).ready(() => {

  const wordContainer = document.getElementById("word-container");
  const randWord = createRandomWord();
  let blankWord = wordToBlank(randWord);
  console.log(randWord);
  wordContainer.innerText = blankWord;
////////////////////////////////////////////////////////////////////
const letters = [...document.getElementsByClassName("letter")];

  letters.forEach((letter) => {
    letter.addEventListener('click', checkIfLetterIsRight);
  });

  
  function replaceBlankWithLetter(selectedLetter){
    for (var i = 0; i < randWord.length; i++) {
      if(randWord[i] == selectedLetter){
        blankWord = blankWord.replace(blankWord[i], selectedLetter);
        console.log(blankWord);
      }
      else{
        console.log(selectedLetter);
        console.log(randWord[i]);
      }
    }
    wordContainer.innerText = blankWord;
  }


  function checkIfLetterIsRight(){
    const lowerCaseLetter = this.innerText.toLowerCase();
    console.log(lowerCaseLetter)
    const letterIndex = randWord.indexOf(lowerCaseLetter);
    if (letterIndex > -1){
      console.log("letter found");
      console.log(letterIndex)
      replaceBlankWithLetter(lowerCaseLetter);
      this.classList.toggle('right');
      this.disabled = true;
    }
    else{
      console.log("letter not found")
    }
  }

});
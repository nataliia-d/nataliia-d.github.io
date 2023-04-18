import { updatePageWord } from "./page_updates.mjs";
import { randWord } from "./main.js";
import { blankWord } from "./main.js";

function replaceBlankWithLetter(selectedLetter){

    for (var i = 0; i < randWord.length; i++) {
      if(randWord[i] == selectedLetter){
        blankWord[i] = selectedLetter;
        console.log(blankWord);
      }
      else{
        console.log(selectedLetter);
        console.log(randWord[i]);
      }
    }
    updatePageWord();
  }

export function checkIfLetterIsRight(){
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
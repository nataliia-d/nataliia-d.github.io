import { updatePageWord } from "./page_updates.mjs";
import { checkIfLetterIsRight } from "./check_letter.mjs";
import { createRandomWord } from "./generator.mjs";
import { wordToBlank } from "./converter.mjs";

const randWord = createRandomWord();
export { randWord };
let blankWord = wordToBlank(randWord);
export { blankWord };


$( document ).ready(() => {    
  console.log(randWord);
  updatePageWord();
  
  const letters = [...document.getElementsByClassName("letter")];

  letters.forEach((letter) => {
    letter.addEventListener('click', checkIfLetterIsRight);
  });
});
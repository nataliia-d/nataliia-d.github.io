import { blankWord } from "./main.js";
export function updatePageWord(){

    const wordContainer = document.getElementById("word-container");

    wordContainer.innerText = blankWord.join("");
}
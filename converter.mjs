export function wordToBlank(word){
    let blankWord = [];
    for (let i = 0; i < word.length; i++) {
        blankWord.push("_");
      }
    return blankWord;
}
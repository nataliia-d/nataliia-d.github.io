export function wordToBlank(word){
    let blankWord = "";
    for (var i = 0; i < word.length; i++) {
        blankWord = blankWord + "_ "; 
      }
    return(blankWord);
}
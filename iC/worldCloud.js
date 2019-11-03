class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {

    // Count the frequency of each word
    const wordsToCount = new Map(); 
    let split = inputString.toLowerCase().split(" "); 
//    i = i.replace(/\W/g, ''); 
   function addToMap(word){
    const  i = word.replace(/\W/g, ''); 
    if (wordsToCount.has(i)){
      wordsToCount.set(word, wordsToCount.get(word)+1); 
    } else {
      wordsToCount.set(word, 1);
    }
    console.log(wordsToCount)
      return wordsToCount;

   }
  }
addToMap(); 
}



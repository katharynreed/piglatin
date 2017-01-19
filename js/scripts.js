var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = function(phraseArray) {
  // vowelsIndex is a positive number if first letter in phraseArray is a vowel
  //Otherwise vowelsIndex is -1
  var vowelsIndex = vowels.indexOf(phraseArray[0]);

  //If vowelsIndex is not -1, first letter in phraseArray IS a vowel, then..
  if (vowelsIndex !== -1) {
    phraseArray.push(vowels[vowelsIndex]); //push first letter (vowel) to end of array
    phraseArray.push("a"); //add an 'a' to the end of the array
    phraseArray.shift(); //remove first letter (vowel) from the beginning of array
    return phraseArray; //return pigLatin word
  }

  //If above doesn't return, then first letter is not a vowel
  //For each letter in phraseArray...
  for (var i = 0; i < phraseArray.length; i++) {

    //if the current letter is a vowel
    if(vowels.indexOf(phraseArray[0]) !== -1) {
      phraseArray.push("a"); //push an 'a' to the end of phraseArray
      return phraseArray; //end loop by returning phraseArray
    }

    //Otherwise, push current first letter to the end of the array
    phraseArray.push(phraseArray[0]);
    phraseArray.splice(0, 1); //remove current first letter
  }

  //if the loops ends (when the 'if' on line 21 is True -- we found a vowel)
  phraseArray.push("a"); //push an 'a' to the end of the array
  return phraseArray; //return pigLatin word
};

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var phraseString = $("input#phrase").val();
    var phraseArray = phraseString.split("");
    var pigLatinWord = pigLatin(phraseArray).join("");
    $(".translation").text(pigLatinWord);
    $("#translation").show();
  });
});

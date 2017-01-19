var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = function(phraseArray) {
  var vowelsIndex = vowels.indexOf(phraseArray[0]);
  if (vowelsIndex !== -1) {
    phraseArray.push(vowels[vowelsIndex]);
    phraseArray.push("a");
    phraseArray.shift();
    return phraseArray;
  }

  for (var i = 0; i < phraseArray.length; i++) {
    if(vowels.indexOf(phraseArray[0]) !== -1) {
      phraseArray.push("a");
      return phraseArray;
    }

    phraseArray.push(phraseArray[i]);
    phraseArray.splice(i, 1);
  }
  
  phraseArray.push("a");
  return phraseArray;
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

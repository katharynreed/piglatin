$(document).ready(function() {


  var vowel = ["a", "e", "i", "o", "u"];
  var cons = "bcdfghjklmnprstvwxyzBCDFGHJKLMNPRSTVWXYZ".split("");
  var vowelFinder = function(phraseArray) {
    for (var phraseIndex = 0; phraseIndex < phraseArray.length; phraseIndex +=1){
      for (var vowelIndex = 0; vowelIndex < vowel.length; vowelIndex += 1) {
        if (phraseArray[phraseIndex] === vowel[vowelIndex]) {
          return true;
        } else {
          // return false;
        };
      };
    };
  };


  var consFinder = function(phraseArray) {
    if(phraseArray[0] === cons) {
      return true;
    } else {
      return false;
    };
  };

  var pigLatin = function(phraseArray, phraseString) {
    alert("hey!");
    if (vowelFinder(phraseArray) === true) {
        phraseString = phraseString + "ay"
        return phraseString
    // } else if (consFinder === true) {
    //   (phraseArray[0,1,2].append()).concat("ay");
    };
  };
  $("form#piglatin").submit(function(event) {
  event.preventDefault();
  var phraseString = $("input#phrase").val();
  var phraseArray = phraseString.split("");
  alert("phraseString: " + phraseString);
  alert("phraseArray: " + phraseArray);
  $(".translation").text(pigLatin(phraseArray, phraseString));
  $("#translation").show();
});
});






// $(document).ready(function() {
// $("form#piglatin").submit(function(event) {
// event.preventDefault();
// var phrase = ($("input#phrase"));
// var translation = "help me";
// $("#translation").show();
// });
// });

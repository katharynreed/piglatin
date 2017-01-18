$(document).ready(function() {


  var vowel = ["a", "e", "i", "o", "u"];
  var cons = "bcdfghjklmnprstvwxyzBCDFGHJKLMNPRSTVWXYZ".split("");
  var vowelFinder = function(phraseArray) {
    if (phraseArray[0] === vowel) {
      return true;
    } else {
      return false;
    };
  };

  var consFinder = function(phraseArray) {
    if(phraseArray[0] === cons) {
      return true;
    } else {
      return false;
    };
  };

  var pigLatin = function(phraseArray) {
    if (vowelFinder === true) {
      return phraseString + "ay"
    //   $(".translation").text(phrase.concat("ay"));
    //   $(".translation").show();
    // } else if (consFinder === true) {
    //   (phraseArray[0,1,2].append()).concat("ay");
    // }
  };
  $("form#piglatin").submit(function(event) {
  event.preventDefault();
  var phraseString = $("input#phrase").val();
  var phraseArray = phraseString.split("");
  alert("phraseString: " + phraseString);
  alert("phraseArray: " + phraseArray);
  $(".translation").text(pigLatin(phraseArray));
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

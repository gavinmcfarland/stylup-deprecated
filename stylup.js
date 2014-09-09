
var string = "[something] @small(something) Something @something([something something])";


function parse(string) {

  // This joins several regexes and turns them into one regex

  function joinRe() {
    var tokens = {
      context  : /@.+?\(.+?\)/,
      method   : /\[.+?\]/,
      object   : /[\w]+/
    };

    var array = [];

    Object.keys(tokens).forEach(function(key) {
      array.push(tokens[key].source);
    });

    return "(" + array.join("|") + ")";

  }

  // This creates an array using the full regex

  function makeArray(string) {
    var pattern = new RegExp(joinRe(), "g");

    var array = [];

    string.replace(pattern, function(match, p1, p2, p3){
      if(p1) array.push(p1);
    });

    return array;
  }

  // Test: Trying to check each string in array for whether it is a context, method or object.

  var newArray = makeArray(string);

  for(var i = 0; i < newArray.length; i++) {
    if(newArray[i] == "@small(something)") {
      // Just a test to replace string in array
      newArray[i] = newArray[i].replace(/@(.+?)\((.+?)\)/g, "$2-$1");
      console.log(newArray[i]);
    }
  }

  return newArray;



}


console.log(parse(string));




















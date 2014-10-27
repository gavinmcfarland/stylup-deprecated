var token = {
    query: /@(\w+)\((.+?)\)/gim,
    property: /\[([\w-]+)\s([\w\s/!:@-]+)\]/gim,
    shortQuery: /([\w-:/]+)@([\w!]+)/gim,
    normal: /[\w-/]+/gmi
};

var makeRegex = function() {

  var array = [];

  Object.keys(token).forEach(function(key) {
    array.push(token[key].source);
  });

  var regex = array.join("|");

  return new RegExp(regex, "gmi");

};

var split = function(input) {
  return input.match(makeRegex());
};

var parse = function(input) {
  var array, htmlClass, item, output, output, _i, _j, _a, _len, _len1, len2;

  array = split(input);

  output = [];

  for (_i = 0, _len = array.length; _i < _len; _i++) {
    item = array[_i];

    input = item;

    // 1.0
    if (input.match(token.query)) {

      input.replace(token.query, function(match, p1, p2) {

        var htmlClass, query;
        query = p1;
        input = p2;

        input = split(input);

        for(var _g = 0; _g < input.length; _g++) {

         // 1.1
         if (input[_g].match(token.property)) {

          input[_g].replace(token.property, function(match, p1, p2) {
            var htmlClass, values;
            htmlClass = p1;
            values = p2;

            var values = split(values);


            for(var _z = 0; _z < values.length; _z++) {

              output.push({
                htmlClass: htmlClass,
                value: values[_z],
                query: query
              });
            }
          });
        }

        // 1.2
        else {
          output.push({
            htmlClass: input[_g],
            query: query
          });
        }

        }

      });
    }

    // 2.0
    else if (input.match(token.property)) {

      input.replace(token.property, function(match, p1, p2) {
        var htmlClass, values;
        htmlClass = p1;
        input = p2;
        input = split(input);


        for(var _d = 0; _d < input.length; _d++) {

          // 2.1
          if (input[_d].match(token.shortQuery)) {
            input[_d].replace(token.shortQuery, function(match, p1, p2) {
              var query, values;
              values = p1;
              query = p2;
              output.push({
                htmlClass: htmlClass,
                value: values,
                query: query
              });
            });
          }

          // 2.2
          else {
            output.push({
              htmlClass: htmlClass,
              value: input[_d]
            });
          }
        }
      });
    }

    // 3.0
    else if (input.match(token.shortQuery)) {
      input.replace(token.shortQuery, function(match, p1, p2) {
        var htmlClass, query;
        htmlClass = p1;
        query = p2;
        return output.push({
          htmlClass: htmlClass,
          query: query
        });
      });
    }

    // 4.0
    else {
      htmlClass = input;
      output.push({
        htmlClass: htmlClass
      });
    }
  }

  return render(output);
};


var render = function(input) {
  var output = [];

  for (var i = 0; i < input.length; i++) {
    var object = input[i];

    var array = [];
    for (var property in object) {
      if (object.hasOwnProperty(property)){
        array.push(object[property]);
      }
    }

    array = array.join("-");
    output.push(array);
  }

  return output.join(' ');

};

var stylup = function() {
  elementList = document.querySelectorAll("[class]");

  for (_i = 0, _len = elementList.length; _i < _len; _i++) {
    item = elementList[_i];

    item.className = parse(item.className);
  }
};

stylup();

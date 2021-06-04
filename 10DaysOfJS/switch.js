// return the category of string belongs
//based on 1st character of string

function getLetter(s) {
  let letter;
  // Write your code here
  let firstCharcterOfString = s[0];
  switch (firstCharcterOfString) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    default:
      letter = "D";
  }

  return letter;
}

console.log(getLetter("ndfgt"));

var assert = require("assert");

/*
  Straight from Wikipedia:

  I = 1
  V = 5
  X = 10
  L = 50
  C = 100
  D = 500
  M = 1000

  Numbers are formed by combining symbols and adding the values,
  so II is two (two ones) and XIII is thirteen (a ten and three ones).

  There is no zero in this system and characters do not represent tens,
  hundreds and so on according to position as in 207 or 1066;
  those numbers are written as CCVII (two hundreds, a five and two ones)
  and MLXVI (a thousand, a fifty, a ten, a five and a one).

  Symbols are placed from left to right in order of value, starting with the largest.
  However, in a few specific cases, to avoid four characters being repeated
  in succession (such as IIII or XXXX), subtractive notation is often used as
  follows:

    - I placed before V or X indicates one less, so four is IV (one less than five) and nine is IX (one less than ten)
    - X placed before L or C indicates ten less, so forty is XL (ten less than fifty) and ninety is XC (ten less than a hundred)
    - C placed before D or M indicates a hundred less, so four hundred is CD (a hundred less than five hundred) and nine hundred is CM (a hundred less than a thousand)

  For example:

    - MCMIV is 1904 (M is a thousand, CM is nine hundred and IV is four)
    - 1954 is MCMLIV
    - 1990 is MCMXC
    - 2014 is MMXIV
*/

function parseRomanNumeral(rn) {
  const conversion = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
  var splitRoman = rn.split('');
  let returnint=0;
  for(i=0; i<splitRoman.length;i++){
    existing = splitRoman[i];
    existingValue = conversion[existing];
    nextValue = splitRoman[i+1];
    nextInt = conversion[nextValue];

    if(existingValue < nextInt){//if existing roman value int is less than next roman value integer
    returnint -= existingValue;
    }
    else{
      returnint += existingValue;
    }
  }
  console.log(splitRoman);
  return returnint;
}

describe('Roman Numeral Parser', function() {
  it('should do simple parsing', function() {
    assert.equal(1990, parseRomanNumeral('MCMXC'));
  });
});

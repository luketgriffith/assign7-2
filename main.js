// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if(a>b){
      return a;
    } else if(a<b){
      return b;
    } else {
      return 'they are equal';
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if(a>b && a>c){
      return a;
    } else if(b>a && b>c){
      return b;
    } else if(c>a && c>b){
      return c;
    } else{
      return 'none are largest';
    };
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a'){
      return true;
    } else if (char === 'e'){
      return true;
    } else if (char === 'i'){
       return true;
    } else if(char ==='o'){
      return true;
    } else if(char==='u'){
      return true;
    } else {
      return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
var finalArray=[]
function rovarspraket(phrase){
    var array = phrase.split('');
    // return new array of text;
    array.filter(function(letter){
        if(letter=='b' ||letter=='c'||letter=='d'||letter=='f'||letter=='g'||letter=='h'||letter=='j'||letter=='k'||letter==='l'||letter==='m'||letter==='n'||letter==='p'||letter=='q'||letter==='r'||letter==='s'||letter==='t'||letter==='v'||letter==='w'||letter==='x'||letter==='y'||letter==='z') {
          finalArray.push(letter+'o'+letter);
        } else {
          finalArray.push(letter);
        };

        // console.log('meow')
    });
    var word= finalArray.join('');
    return word;

};   
 

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(s){
     return s.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------


var wordArray = ['hi', 'hit', 'hill'] //random array

var findLongestWord= function(words){
  var word = words.reduce(function(a, b){ 
    if(a.length>b.length){
      return a;
    } else {
      return b;
    }
 }); 
  return word;
}



// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
var array1 = ['hi', 'hit', 'hill',] //random array
var array2 = []
function filterLongWords(words, i){
    var word = words.forEach(function(a){
      if(a.length > i){
        array2.push(a);
      } else {
        console.log('meow');
      }
    });
     return word;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
var obj= {}

function charFreq(string){
 var eachLetter = string.split("").sort("").join("");
 var eachLetter2= eachLetter.split('');
 // return eachLetter2;
 eachLetter2.map(function(a){
  if (a in obj) {obj[a] ++;
  } else { 
    obj[a]=1};
 })

 
};

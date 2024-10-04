/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
"This is an example!" ==> "sihT si na !elpmaxe"

entrée : string
sortie : faire un reverse de la phrase
contraintes : 
dans le bon ordre avec un espace entre chaque mot
 */

function reverseWords(str) {
    // Go for it
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
  }

  console.log(reverseWords("This is my place!"))
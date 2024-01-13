let generateButton = document.getElementById("generate-button");
let outputFirst = document.getElementById("outputFirst");
let outputSecond = document.getElementById("outputSecond");
let outputThird = document.getElementById("outputThird");


/*
var firstRandom = getRandomNumber(firstColumn.length - 1);
var secondRandom = getRandomNumber(secondColumn.length - 1);
var thirdRandom = getRandomNumber(thirdColumn.length - 1);
*/
let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);
let num3 = Math.floor(Math.random() * 11);

let firstColumn = [
    "Use the 1st string (E) only.", 
    "Use the 2nd string (B) only.",
    "Use the 3rd string (G) only.",
    "Use the 4th string (D) only.",
    "Use the 5th string (A) only.",
    "Use the 6th string (E) only.",
    "Use Double stops only.",
    "Use top 3 strings.",
    "Use Bottom 3 strings.",
    "Use no adjacent strings (Always skip if changing strings).",
    "Use No string restrictions."];

let secondColumn = [
    "Focus on your pointer finger",
    "Focus on your middle finger",
    "Focus on your ring finger",
    "Focus on your pinky finger",
    "Focus on picking every note",
    "Focus on picking few notes",
    "Focus on slides",
    "Focus on bends",
    "Focus on hammer ons",
    "Focus on open strings",
    "Focus on nothing"];

let thirdColumn = [
    "In the key of B or C (Your Choice)",
    "In the key of C#/Db.",
    "In the key of D.",
    "In the key of D#/Eb.",
    "In the key of E.",
    "In the key of F.",
    "In the key of F#/Gb.",
    "In the key of G.",
    "In the key of G#/Ab.",
    "In the key of A.",
    "In the key of A#/Bb."]

function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

/**
 * The main prompt generator
 */

generateButton.addEventListener("click", function() {
    var randomFirstColumn = firstColumn[Math.floor(Math.random() * firstColumn.length)]
    outputFirst.innerHTML = randomFirstColumn;
    var randomSecondColumn = secondColumn[Math.floor(Math.random() * secondColumn.length)]
    outputSecond.innerHTML = randomSecondColumn;
    var randomThirdColumn = thirdColumn[Math.floor(Math.random() * thirdColumn.length)]
    outputThird.innerHTML = randomThirdColumn;
})


    




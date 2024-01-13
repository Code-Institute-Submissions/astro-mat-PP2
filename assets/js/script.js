


var firstRandom = getRandomNumber(firstColumn.length - 1);
var secondRandom = getRandomNumber(secondColumn.length - 1);
var thirdRandom = getRandomNumber(thirdColumn.length - 1);

let firstColumn = [
    "1st string E only", 
    "2nd string B only",
    "3rd string G only",
    "4th string D only",
    "5th string A only",
    "6th string E only",
    "Double stops only",
    "top 3 strings",
    "Bottom 3 strings",
    "no adjacent strings (Always skip if changing strings)",
    "No string restrictions"];

let secondColumn = [
    "your pointer finger",
    "your middle finger",
    "your ring finger",
    "your pinky finger",
    "picking every note",
    "picking few notes",
    "slides",
    "bends",
    "hammer on's",
    "open strings",
    "nothing"]

let thirdColumn = [
    "B or C (Your Choice)",
    "C#/Db.",
    "D.",
    "D#/Eb.",
    "E.",
    "F.",
    "F#/Gb.",
    "G.",
    "G#/Ab.",
    "A.",
    "A#/Bb."]

function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }



function generatePrompt() {
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 11);
    let num3 = Math.floor(Math.random() * 11);
    alert("you clicked the button");
    }
    




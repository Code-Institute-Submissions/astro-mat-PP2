

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

var firstRandom = getRandomNumber(firstColumn.length - 1);

firstColumn = [
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

$('.body_name h1').text(firstColumn[firstRandom] + '' + secondColumn[secondRandom] + '' + thirdColumn[thirdRandom]);

console.log();

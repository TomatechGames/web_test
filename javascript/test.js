var x = 69;
var y = 420;

var customText = "yee";

alert("you're computer has virus #" + (y % x));

var gradeString = prompt("Enter grade from 0-100")
var gradeNumber = parseInt(gradeString);

document.write("<b>Grade: ");

if (gradeNumber < 39) {
    document.write("Fail");
} else if (gradeNumber < 54) {
    document.write("Pass");
} else if (gradeNumber < 74) {
    document.write("Merit");
} else if (gradeNumber < 100) {
    document.write("Distinction");
} else {
    document.write("Cheater");
}
document.write("</b>");

function bruh(bruhText) {
    alert("bruh: " + bruhText);
}
function calculate(a, b, c) {
    var result = (Math.pow(b, 2) - Math.PI) / (Math.abs(a - 4)) + 7 * Math.sqrt(c + Math.PI);
    return result;
  }

  function showResult() {
    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);
    var c = parseFloat(document.getElementById('inputC').value);

    var result = calculate(a, b, c);

    alert("Результат: " + result);
}
function show(){
  var s1 = "Я будущий программист";
var s2 = "У меня всё получится";

var s2Length = s2.length;

var fourteenthChar = s1.charAt(13); 
var charCode = s1.charCodeAt(13); 

var modifiedS1 = s1.replace(/у/g, "!"); 

alert("Длина строки s2: " + s2Length);
alert("14-й символ строки s1: " + fourteenthChar);
alert("ASCII-код 14-го символа строки s1: " + charCode);
alert("Модифицированная строка s1: " + modifiedS1);
}



var global_valfield;
var classdata = new Array(10);

function setfocus(valfield) {
  // save valfield in global variable so value retained when routine exits
  global_valfield = valfield;
  setTimeout( 'setFocusDelayed()', 100 );
}

function setFocusDelayed() {
  global_valfield.focus();
}

function setup() {
  document.statistics.resultdata.value="";


  classdata[0] = "Jane Doe,80,75,90,87";
  classdata[1] = "John Doe,70,65,60,70";
  classdata[2] = "Jack Smith,80,80,90,83";
  classdata[3] = "Jen Smith,90,70,60,75";
  classdata[4] = "Fred Ryan,90,90,86,80";
  classdata[5] = "Chris Martin,40,50,35,40";
  classdata[6] = "Fiona Rowe,50,30,45,45";
  classdata[7] = "Mike Smith,70,90,65,78";
  classdata[8] = "Mary Ryan,85,95,83,75";
  classdata[9] = "Jack Walsh,65,80,73,60";

  for (i in classdata) {

 var record = classdata[i].split(",");
 var ca1 = parseInt(record[1],10);
 var ca2 = parseInt(record[2],10);
 var ca3 = parseInt(record[3],10);
 var exam = parseInt(record[4],10);

 var catotal = (ca1 + ca2 + ca3)/3;
 var total = exam * .5 + catotal * .5;

 document.statistics.resultdata.value += record[0] + ": "+ Math.round(total) + "\n";
  }
}

function isFilledNum(field) {

var num = field.value;

field.value = num;

if(isNaN(num) || num < 0 || num > 100 || num == null)
 {
  alert("The input was not a valid number in the range 0 - 100 ");

  field.value = "0";
  field.focus();
 }
}

function isFilled(field) {

var name = field.value;

if (name ==null || name.length == 0 || name == "")
    {
      alert("The input was not a valid Name ");

      field.value="";
      field.focus();
    }
    return name;
}

function getData() {
if (document.getElementById("name").value=="") {
  alert("you cannot have a blank name");
document.getElementById("name").focus();
}
else {

record = document.getElementById("name").value;
ca1 = document.getElementById("mark1").value;
ca2 = document.getElementById("mark2").value;
ca3 = document.getElementById("mark3").value;
exam = document.getElementById("mark4").value;

var data = record + "," + mark1.value + "," + mark2.value + "," + mark3.value + "," + mark4.value;

classdata.push(data);

setup();
}
}

function getResult() {

var info = parseInt(prompt("Enter the student number", ""));

while(info < 0 || info > classdata.length-1)
{
alert("Invalid choice");

info = parseInt(prompt("Enter the student number", ""));
}


var display = classdata[info].split(",");

display[1]=parseInt(display[1]);

display[2]=parseInt(display[2]);

display[3]=parseInt(display[3]);

display[4]=parseInt(display[4]);

catotal = (display[1]+display[2]+display[3])/3;

total = display[4] * .5 + catotal * .5;

alert(display[0] + "\nMidterm Mark: " + Math.round(catotal) + "\nExam Mark: " + display[4] + "\nOverall Result: " +  Math.round(total));
}


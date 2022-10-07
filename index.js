// While Loop // Project 23: Get Value from User
var count= prompt("Enter the Value:");
document.write("Loop Started" + "<br />");
while (count < 5){
    document.write("Count : " + count + "<br />");
    count++;
}     
document.write("Loop is terminated" + "<br />");
document.write("<br />")

// While Loop // Project 24: Get the Marks from User
var Total= 0;
var count=0;
document.write("Loop Started" + "<br />");
while (count < 5){
    var Marks= prompt("Enter the Marks:")
    Total= Total+parseInt(Marks)
    document.write("Count: " + count);
    count++;
    document.write("<br />")
}
document.write("Total Marks is: " + Total + "<br/ >")     
document.write("Loop is terminated" + "<br />");

/* // Do While Loop
var i = 0;
document.write("<br />")        
document.write("Loop is Started again:" + "<br />");
do {
    document.write("Count : " + i + "<br />");
    i++;
}
while (i <= 7);
document.write ("Loop is terminated." + "<br />");
// For Loop
var i;
document.write("<br />")
document.write("Loop is Started:" + "<br />");
for(i = 0; i <= 8; i++) {
    document.write("Count :" + i );
    document.write("<br />");
}         
document.write("Loop is terminated"); */
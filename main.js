//Find the Sum of numbers in an array and find average also
document.write("Find the Sum of numbers in an array and find average also"+"<br>");
document.write("---------------------------------------------------------"+"<br>");

var a=[10,20,5,9,8,3];
var b=0;
var x;
document.write("The array elements are:"+a+"<br>");
document.write("The counts of array elemente are:"+a.length+"<br>");

for(let i=0;i<a.length;i++){
     b=b+a[i];
     x=b/a.length;
}
document.write("The sum of array value is:"+b+"<br>");
document.write("The average value is:"+x);
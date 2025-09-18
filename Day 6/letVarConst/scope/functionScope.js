function fun(){
var a=20;
var b =30;
const pi =3.14;
console.log("block scope",a);
console.log("value of a inside the function",a);
console.log("value of b inside the function",b);
console.log("value of pi inside the function",pi);
}
fun();
 function callValues(a,b,c){
    console.log("outside Function");
    console.log("value of a outside the function",a);
    console.log("value of b outside the function",b);
     console.log("value of c outside the function",c);

 }
 
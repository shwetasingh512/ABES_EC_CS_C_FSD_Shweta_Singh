{
    var a=20;
var b =30;
const pi =3.14;
console.log("Global scope",a);
console.log("value of a in global scope",a);
console.log("value of b in global scope",b);
console.log("value of pi in global scope",pi);
}
 function callValues(a,b,c){
    console.log("Inside Function");
    console.log("value of a in global scope",a);
    console.log("value of b in global scope",b);//error
     console.log("value of c in global scope",c);//error

 
 }
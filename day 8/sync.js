

// const syyscFun =() =>{
//     for (let i = 0; i < 900000000000; i++) {
//         console.log(i);
//     }

// }
const waitForSomeTime = (time) =>{
    const start = Date.now();
    
    while(Date.now() - start < time){
      end = new Date().getTime();
   }
}
const syncUsingTimer = () =>{
    waitForSomeTime(5000);
    console.log("after waiting");
}
syncUsingTimer();
console.log("end");

const asyncUsingTimer =() =>{
    setTimeout(() => {
        console.log("after waiting");
    }, 5000);

}
console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");

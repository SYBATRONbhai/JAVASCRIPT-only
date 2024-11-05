// for

for (let r = 0; r <= 10; r++) {
    const element = r;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected Unwanted number!!!`);
        console.log(`I won't print ${index}`);
        continue
    }
    if (index == 13) {
        console.log(`Unlucky number!!!`);
        console.log(`I won't print ${index}`);
        continue
    }
    if (index == 18) {
        console.log(`Virat Kholi!!!`);
        console.log(`I won't print ${index}`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
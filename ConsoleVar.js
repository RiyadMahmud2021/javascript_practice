// // var rmr="Riyad";
// // console.log(rmr);


// /////
// //var    //working capability isn't in a block
// ////

// if(true){
//     var varVariable = "This is var";
// }
// console.log(varVariable);

// /////
// //let   ////working capability is in a block
// /////

// if(true){
//     let letVariable = "This is let";
// }
// console.log(letVariable);

/////
//const  ////same name object couldn't be redeclared,here such as no more "constVariable" but can rename object elements
         //working capability is in a block 
///// 
if(true){
    const constVariable = {
        name: "Javascript",
        age:"25 years"
    };
    constVariable.name = "JS";
    console.log(constVariable);
}
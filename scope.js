//General Concept of scope in Function in any Programming Language,child no need parents but parents no need child,separate
////////////////////////////////////////////////////////////////


// var x = 25;
// // parent area

// function childFun(){

//     //child area
     
//     var y = 10;


// }
// console.log(x);

///////////////////////////////////////////////////////////////////
//Javascript Concept of scope in Function,child can access parents but parents no need,family oriented
///////////////////////////////////////////////////////////////////

var x = 25;
// parent area

function childFun(){

    //child area
     
    var y = 10;
    console.log(`${x} from childFun`);

}
childFun();
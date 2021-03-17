var billGates = {
 
    shirt: true,
    shirtColor:"offWhite",
    smile:true,
    swatter:true,
    swatterColor: "gray",
    chosma: true

}
var billGatesPro = {

    shirt:{
        color:"offWhite",
        Quality:"Good",
        price:"200 USD",
    },

    swatter:{
        color:"gray",
        Quality:"Good",
        price:"240 USD",
        warm:"Best",
    },

    face:{
        smiling:"Yes",
        chosma:"Yes",
        teeth:"white",
    }
}
console.log(billGates['shirtColor']);
console.log(billGatesPro['shirt'],billGatesPro['shirt']['price']); //note: having a comma
console.log(billGatesPro['shirt'] ['price']); //note: no comma

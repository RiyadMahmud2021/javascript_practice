// Important Note:1.No need not to call a Constructon function for result, it will call automatically
// Important Note:2.Class name and function name contains same
// Important Note:3.No return type,it's an special function
// Important Note:4.In javascript no need to write construction function name,we need to write only class name ... for fucntion we need to write "Construction" as sysntax.
// Important Note:5.Can pass paremeter when object will be created such as  "var Riyad = new AUser("Riyad","Mahmud","24");""




// // constructor with paremeter
// //------------------------------------
class AUser{

constructor(myfirstname,mylastname,myage){

    this.myfirstname = myfirstname;
    this.mylastname = mylastname;
    this.myage = myage;

}
 

}

var Riyad = new AUser("Riyad","Mahmud","24");
console.log(Riyad);

//-------------------------------------

// // constructor with paremeter and a functon 
// //------------------------------------
// class AUser{

//     constructor(myfirstname,mylastname,myage){
    
//         this.myfirstname = myfirstname;
//         this.mylastname = mylastname;
//         this.myage = myage;
    
//     }
     
//     getmyfullName(){

//       // var fullname =  `${this.myfirstname} ${this.mylastname} is my full ................. `; //Here use backtrick  not "" or ' '............
//         return `${this.myfirstname} ${this.mylastname} is my full ................. `;

//     }
//     }
    
//     var Riyad = new AUser("Riyad","Mahmud","24");
//     console.log(Riyad);
//     console.log(Riyad.getmyfullName());

    
// //-------------------------------------


//  // constructor with paremeter and  functons(Repalceing and adding news information)   
//  //------------------------------------
// class AUser{

//     constructor(myfirstname,mylastname,myage){
    
//         this.myfirstname = myfirstname;
//         this.mylastname = mylastname;
//         this.myage = myage;
    
//     }
     
//     getmyfullName(){

//       // var fullname =  `${this.myfirstname} ${this.mylastname} is my full ................. `; //Here use backtrick  not "" or ' '............
//         return `${this.myfirstname} ${this.mylastname} is my full name ................. `;

//     }
//     editName(newname){
//        // how to add other names and edit name // কিভাবে অন্য নাম যুক্ত করা হচ্ছে বা এডিট করা হচ্ছে
       
//         var othername = newname.split(' '); //split method used to add extra strimg or edit string
//         this.myfirstname = othername [0];
//         this.mylastname = othername [1];
       

//     }
//     getMiddlenameToo(midnewname){

//         var anothername = midnewname.split(' '); 
//         this.myfirstname = this.myfirstname + ' ' + anothername;

//     }
//     }
    
//     var Riyad = new AUser("Riyad","Mahmud","24");
//     console.log(Riyad);
//     console.log(Riyad.getmyfullName());
//     Riyad.editName('Riyad Rokon');
//     console.log(Riyad.getmyfullName());
//     Riyad.getMiddlenameToo('Mahmud');
//     console.log(Riyad.getmyfullName());
// //Here we haven't called construction function,but called other functions
    
// //-------------------------------------
    
    
    
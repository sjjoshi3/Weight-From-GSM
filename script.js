


document.getElementById("calculate").addEventListener("click", function (){

    var bill  = Number(document.getElementById("bill").value);
    var length  = Number(document.getElementById("length").value);
    var width  = Number(document.getElementById("width").value);
    var service = Number(document.getElementById("service").value);
    var result =  document.getElementById("result");
    let sq_Meter = ((length+service)*(width+service)/10000) ;
    
    let finalResult = ((bill)*sq_Meter);
    
    result.innerHTML= "GSM - "+finalResult;
    
    

});




// function greet(){
//     console.log("HI, thanks for chossing VKP");
// }

// greet();


// function greet(name){
    
//     console.log(`HI, ${name} Welcome Back`);
// }

// greet('Abhijeet');

// function greet(){
    
//     return `HI Welcome Back`;
// }


// console.log(greet()+" ABC");

// function arrayAverage(a){
    
      
//       let sum = 0;
//       let aLength = a.length;
//       for (let i = 0; i<aLength; i++){
//        sum += a[i];
//       }

//       return sum/aLength;
// }



// let ap = [2,3,4,5,6]
// let kp = arrayAverage(ap);
// let kpl = ap.length;

// console.log(`The Average Of Array Is ${kp}`);
// console.log(`The Length Of Array Is ${kpl}`);



//Object 

// function MPL (emp_ID, emp_Name, emp_Salary){
//     this.emp_ID = emp_ID;
   
//    this.emp_Name = emp_Name;
   
//     this.emp_Salary = emp_Salary;
// }

// let Amit = new MPL ("MPL_1090","Amit", "Rs. 40000");

// let Anjaly = new MPL("MPL_1096", "Anjaly", "Rs. 9000");

// let Mukesh = new MPL("MPL_1140", "Mukesh", "Rs. 20000");


// console.log(Amit);
// console.log(Mukesh);
// console.log(Anjaly);


// let pencile = {Product_ID : "Pencile_121", Price :"Rs. 10", Brand : "HP", PencileSize : [12,10,9,7,8,5,2,1]};

// console.log(pencile.Brand+"\n"+pencile.PencileSize[2]);

// function findingVowels(str){

//     let countVowels = 0;
//     let vowelsAre = [];
//     let stringLength = str.length;
//     for(let i=0; i<stringLength; i++)
//     {
//         if(str[i] === 'i'|| str[i] == 'I'|| str[i] ===  'a' || str[i] =='A' || str[i] === 'e' || str[i] === 'E'|| str[i] === 'o'|| str[i] == 'O'|| str[i] === 'u'|| str[i]=== 'U')
//         {
//             countVowels += 1;
//             vowelsAre.push(str[i]);

//         }
//     }

//     console.log(`Vowels In The Given Strings Are ${vowelsAre}`);

//     console.log(`Total Number Of Vowels Are ${countVowels}`);

//     console.log(str);
// }

// findingVowels(prompt("Enter Your String.!"));


// let fruits  = {
//     mango:"You are So Lucky, Please Take Mango As Per Your Need!",
//     banana:"You are So Lucky, Please Take Banana As Per Your Need!",
//     pupaya:"Please Try After Some Time." 
// }

// let fruiteNameByUser = prompt("Enter Your Favourite, If it's in my Basket. I will give you totally free");

// console.log(fruiteNameByUser);

// console.log(fruits[fruiteNameByUser]);

// const myStr = "I am a \"doule quoted\" string inside \"double quotes\""; // Change this line

// console.log(myStr);

// Declare the myGlobal variable below this line
// Setup

//Queue First In First Out.
// index #s = 0,1,2,3,4
// Setup


// function testGreaterThan(val) {
//     if (val> 100 && val< 150) {  // Change this line
//       return "Over 100";
//     }
  
//     if (val>10 && val< 100) {  // Change this line
//       return "Over 10";
//     }
//    if (val >0 && val <11){
//     return "10 or Under";
//   }
  
//   }
  
//   console.log(testGreaterThan(113));

// Setup
function abTest(a, b) {
    // Only change code below this line
  
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(2,2));
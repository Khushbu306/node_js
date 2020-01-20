// var person = function(a,b){
//     var c=a+b;
//     console.log("addition of a and b = "+c)
// }
// person(4,5);


// arrow function
var name="khushbu";
var users=(a,b)=>{
    var c = a+b;
    console.log("addition of "+a+" and "+b+" = "+c);
}
users(4,5);

module.exports.name=name;
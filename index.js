G.Mani
What is method ?
Object kulla function iruntha method


console.log('Hello this is Javascript');
// alert('Javascript');

//var 

var name = "Surendhar";
var msg = " Hello my name is " + name + "Mani";
console.log(msg);
//OUTPUT: Hello my name is SurendharMani
let hello="Mani";
console.log(hello);
//OUTPUT:Mani
const abc ="Kangaroo";
const msg1 = " Hello my name is " + abc + "from Austraila";
console.log(msg1);

//OUTPUT:Hello my name is Kangaroofrom Austraila

//Object

let person = {

    name:"chinna",
    age:36,
    gender:"Male"

}
console.log(person);
//OUTPUT:{name: 'chinna', age: 36, gender: 'Male'}

//Dot notation
let person1 = {

    name:"chinna",
    age:36,
    gender:"Male"

}
console.log(person1.name);
//OUTPUT:chinna


//Bracket Notation
console.log(person['name']);
//OUTPUT:chinna

//another example for object
let person3 = {

    name:"chinna",
    age:36,
    gender:"Male",
    siblings:{
        brother:'Akilan',
        sister:'Jayendri'

    }

}
console.log(person3.siblings.brother);
//OUTPUT:Akilan

//Array
// let favcolor=['red','green','yellow'];
// console.log(favcolor[0]);
// //OUTPUT:red
let favcolor=['red','green','yellow'];
favcolor[4]=45;
console.log(favcolor.length);
//OUTPUT:5

//Function
function greetUser(){
    let name= "Mani";
    let msg = "Hello Everyone My Dad name is" +name + ".";
    console.log(msg);
}
greetUser();

//Function with Parameter
//Function
function greetUser1(firstname,lastname){
   // let name= "Mani";
    let msg = "Hello my name is" +firstname + " " +lastname+ ".";;
    console.log(msg);
}
greetUser1("chinna", "Mani") //argument greetUser ulla irukurathu 
greetUser1("surendhar", "Mani")

//OOPS

let person={
    name:'Chinna',
    age:36,
    address:"Egmore",
    Dad:['Mani'],
    greet: function(){
    
    let msg=`My name is ${this.name} and my father name is ${this.Dad}`;
    console.log(msg);
    }
    
    };
    (person.greet());

    //OUTPUT: My name is chinna and my father name is Mani


    //Factory Function with dynamic name

    function creatPerson(name){
        return {
        name: name,
        greeting(){
        let msg = `my name is ${this.name}`;
        console.log(msg);
        }
        }
        };
        let hello = creatPerson("Chinna");
        hello.greeting();

        //OUTPUT: my name is chinna

        //create dynamic object with name
        const person={
            name : "Chinna",
            }
            person.age=36;
            console.log(person);

            //OUTPUT:name:chinna, age:36

//find a element in reference array

const orders = [
    { id:1, item:'Maggi', quantity:3},
    { id:2, item:'Egg', quantity:6},
]

let result = orders.find(function() {
    return orders.item === 'maggi'
})
 console.log(result);

 //output: 1

 //forof
 const dailyroutine =["wake up","eat","sleep"];
 for(let routine of dailyroutine){
    console.log(routine);
 }
 //OUTPUT:wake up
 //eat
 //sleep

 //forin
 const dailyroutine1 =["wake up","eat","sleep"];
 for(let routine1 in dailyroutine){
    console.log(routine1, dailyroutine1[routine1]);
 }
//output:
//0
//1
//2

//join

const dailyroutine = ["wake up","eat","sleep"];
let dailyroutines = dailyroutine.join(', ');
console.log(dailyroutines);
//output
//wakeup, eat, sleep

//array split wit comma seperated
let fullName = "Chinna Mani";
let name = fullName.split(" ");
console.log(name);

//Output: Chinna, Mani

// filter array it give list
const mobile =[
    { id:1, name:"RMS", age:"72"},
    { id:2, name:"CCC", age:"36"},
    { id:3, name:"Bhavan", age:"4"},
    ]
    let show = mobile.filter((value) => value.age >4);
    console.log(show);
    //output: 
//     [{
//   age: "72",
//   id: 1,
//   name: "RMS"
// }, {
//   age: "36",
//   id: 2,
//   name: "CCC"
// }]

//find
// filter array it gave value
const mobile =[
    { id:1, name:"RMS", age:"72"},
    { id:2, name:"CCC", age:"36"},
    { id:3, name:"Bhavan", age:"4"},
    ]
    let show = mobile.filter((value) => value.age >4);
    console.log(show);
    //output: 
//     [{
//   age: "72",
//   id: 1,
//   name: "RMS"
// }, {
//   age: "36",
//   id: 2,
//   name: "CCC"
// }]


//map
const number = [1,2,3,4,5];
let final = number.map(function(value){
return value * 2;}
);

console.log(final);
//output: 2,4,6,8,10

//reduce method-it add previous value/accumulator + currentvalue and give result
const mobile =[
    { id:1, name:"RMS", age:7},
    { id:2, name:"CCC", age:8},
    { id:3, name:"Bhavan", age:9},
    ];
    let show = mobile.reduce(function(accumulator, currentvalue)
    {
    return accumulator + currentvalue.age;
    },0);
    console.log(show);
    //output: 24
    
    //Hoisting
    // It is the default behaviour of moving all the declarations at the top of the scope b4 code execution.
//    Function declaration write below of code or b4 of code u have to use.
// Function Expression  is write below of code only.

//Default Parameter
//IF u dont give value in function declaration (45, 18) it take default value tax =18

function calculateTax(cost, tax){
    taxAmount = cost * (tax/100);
    console.log(
        `Total cost is: ${cost} \n\n 
        GST of tax(18%) is ${taxAmount} \n\n
        Total Amount is: ${cost + taxAmount}`
    );
}
calculateTax(45, 18);

//OUTPUT: Total cost is 45
//GST of tax(18%) is 8.1
// Total Amount is 53.1


//Getter and //Setter
let student1 = {
    firstName: "Chinna",
    lastName: "Mani",
    get fullName() {
    return `${student.firstName} ${student.lastName}`;
    },
    set fullName(value) {
    let values = value.split();
    // console.log(values);
    this.firstName = values[0];
    //1 this.lastName = values[1];
    //2 this.lastName = values[1] ?? '';
    },
    };
    //1 student.fullName = "Trisha Krishnan";
    //2 student.fullName = "Trisha";
    console.log(student.fullName);
    //OUTPUT:1 ["Trisha Krishnan"] 
    //2 Trisha
    //"Chinna Mani"

    //OUTPUT:Trisha Krishnan

    //try and catch error
    let student = {
        firstName: "Chinna",
        lastName: "Mani",
        get fullName() {
        return `${student.firstName} ${student.lastName}`;
        },
        set fullName(value) {
            if(typeof value != "string"){
                const err = new Error(" It is not String");
            throw err;
            }
            if(value.length <= 3) throw "Name Invalid";
            let values = value.split(" ");
            this.firstName=value[0];
            this.lastName=value[1] ?? "";
        },
        };
        try {
            student.fullName="a";

        }
        catch (ex) {
            alert (ex);
        }
        
        console.log(student.fullName);

        //OUTPUT: Name invalid show in Browser.




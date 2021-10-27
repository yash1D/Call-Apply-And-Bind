
// this 1st and 4th question ans

function students(age){
    this.age = age;
}
const fn = function (){
    console.log(`${this.age}`)
}
let student = new students('20');
 fn.call(student);


//  2nd question ans

function obj1(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
const net = function(){
    console.log(`${this.firstname} ${this.lastname}`)
}
let person1 = new obj1("john","doe")
net.call(person1)
net.apply(person1)

let fn = obj1.bind(person1);
console.log(fn)


// currying

let add = function (a){
    return function(b){
        console.log(a+b);
    }
}
let addnumber = add(3);
addnumber(5);
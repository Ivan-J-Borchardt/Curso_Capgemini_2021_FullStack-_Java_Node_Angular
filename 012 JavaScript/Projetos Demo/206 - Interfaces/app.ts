
interface Person {
    firstName: string, 
    lastName?: string,
    age?: number 
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    return person 
    
}

function fullName1(person: Person) {
    console.log(`${person.firstName} ${person.lastName} ${person.age}`);
    return person
}

function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    return person
}
function fullName3(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    return person
}
function fullName4(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    return person
}
function fullName5(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    return person
}
function fullName6(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    return person
}
function fullNam7(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
    return person
}





let p = {
    firstName : "Ivan", 
    lastName  : "JB"
}


let p1 = {
    firstName : "Ivan"
}


var p9 =  fullName1(p)
var p7 =  fullName2(p9)
var p8 =  fullName3(p7)
var p6 =  fullName4(p8)
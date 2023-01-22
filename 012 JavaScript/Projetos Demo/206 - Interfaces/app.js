function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Ivan",
    lastName: "JB"
};
var p1 = {
    firstName: "Ivan"
};
fullName(p1);

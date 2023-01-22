
function add(num1: number, num2?: number, num3: number = 10) : number  {
    console.log(num1, num2, num3);
    
    return (num1 + num2)
}


var variavel2: number = add(3, 2, 1)
var variavel: number = add(3, 6)
var variavel2: number = add(3)
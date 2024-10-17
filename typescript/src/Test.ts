console.log("First TypeScript")

let fullName : string = "John wick"
fullName = "hello John"
// fullName = 30 Not Possible
console.log(fullName.toUpperCase())

let value : number = 30
console.log(value)
// value = 'jwgdw' Not Possible

value = value - 3;
console.log("New Value = "+ value)

let isTrue : boolean = true
console.log(isTrue)


//Union Types
let requestStatus : 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'pending'
// requestStatus = "Hello" //Not Possible


//Any Type
let notSure : any = 45
notSure = false

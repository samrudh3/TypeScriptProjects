function sayHello(name: string)
{
  console.log(`Hello There ${name.toUpperCase()}`);
  
}
sayHello("john wick")
//Cane be Fixed in 3 Ways : any, Config, Type Config (goto tsconfig.ts set strict : false)


function calculateDiscount(price : number) : number {
  return price * 0.9;
}

calculateDiscount(345)

const names : string[] = ["john", "Wick", "Ram"]

function checkName(name : string ) : boolean{
  return names.includes(name)
}

console.log("John = " + checkName("john"));
console.log("Johe = " + checkName("johe"));

//Optinal Parameter
function calculatePrice(price : number, discount? : number) : number{
  return price - (discount || 0);
}
let amt = calculatePrice(100, 20)

//Default Value
function calculateScore( intialScore : number, penalty : number = 0) : number{
  return intialScore - penalty;
}
calculateScore(100,20)
calculateScore(100)


function sum(message: string, ...numbers : number[]) : string{
  const doubled = numbers.map(num => num * 2)
  console.log(doubled);

  let total = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0)

  return `${message} ${total}`;
  
}

let result = sum("The sum is :", 1,2,3,4,5)
console.log("Res",result)

//Type Guard
function processType(input :(string | number)) : void {
  if( typeof input === "number")
  {
    console.log(input * 2);
  }
  else
  {
    console.log(input.toUpperCase());
  }
}
processType(10)
processType("hello")

function createStudent(student: { id : number; name: string}) : void {
  console.log(`Welcome to course ${student.name.toUpperCase()}`);
}

const newStudent = {
  id : 17,
  name : "Jack",
  email : "abc@gmail.com"
}
createStudent(newStudent)
// createStudent({id : 1, name : 'bob', email : "xyz@emailcom"})//Inline wont Allow but Object will be Allowed

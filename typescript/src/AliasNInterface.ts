type User = {id: number; name: string; isActive: boolean }

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type StringORNumber = string | number

let value : StringORNumber;
value = 10;
value = "Hello"

type Theme = 'dark' | 'light'

let theme : Theme
theme = 'dark'

type Employee = { id : number, name : string, department : string}
type Manager = { id : number, name : string , employees : Employee[]}
type Staff = (Employee | Manager)

const alice : Employee = {id : 1, name : 'alice', department : "Sales"}
const bob : Employee = {id : 2, name : 'bob', department : "IT"}

const steve : Manager = {id : 3, name: "Steve", employees:[alice, bob]}

function PrintStaffDetails(input : Staff) : void
{
  if('employees' in input)
  {
    console.log(`${input.name} is a Manager with ${input.employees.length} Employee`);   
  }
  else
  {
    console.log(`${input.name} is an Employee in the DPT ${input.department}`);
  }

}

PrintStaffDetails(alice)
PrintStaffDetails(steve)


//InterSectionTypes
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & {dicountedPrice : number};

const book1 : Book = {
  id : 1,
  name :"ags",
  price :23
}

const book2 : Book = {
  id : 2,
  name :"wjd",
  price :25
}

const book3 : DiscountedBook = {
  id : 3,
  name :"lodg",
  price :23,
  dicountedPrice : 2
}

const propName = 'age'

type Animal = {
  [propName] : number
};

let tiger : Animal = {
  [propName] : 5
}
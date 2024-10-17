let cityName : string = "Bengaluru"
console.log(cityName.toUpperCase())

let age : number = 15
console.log(age + 3)

let isAdult : boolean = age >=18
console.log(isAdult)

// cityName = 20 // Locally TypeScript will work But in Build it Won't
// age = "Twenty"

console.log(cityName, age)

const books = ['1984', 'alex', 'war1965']

let foundBook : string | undefined

for( let book of books)
{
  if(book === '1984')
  {
    foundBook = book
    console.log("Found Book " + foundBook.toUpperCase());
    break;
  }
}
console.log("Length " + foundBook?.length)
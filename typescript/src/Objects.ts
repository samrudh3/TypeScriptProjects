let car : {brand : string; year : number}= { brand : 'Alto', year : 2020}
car.brand = 'ford'
// car.color = 'red'//Not Pos Nit Present

let book = {title : 'book', cost : 10}
let pen = {title : 'pen', cost : 5}
let notebook = {title : 'notebook'}

let items: { readonly title : string; cost?: number}[] = [book, pen, notebook] // Note Cost is Optional Params 

// items[0].title = "kjdwknd"//Not poss readOnly Property

let newItems : {title : string; cost?: number}[] = [book,pen, notebook]

newItems.push({title:'compass', cost:30})
class Book {
  constructor(
      name, 
      author, 
      isbn, 
      noofcopies
      )
      {
      this.name = name;
      this.author=author;
      this.isbn = isbn;
      this.noofcopies = noofcopies;
  }

  getAvailability()
  {
    if (this.noofcopies === 0) {
    return `Out Of Stock`
  } 
  else if(this.noofcopies < 10) {
    return `Low Stock`
  } 
  else {
     return `Stock Available`
  }
}

sell(noSold = 1){
  this.noofcopies = this.noofcopies - noSold;
}

restock(newAdded = 5) {
this.noofcopies = this.noofcopies + newAdded;
}
}

class TechnicalBook extends Book {
constructor(name, author, isbn, noofcopies, edition)
{
  super(name, author, isbn, noofcopies);
  this.edition = edition;
}

getEdition(){
  return `Current version of the ${this.name} is ${this.edition}`
}
}

const programmingC = new TechnicalBook("ProgrammingC", "Yashwant kanithker", 48546, 100, 8);

console.log(programmingC.getAvailability())
console.log(programmingC.getEdition())


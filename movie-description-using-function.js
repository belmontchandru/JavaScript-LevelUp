function Movies(title, director, genre, releaseYear,rating)
{
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

function discription(title, director, genre, releaseYear,rating) {
    return `the ${this.title} directedby ${this.director} in the genre ${this.genre} released in ${this.releaseYear} rated ${this.rating}`
}

const goat = new Movies("goat","Vengatprabhu", "Action", 2024, 2.5)


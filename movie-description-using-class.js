class Movie {
    constructor(
        title,
        director,
        genre,
        releaseYear,
        rating
    )
    {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    movie()
    {
        return (
            `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
        );
    }
}

const johnwick = new Movie('John Wick', 'Chad Stahelski', 'Action Thriller', 2024, 7.7);
console.log(johnwick.movie())


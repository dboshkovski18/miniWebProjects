


const movies = [
    {
        title: 'Titanic',
        picture: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        director: 'James Cameron'
    },
    {
        title: 'Avatar',
        picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg',
        director: 'James Cameron'
    },
    {
        title: 'Scarface',
        picture: 'https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        director: 'Brian De Palma'
    },
    {
        title: 'Interstellar',
        picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB',
        director: 'Christopher Nolan'
    },
    {
        title: "Home alone",
        picture: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        director: 'Chris Columbus'
    },
    {
        title: "Avengers",
        picture: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        director: 'Joss Whedon'
    }
];

const defaultStrikes = new Array(5).fill({ icon: '⚪', guess: '' });


var vm = new Vue({
    el: "#app",
    data: {
        username: "",
        password: "",
        chosenMovieTitle: "",
        chosenMoviePicture: "",
        chosenMovieDirector: "",
        movies: movies,
        letters: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
        strikes: [...defaultStrikes],
        guesses: [],
        gameOver: false,
      
    },
    mounted() {
        this.pickMovie();
    },
    methods : {
        pickMovie : function () {
                var random = Math.floor(Math.random() * this.movies.length);
                this.chosenMoviePicture = this.movies[random].picture;
                this.chosenMovieTitle = this.movies[random].title;
                this.chosenMovieDirector = this.movies[random].director
        },
        pickAnother : function (){
            setTimeout(function () {
                clearInterval(interval);
            },1300);
            var interval = setInterval(this.pickMovie, 70);
            this.guesses = [];
            this.gameOver = false;
            this.strikes = [...defaultStrikes]

        },
        guessButton: function (letter) {
            this.guesses.push(letter)

            if (this.chosenMovieDirector.includes(letter.toLowerCase()) || this.chosenMovieDirector.includes(letter)) {
                console.log(letter)
            } else {
                this.strikes.pop();
                this.strikes = [{ icon: '🚫', guess: letter }, ...this.strikes];
            }

            if (this.strikes[4].guess != "") {
                this.gameOver = true;
            }

        },
        isRevealed: function (letter) {
            if (!letter.match(/[a-zA-Z\s]/)) {
                return letter;
            }
            return this.guesses.includes(letter.toUpperCase()) || this.gameOver ? letter : '_';
        }
    },
    computed: {
        splitSentence: function () {
            return this.chosenMovieDirector.split(' ');
        },
        unrevealed: function () {
            return [...this.chosenMovieDirector].filter(letter => {
                return letter.match(/[A-Za-z]/) && !this.guesses.includes(letter.toUpperCase());
            }).length;
        },
        puzzleComplete: function () {
            return this.unrevealed === 0 ? true : false;
        }

    }
});

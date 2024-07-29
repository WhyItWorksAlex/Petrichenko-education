let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

function rememberMyFilms() {
  const COUNT_FILMS = 2;

  for (let i = 0; i < COUNT_FILMS; i++) {
    let film = "";
    let rate = "";
    while (!film || !rate || film.length > 50) {
      film = prompt("Один из последних просмотренных фильмов?", "");
      rate = prompt("На сколько оцените его?", "");
    }
    personalMovieDB.movies[film] = rate; // способ создать ключ из переменной и сразу присвоить какие то значение этому ключу
  }
}

rememberMyFilms()

// Или вариант 2

// for (let i = 0; i < COUNT_FILMS; i++) {
//   const film = prompt("Один из последних просмотренных фильмов?", "");
//   const rate = prompt("На сколько оцените его?", "");
//   if (!film || !rate || film.length > 50) {
//     i--
//   } else {
//     personalMovieDB.movies[film] = rate;
//   }
// }

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман")
  }else if (personalMovieDB.count <= 30 || personalMovieDB.count >= 10) {
    alert("Вы классический зритель")
  } else {
    alert("Произошла ошибка")
  }
}

detectPersonalLevel()

function showMyBD(hidden) {
  if (!hidden) {
    console.log(personalMovieDB)
  }
}

showMyBD(personalMovieDB.privat)

function writeYourGenres() {
  const COUNT_QUESTIONS = 3;

  for (let i = 0; i < COUNT_QUESTIONS; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i+1}`, "");
  }
};

writeYourGenres()

console.log("hi")
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyFilms: function() {
    const COUNT_FILMS = 2;
  
    for (let i = 0; i < COUNT_FILMS; i++) {
      let film = "";
      let rate = "";
      while (!film || !rate || film.length > 50 || film == null) {
        film = prompt("Один из последних просмотренных фильмов?", "").trim();
        rate = prompt("На сколько оцените его?", "");
      }
      personalMovieDB.movies[film] = rate; // способ создать ключ из переменной и сразу присвоить какие то значение этому ключу
    }
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман")
    }else if (personalMovieDB.count <= 30 || personalMovieDB.count >= 10) {
      alert("Вы классический зритель")
    } else {
      alert("Произошла ошибка")
    }
  },

  showMyBD: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },

  toggleVisibleMyDB: function () {
    const newValue = !personalMovieDB.privat
    personalMovieDB.privat = newValue
  },

  writeYourGenres: function () {
    const COUNT_QUESTIONS = 3;
  
    for (let i = 0; i < COUNT_QUESTIONS; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
      while(!personalMovieDB.genres[i]) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
      }
    }
  
    personalMovieDB.genres.forEach((genre, index) => {
      console.log(`Любимый жанр №${index + 1} - это ${genre}`)
    })
  },
}


// Или вариант 2 для rememberMyFilms

// for (let i = 0; i < COUNT_FILMS; i++) {
//   const film = prompt("Один из последних просмотренных фильмов?", "");
//   const rate = prompt("На сколько оцените его?", "");
//   if (!film || !rate || film.length > 50) {
//     i--
//   } else {
//     personalMovieDB.movies[film] = rate;
//   }
// }

const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '17$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{name: 'Mike', age: 32}];
  return copy;
}

transferWaitors(restorantData);
console.log(restorantData)

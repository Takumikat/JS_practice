const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



console.log("Les entrepreneurs nés dans les années 70 :")
function findYear() {
  for (var i = 0; i < entrepreneurs.length; i++) {
    if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
      console.log(entrepreneurs[i]);
    };
  }
}
findYear();

console.log("Le nom et prénom des entrepreneurs :")
let name = [];
function findName() {
  for (var i = 0; i < entrepreneurs.length; i++) {
    name.push(entrepreneurs[i].first + " "+ entrepreneurs[i].last);
  };
  console.log(name)
}
findName();

console.log("L'âge des entrepreneurs :")
function findAge() {
  for (var i = 0; i < entrepreneurs.length; i++) {
    console.log(`${entrepreneurs[i].first}  ${entrepreneurs[i].last}  ${2019 - entrepreneurs[i].year}`);
  }
}
findAge();


console.log("Les entrepreneurs par ordre alphabétique :")
let name2 = [];
function sortLast() {
    for (var i = 0; i < entrepreneurs.length; i++) {
    name2.push(entrepreneurs[i].last + " " +  entrepreneurs[i].first + " " + entrepreneurs[i].year);
    name2.sort();
  };
  console.log(name2)
}
sortLast();

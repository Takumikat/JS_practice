const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let name = [];
let rented = [];

function rent() {
books.forEach(livre => {
  if (livre.rented != 0){
    rented.push(livre)
  }
});
if (rented.length = books.length){
  console.log("Tous les livres ont été empruntés.")
}
else {
  console.log(rented.length + " livres ont été empruntés sur un total de " + books.length + " livres.")
}
}
rent();

function sortRented() {
    for (var i = 0; i < books.length; i++) {
    	name.push(books[i].rented + " " +  books[i].title + " " + books[i].id);
    	name.sort();  	
  };
  console.log(name[name.length - 1])
}
sortRented();

function sortLessRented() {
   
  console.log(name[0])
}
sortLessRented();

function findId() {
	let find = [];
	books.forEach(livre => {
		if (livre.id === 873495) {
			find.push(livre);
		}
	})
	console.log(find);
}
findId();

function findOtherId() {
	let find = [];
	books.forEach(livre => {
		if (livre.id === 133712) {
			find.push(livre);
		}
	})
	console.log(find);
}
findOtherId();










































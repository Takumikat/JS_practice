let num = prompt("Entre un nombre");

function sFact(num)
{
    let rval=1;
    if (num >= 0) {
    for (let i = 2; i <= num; i++)
        rval = rval * i;
    console.log("le résultat est " + rval);
  	}
  	else {
  		console.log("Entre un entier positif stp");
  	};
}

sFact(num)
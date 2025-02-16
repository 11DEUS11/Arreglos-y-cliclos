let frutas = ['banana', 'sandia', 'naranja', 'uva', 'melon'];

let cantidadFrutas = {
    banana: 5,
    sandia: 10,
    naranja: 15,
    uva: 20,
    melon: 25
}

for (let i = 0; i < frutas.length; i++) {
    console.log(cantidadFrutas[frutas[i]]);
}

/* 
let i = 0;
while (i < frutas.length) {
    console.log(cantidadFrutas[frutas[i]]);
    i++;
}  */
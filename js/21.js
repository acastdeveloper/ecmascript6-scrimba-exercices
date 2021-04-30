import {Animal, Cat} from './animal.js'

let cat = new Animal('Cat',4);

// console.log(cat.type);
// console.log(cat.legs);

// cat.makeNoise("Meoow");

console.log(Animal.return10());

console.log(cat.metaData);

cat = new Cat('Cat',4)
cat.makeNoise();
console.log(cat.metaData);

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    makeNoise(sound='Loud Noise') {
        console.log(sound);
    }

    static return10() {
        return 10;
    }
}


export class Cat extends Animal {
    // constructor(type,legs,tail) {
    //     super(type,legs);
    //     this.tail=tail;
    // }

    makeNoise(sound="meowmeow") {
        console.log(sound);
    }
}

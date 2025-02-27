class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    };
};

class Pai extends Avo {
    constructor(sobrenome, profssao = 'Professor') {
        super(sobrenome);
        this.profssao = profssao;
    };
};

class Filho extends Pai {
    constructor() {
        super('Silva');
    };
};

const filho = new Filho;
console.log(filho);
class Vector extends Matrix{

    constructor(dim,values){
        super(dim,1,values);
    }

    get(i){
        return this.values[this.getIndex(i)]
    }

    set(i, value){
        this.values[this.getIndex(i)] = value
    }
    getIndex(i){
        if(i < 1 || i > this.rows) throw "O índice da linha esta fora dos valores permitidos"

        return (1 - 1) + (i - 1) * this.cols
    }
}
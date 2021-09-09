class Matrix{  

    constructor(rows, cols, values){
        this.rows = rows;
        this.cols = cols;
        
        if (values == undefined){
            this.values = [];
            for(let i = 0; i <this.rows * this.cols; i++){
                this.values.push(0)
            }
        }else{
            if(values.length == this.rows * this.cols){
                this.values = values;
            }else{
                throw "O array de valores é incompatível com o tamanho da matrix"
            }
        }
    }

    get(i, j){
        return this.values[this.getIndex(i,j)]
    }

    set(i, j, value){
        this.values[this.getIndex(i,j)] = value
    }

    getIndex(i,j){
        if(i < 1 || i > this.rows) throw "O índice da linha esta fora dos valores permitidos"
        if(j < 1 || j > this.cols) throw "O índice da coluna esta fora dos valores permitidos"

        return (j - 1) + (i - 1) * this.cols
    }
}
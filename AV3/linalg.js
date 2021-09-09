class LinearAlgebra{

    //Faz a matriz transposta
    transpose(a){

        let c;

        if(a instanceof Vector){

            let c = new Vector(a.size)
            c.rows = a.cols;
            c.cols = a.rows;

            for(let j = 1; j <= c.size; j++){
                c.set(i, a.get(i))
            }

        }else if(a instanceof Matrix){

            let c = new Matrix (a.cols, a.rows)

            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i, j, a.get(j,i))
                }
            }
        }

        return c
    }
    //Soma elemento a elemento de duas matrizes
    plus(a, b){
        
        if(!verifyIfMatrix(a,b)){
            throw "Os Parâmetros a e b devem ser uma matriz.";
        }

        if(a.rows != b.rows || a.cols != b.cols) throw "As matrizes são incompatíveis";

        let c = new Matrix (a.rows, a.cols);

        for(let i = 1; i<=c.rows; i++){
            for(let j = 1; j <= c.cols; j++){
                c.set(i,j, a.get(i,j) + b.get(i,j));
            }
        }
        return c;
    }

    //Multiplica elemento a elemento de duas matrizes
    times(a, b){

        if(!verifyIfMatrix(b)){
            throw "O segundo parâmetro deve ser um objeto do tipo Matrix"
        }

        let c = new Matrix (b.rows, b.cols);

        if(typeof a == "number"){
            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i,j, a * b.get(i,j));
                }
            }
        }else if(verifyIfMatrix(a)){
            if(a.rows != b.rows || a.cols != b.cols) throw "As matrizes são incompatíveis";

            for(let i = 1; i<=c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i,j, a.get(i,j) * b.get(i,j));
                }
            }
        }else {
            throw "O primeiro parâmetro deve ser um escalar do tipo númerico ou um objeto do tipo Matrix"
        }

        return c;
    }
    
    //Divide elemento a elemento de duas matrizes
    div(a, b){
        if(!verifyIfMatrix(a,b)){
            throw "Os Parâmetros a e b devem ser uma matriz.";
        }

        if(a.rows != b.rows || a.cols != b.cols){
            throw "As matrizes são imcompatíveis.";
        }

        for(let i = 0; i < b.values.length; i++){
            if(b.values[i] == 0){
                throw "A matriz b possui pelo menos um elemento nulo."
            }
        }

        let c = new Matrix (a.rows, a.cols);

        for(let i = 1; i<=c.rows; i++){
            for(let j = 1; j <= c.cols; j++){
                c.set(i,j, a.get(i,j) / b.get(i,j));
            }
        }
        return c;
    }

    //Multiplica duas matrizes
    dot(a, b){

        let c = {}

        if(!verifyIfMatrix(a,b)){
            throw "Os Parâmetros a e b devem ser uma instancia de matriz.";
        }
        if(a.cols != b.rows){
            throw "As matrizes são imcompatíveis.";
        }

        if((b instanceof Vector)){
            c = new Vector (a.rows);

            for(let i = 1; i<=a.rows; i++){
                for(let j = 1; j <= b.cols; j++){
                    for(let k = 1; k <= a.rows; k++){
                        c.set(i, c.get(i,j) + a.get(i,k) * b.get(k, j))
                    }
                }
            }

        }else{
            c = new Matrix (a.rows, b.cols);

            for(let i = 1; i<=a.rows; i++){
                for(let j = 1; j <= b.cols; j++){
                    for(let k = 1; k <= a.rows; k++){
                        c.set(i,j, c.get(i,j) + a.get(i,k) * b.get(k, j))
                    }
                }
            }
        }
        
        return c;
    }

    //Troca de lugar uma linha pela outra da matriz
    changeLines(a,l1,l2){

        if(!verifyIfMatrix(a)){
            throw "O Parâmetro a deve ser uma matriz.";
        }

        for(let i = 1; i <= a.cols; i++){
            let aux = 0;
            aux = a.get(l1,i);
            a.set(l1,i, a.get(l2,i));
            a.set(l2,i, aux);
            
        }
    }

    //Multiplica os valores uma linha da matriz
    TimesOneLine(a,k,linha){
        if(!verifyIfMatrix(a)){
            throw "O Parâmetro a deve ser uma matriz.";
        }
        
        if(k == 0){
            throw "O Parâmetro k deve ser um número diferente de 0"
        }
        
        for(let i = 1; i <= a.cols; i++){
            a.set(linha,i, a.get(linha,i) * k)
        }
    }

    //Multiplica os valores de uma linha por uma constante e depois soma
    //o resultado com outra linha e troca os valores dela
    thirdOperation(a,k,l1,l2){
        if(!verifyIfMatrix(a)){
            throw "O Parâmetro a deve ser uma matriz.";
        }

        for(let i = 1; i <= a.cols; i++){
            a.set(l2,i, a.get(l1,i) * k + a.get(l2,i))
        }
    }


    //Procura os pivôs igual a 0 e troca de linha ou faz a 3º operação
    tiraPivosIgualZero(a){

        let c = {
            matrix: new Matrix(a.rows, a.cols, a.values.slice()),
            cof: 1
        }
        for(let k = 1; k < c.matrix.rows; k++){
            if(c.matrix.get(k,k) == 0){
                if(k == c.matrix.rows){
                    for(let i = k-1; i >= 1; i--){
                        if(c.matrix.get(i,k) != 0){
                            console.log(i,k)
                            this.thirdOperation(c.matrix,1,i,k)
                            break;
                        }
                    }
                }
                for(let j = k + 1; j <= c.matrix.rows; j++){
                    if(k != 1 && j == c.matrix.rows){
                        for(let i = k-1; i >= 1; i--){
                            if(c.matrix.get(k,i) != 0){
                                console.log(i,k)
                                this.thirdOperation(c.matrix,1,i,k)
                                break;
                            }
                        }
                    }
                    if(c.matrix.get(j,k) != 0){
                        this.changeLines(c.matrix,k,j)
                        c.cof *= -1
                        break;
                    }
                }
            }
        }
        return c
    }

    //Gauss Jordan
    solve(a){
        
    //    if(a.rows != a.cols - 1){
     //   throw "O parâmetro a deve ser uma matriz quadrada"
      //  } 
        
        //Transforma valores do triangulo inferior em 0
        let c = this.gauss(a).matrix
        
        //Transforma valores do triangulo superior em 0
        for(let k = 2; k <= c.rows; k++){
            for(let i = k-1; i >= 1; i--){
                if(c.get(i,k) == 0) break;
                let zero = (-1*(c.get(i,k)))/c.get(k,k)
                this.thirdOperation(c,zero,k,i)
            }
        }

        //Transforma os valores do pivô em 1
        for(let i = 1; i <= c.rows; i++){
            let mut = (1/c.get(i,i))
            this.TimesOneLine(c,mut,i)
        }
        
        let values = [];
        for(let i = 1; i <= c.rows; i++){
            values.push(c.get(i,a.cols))
        }

        let v = new Vector(a.rows,values)

        let resposta = {
            gaussJordan: v,
            inverse: c
        }

        return resposta;
    }

    gauss(a){

        if(a.cols < a.rows){
            throw "O Parâmetro a é uma matriz imcompatível";
        }

        //Remove os pivos igual a 0
        let c = this.tiraPivosIgualZero(a)
        
        for(let k = 1; k <= c.matrix.rows; k++){
            for(let i = k+1; i <= c.matrix.rows; i++){
                if(c.matrix.get(i,k) == 0) continue;
                let zero = (-1*(c.matrix.get(i,k)))/c.matrix.get(k,k)
                this.thirdOperation(c.matrix,zero,k,i)
            }
            
        }

        return c
    }

    det(a){
        
        let c = this.gauss(a)
        let det = c.cof
        console.log(c.matrix)

        for(let i = 1; i<= c.matrix.rows; i++){
            det *= c.matrix.get(i,i)
        }
        return det
    }

    inverse(a){

        //Cria uma nova matriz com o dobro de colunas.
        let c = new Matrix(a.rows, a.cols*2)

        //Copia os valores da Matrix A para a C do começo até a metade.
        for(let i = 1; i <= a.rows; i++){
            for(let j = 1; j <= a.rows; j++){
                c.set(i,j, a.get(i,j))
            }
        }

        //Coloca o valor 1 no "pivô" da metade pro final
        for(let i = 1; i <= c.rows; i++){
            c.set(i,i + c.rows, 1)
        }

        let r = this.solve(c).inverse

        //Gera o resultado final da matriz inversa
        let resultado = new Matrix(a.rows, a.cols)
        for(let i = 1; i <= a.rows; i++){
            for(let j = 1; j <= a.rows; j++){
                resultado.set(i,j, r.get(i,j + r.rows))
            }
        }
        return resultado
    }
}

function verifyIfMatrix(a,b){
    if(typeof a != "object" || !(a instanceof Matrix) ||
    typeof b != "object" || !(b instanceof Matrix)){
        return false;
    }else{
        return true;
    }
    
}
function verifyIfMatrix(a){
    if(typeof a != "object" || !(a instanceof Matrix)){
        return false;
    }else{
        return true;
    }
}





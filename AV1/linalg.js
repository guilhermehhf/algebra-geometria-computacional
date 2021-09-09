class LinearAlgebra{

    //Faz a matriz transposta
    transpose(a){

        if(!verifyIfMatrix(a)){
            throw "O parâmetro deve ser um objeto do tipo Matrix"
        }
        let c = new Matrix (a.cols, a.rows)

        for(let i = 1; i <= c.rows; i++){
            for(let j = 1; j <= c.cols; j++){
                c.set(i, j, a.get(j,i))
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

        if(!verifyIfMatrix(a,b)){
            throw "Os Parâmetros a e b devem ser uma matriz.";
        }

        if(a.cols != b.rows){
            throw "As matrizes são imcompatíveis.";
        }

        let c = new Matrix (a.rows, b.cols);

        for(let i = 1; i<=a.rows; i++){
            for(let j = 1; j <= b.cols; j++){
                for(let k = 1; k <= a.rows; k++){
                    c.set(i,j, c.get(i,j) + a.get(i,k) * b.get(k, j))
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
        return a;
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

        return a
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
        
        return a;
    }


    //Procura os pivôs igual a 0 e troca de linha ou faz a 3º operação
    tiraPivosIgualZero(a){
        for(let k = 1; k < a.cols; k++){
            if(a.get(k,k) == 0){
                if(k == a.cols - 1){
                    for(let i = k-1; i >= 1; i--){
                        if(a.get(i,k) != 0){
                            console.log(i,k)
                            a = this.thirdOperation(a,1,i,k)
                            break;
                        }
                    }
                }
                for(let j = k + 1; j <= a.rows; j++){
                    if(k != 1 && j == a.rows){
                        for(let i = k-1; i >= 1; i--){
                            if(a.get(k,i) != 0){
                                console.log(i,k)
                                a = this.thirdOperation(a,1,i,k)
                                break;
                            }
                        }
                    }
                    if(a.get(j,k) != 0){
                        a = this.changeLines(a,k,j)
                        break;
                    }
                }
            }
        }
    }

    //Gauss Jordan
    solve(a){

        //let c = new Matrix(a.rows,a.cols,a.values.splice(0))
        
        if(a.rows != a.cols - 1){
            throw "O parâmetro a deve ser uma matriz quadrada"
        } 
        

        this.tiraPivosIgualZero(a)

        //Transforma valores do triangulo inferior em 0
        for(let k = 1; k <= a.cols - 2; k++){
            for(let i = k+1; i <= a.rows; i++){
                if(a.get(i,k) == 0) break;
                let zero = (-1*(a.get(i,k)))/a.get(k,k)
                a = this.thirdOperation(a,zero,k,i)
            }
            
        }

        //Transforma valores do triangulo inferior em 0
        for(let k = 2; k <= a.cols - 1; k++){
            for(let i = k-1; i >= 1; i--){
                if(a.get(i,k) == 0) break;
                let zero = (-1*(a.get(i,k)))/a.get(k,k)
                a = this.thirdOperation(a,zero,k,i)
            }
        }

        //Transforma os valores do pivô em 1
        for(let i = 1; i <= a.cols - 1; i++){
            let mut = (1/a.get(i,i))
            a = this.TimesOneLine(a,mut,i)
        }
        
        let values = [];
        for(let i = 1; i <= a.rows; i++){
            values.push(a.get(i,a.cols))
        }

        let v = new Vector(a.rows,values)

        return v;
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





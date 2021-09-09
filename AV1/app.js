let la = new LinearAlgebra()

let arquivos = []
let tempo = []

const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener('change', function(event){

    let files = event.currentTarget.files;

    for (file of files){

        console.log(file.name)

        let reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = function(){

            let lines = reader.result.split('\n');
            let first = true;
            let matrix;
            

            for( let i = 0; i < lines.length; i++){
                if(!lines[i].startsWith('%') && lines[i] != ''){
                    let aux = lines[i].split(' ');
                    if(first){
                        matrix = new Matrix(parseInt(aux[0]), parseInt(aux[1]))
                        first = false;
                    } else {
                        matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]))
                    }
    
                }
            }
            

            let start = Date.now()
            let resultGaussJordan = la.solve(matrix)
            let stop = Date.now()

            let c = new Matrix(matrix.rows,matrix.cols,matrix.values.slice())
            let elapsedTime = stop - start
            console.log(c)
            //console.log(elapsedTime)

        }

        
    }

        

    

});

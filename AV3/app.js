let la = new LinearAlgebra()
let trans = new Transformation()

let arquivos = []
let tempo = []

let b = new Matrix(3,3,[1,2,3,2,5,3,1,0,8])
let inverse = la.inverse(b)
let v = new Vector(3,[2,2,2])

function setup(){
    createCanvas(640,480,WEBGL)
    createEasyCam()
    frameRate(60)

    //Figuras 2D
    // figuras2d = []
    // figuras2d.push(new Line(10,80,50,80))
    // figuras2d.push(new Triangle(80,80,120,10,160,80))
    // figuras2d.push(new Circle(250,40,40,8))
    // figuras2d.push(new Rectangle(350,10,160,80))

    //Figuras 3D
    // figuras3d = []
    // figuras3d.push(new Plane(10,200,0,50,1,50))
    // figuras3d.push(new Pyramid(80,200,0,80,20,80,100))
    // figuras3d.push(new Sphere(250,200,40,40,8,8,'#ffffff'))
    // figuras3d.push(new Parallelogram(350,150,0,160,80,80))

    //Sistema solar
    planets = []
    sol = new Sphere(0,0,0,50,8,8,'#FFCC33')
    planets.push(new Planet(0.383,0.387,58.8,0.241,'#DBCECA'))
    planets.push(new Planet(0.949,0.723,-244,0.615,'#8B7D82'))
    planets.push(new Planet(1,1,1,1,'#0494cc'))
    planets.push(new Planet(0.532,1.52,1.03,1.88,'#c1440e'))
    planets.push(new Planet(11.21,5.20,0.415,11.9,'#A79C86'))
    planets.push(new Planet(9.45, 9.58,0.445,29.4,'#adacbc'))
    planets.push(new Planet(4.01,19.20,-0,720,83.7,'#4FD0E7'))
    planets.push(new Planet(3.88,30.05,0.673,163.7,'#212354'))
    planets.push(new Planet(0.186,39.48,6.41,247.9,'#968570'))
    planets[2].addMoon(0.2724,0.00257,27.4,0.0748,'#e0e0d1')
    

}

function draw(){
    background(52)


    //Figuras 2D draw
    // figuras2d.forEach(f2d => {
    //     f2d.draw()
    // });

    //Figuras 3D draw
    // figuras3d.forEach(f3d =>{
    //     f3d.draw()
    // })


    //Sistema solar draw
    sol.draw()
    sol.rotate(0.005)
    for (let p = 0; p < planets.length; p++) {
        if(planets[p].moons.length != 0){
            for (let m = 0; m < planets[p].moons.length; m++) {
                planets[p].moons[m].draw()
                
            }
        }
        planets[p].draw()
    }
    
    
    
    

    
}










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
            let result = la.solve(matrix).gaussJordan
            let stop = Date.now()

            //let c = new Matrix(matrix.rows,matrix.cols,matrix.values.slice())
            let elapsedTime = stop - start
            console.log(result)
            //console.log(elapsedTime)

        }

        
    }

        

    

});

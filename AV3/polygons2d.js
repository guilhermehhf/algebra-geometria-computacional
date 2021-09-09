class Line{
    constructor(x1, y1, x2, y2){
        this.points = []
        this.points.push(new Vector(2, [x1, y1]))
        this.points.push(new Vector(2, [x2, y2]))
        this.color = '#FFFFFF'

        this.transform = new Transformation()
    }
    draw(){
        beginShape();
        strokeWeight(2)
        stroke(this.color)
        for (let i = 0; i < this.points.length; i++) {
            vertex(this.points[i].get(1), this.points[i].get(2));
        }
        endShape()
    }

    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation2D(this.points[i],angle)
            
        }
    }

    translate(dx,dy){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate2D(this.points[i],dx,dy)
            
        }
    }
}

class Triangle{
    constructor(x1, y1, x2, y2, x3, y3){
        this.points = []
        this.points.push(new Vector(2, [x1, y1]))
        this.points.push(new Vector(2, [x2, y2]))
        this.points.push(new Vector(2, [x3, y3]))
        this.transform = new Transformation()
        
    }

    draw(){
        beginShape(TRIANGLE_STRIP);
        strokeWeight(2)
        for (let i = 0; i < this.points.length; i++) {
            vertex(this.points[i].get(1), this.points[i].get(2));
        }
        endShape()
    }
    
    translate(dx,dy){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] =this.transform.translate2D(this.points[i],dx,dy)
            
        }
    }

    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation2D(this.points[i],angle)
            
        }
    }
    
}

class Circle{
    constructor(x, y, r, t){
        this.points = []
        
        this.points.push(new Vector(2,[0,0])) 
        this.points.push(new Vector(2,[0+r,0]))
        

        this.transform = new Transformation()

        for (let i = 2; i <= t; i++) {
            this.points.push(this.transform.rotation2D(this.points[i-1],(2*Math.PI)/t))
            
        }

        this.translate(x,y)
        
    }
    draw(){
        beginShape(TRIANGLES);
        // strokeWeight(2)
        // stroke('#ffffff')
        for (let i = 1; i < this.points.length; i++) {
            let p
            if(i != this.points.length-1){
                p = i + 1
            }else{
                p = 1
            }
            vertex(this.points[i].get(1), this.points[i].get(2));
            vertex(this.points[0].get(1), this.points[0].get(2));
            vertex(this.points[p].get(1), this.points[p].get(2));
        }
        endShape()
    }

    translate(dx,dy){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate2D(this.points[i],dx,dy)
            
        }
    }

    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation2D(this.points[i],angle)
            
        }
    }
    
}

class Rectangle{

    constructor(x, y, w, h){
        this.points = []
        this.points.push(new Vector(2, [x, y]))
        this.points.push(new Vector(2, [x, y + h]))
        this.points.push(new Vector(2, [x + w, y]))
        this.points.push(new Vector(2, [x + w, y + h]))

        this.transform = new Transformation()

    }

    draw(){
        beginShape(TRIANGLE_STRIP);
        strokeWeight(2)
        stroke('#ffffff')
        for (let i = 0; i < this.points.length/2; i++) {
            for (let j = i; j <= i + 2; j++) {
                vertex(this.points[j].get(1), this.points[j].get(2));
            }
        }
        endShape()
    }

    translate(dx,dy){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate2D(this.points[i],dx,dy)
            
        }
    }

    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation2D(this.points[i],angle)
            
        }
    }

    
}


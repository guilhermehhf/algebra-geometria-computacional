class Plane{
    constructor(x,y,z,w,h,l){
        this.points = [];
        this.transform = new Transformation()

        this.points.push(new Vector(3,[x, y, z]))
        this.points.push(new Vector(3,[x, y + h, z]))
        this.points.push(new Vector(3,[x + w, y, z]))
        this.points.push(new Vector(3,[x + w, y + h, z]))

        this.points.push(new Vector(3,[x + w, y, z + l]))
        this.points.push(new Vector(3,[x + w, y + h,z + l]))
        this.points.push(new Vector(3,[x, y, z + l]))
        this.points.push(new Vector(3,[x, y + h, z + l]))
        
    }
    draw(){
        beginShape(TRIANGLES);

        strokeWeight(2)
        stroke('#ffffff')

        //Laterais
        for (let i = 0; i < this.points.length; i++) {
            for (let j = i; j <= i + 2; j++) {
                if(j >= this.points.length){
                    let u = j - this.points.length
                    vertex(this.points[u].get(1), this.points[u].get(2), this.points[u].get(3));
                }else{
                    vertex(this.points[j].get(1), this.points[j].get(2), this.points[j].get(3));
                }
                
            }
        }
        
        //Face Inferior
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));

        //Face superior
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        

        
        endShape()
    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],dx,dy,dz)
            
        }
    }

    translateToOrigin(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],-dx,-dy,-dz)
            
        }
    }

    scale(k){
        
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.scale3D(this.points[i],k)
        }
        
    }
    
    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dy(this.points[i],angle)
        }
        
    }

    rotateZ(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dz(this.points[i],angle)
        }
        
    }

    rotateX(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dx(this.points[i],angle)
        }
        
    }
}

class Parallelogram{
    constructor(x,y,z,w,h,l){
        this.points = [];
        this.transform = new Transformation()

        this.points.push(new Vector(3,[x, y, z]))
        this.points.push(new Vector(3,[x, y + h, z]))
        this.points.push(new Vector(3,[x + w, y, z]))
        this.points.push(new Vector(3,[x + w, y + h, z]))

        this.points.push(new Vector(3,[x + w, y, z + l]))
        this.points.push(new Vector(3,[x + w, y + h,z + l]))
        this.points.push(new Vector(3,[x, y, z + l]))
        this.points.push(new Vector(3,[x, y + h, z + l]))
        
    }
    draw(){
        beginShape(TRIANGLES);

        strokeWeight(2)
        stroke('#ffffff')

        //Laterais
        for (let i = 0; i < this.points.length; i++) {
            for (let j = i; j <= i + 2; j++) {
                if(j >= this.points.length){
                    let u = j - this.points.length
                    vertex(this.points[u].get(1), this.points[u].get(2), this.points[u].get(3));
                }else{
                    vertex(this.points[j].get(1), this.points[j].get(2), this.points[j].get(3));
                }
                
            }
        }
        
        //Face Inferior
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));

        //Face superior
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        

        
        endShape()
    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],dx,dy,dz)
            
        }
    }

    translateToOrigin(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],-dx,-dy,-dz)
            
        }
    }

    scale(k){
        
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.scale3D(this.points[i],k)
        }
        
    }
    
    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dy(this.points[i],angle)
        }
        
    }

    rotateZ(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dz(this.points[i],angle)
        }
        
    }

    rotateX(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dx(this.points[i],angle)
        }
        
    }

    
}
class Sphere{
    constructor(x,y,z,r,st,se,color){
        this.points = [];
        this.color = color
        this.transform = new Transformation()
        this.x = x
        this.y = y
        this.z = z
        this.st = st
        this.se = se
        
        let stack_atual = this.points.length - 1
        let sector_atual = 0

        for (let i = 0; i <= st; i++) {
            if(i == 0){
                this.points.push(new Vector(3,[0,r,0]))
            }else{
                this.points.push(this.transform.rotation3Dz(this.points[stack_atual],Math.PI/st))
            }
            stack_atual = this.points.length - 1
            
            sector_atual = this.points.length - 1

            for(let j = 0; j < se; j++){
                this.points.push(this.transform.rotation3Dy(this.points[sector_atual+j],(2*Math.PI)/se))
            }
            
        }
        this.translate(x,y,z)
        
    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],dx,dy,dz)
            
        }
    }

    translateToOrigin(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],-dx,-dy,-dz)
            
        }
    }

    scale(k){
        
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.scale3D(this.points[i],k)
        }
        
    }
    
    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dy(this.points[i],angle)
        }
        
    }

    rotateZ(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dz(this.points[i],angle)
        }
        
    }

    rotateX(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dx(this.points[i],angle)
        }
        
    }


    draw(){
        beginShape(TRIANGLES);
        strokeWeight(2)
        stroke(this.color)
        fill('#FFFFFF')
        for (let i = 0; i < this.st; i++) {
            let k1 = i * (this.se + 1)
            let k2 = k1 + this.se + 1

            for(let j = 0; j < this.se; j++, k1++, k2++){
                if(i != 0){
                    vertex(this.points[k1].get(1), this.points[k1].get(2), this.points[k1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k1+1].get(1), this.points[k1+1].get(2), this.points[k1+1].get(3));
                }
                if(i != (this.st-1)){
                    vertex(this.points[k1+1].get(1), this.points[k1+1].get(2), this.points[k1+1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k2+1].get(1), this.points[k2+1].get(2), this.points[k2+1].get(3));
                }
            }

        }
        endShape()
    }
}
class Pyramid{
    constructor(x,y,z,w,h,l,hp){
        this.points = [];

        this.points.push(new Vector(3,[x, y, z]))
        this.points.push(new Vector(3,[x, y + h, z]))
        this.points.push(new Vector(3,[x + w, y, z]))
        this.points.push(new Vector(3,[x + w, y + h, z]))

        this.points.push(new Vector(3,[x + w, y, z + l]))
        this.points.push(new Vector(3,[x + w, y + h,z + l]))
        this.points.push(new Vector(3,[x, y, z + l]))
        this.points.push(new Vector(3,[x, y + h, z + l]))

        this.points.push(new Vector(3,[(x + w/2), (y + h) - hp, (z + l/2)]))

        this.transform = new Transformation()
        
    }

    draw(){
        beginShape(TRIANGLES);

        // strokeWeight(2)
        // stroke('#ffffff')

        //Base Laterais
        for (let i = 0; i < this.points.length-1; i++) {
            for (let j = i; j <= i + 2; j++) {
                if(j >= this.points.length-1){
                    let u = j - (this.points.length-1)
                    vertex(this.points[u].get(1), this.points[u].get(2), this.points[u].get(3));
                }else{
                    vertex(this.points[j].get(1), this.points[j].get(2), this.points[j].get(3));
                }
                
            }
        }
        
        //Base Face Inferior
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
        
        //Laterais Piramide
        for (let j = 0; j < 4; j++) {
            let p_inicio = j*2
            let p_fim = p_inicio + 2
            if(p_inicio == 6){
                p_fim = 0
            }
            vertex(this.points[p_inicio].get(1), this.points[p_inicio].get(2), this.points[p_inicio].get(3));
            vertex(this.points[8].get(1), this.points[8].get(2), this.points[8].get(3));
            vertex(this.points[p_fim].get(1), this.points[p_fim].get(2), this.points[p_fim].get(3));
            
        }
        
        endShape()
    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],dx,dy,dz)
            
        }
    }

    translateToOrigin(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.translate3D(this.points[i],-dx,-dy,-dz)
            
        }
    }

    scale(k){
        
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.scale3D(this.points[i],k)
        }
        
    }
    
    rotate(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dy(this.points[i],angle)
        }
        
    }

    rotateZ(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dz(this.points[i],angle)
        }
        
    }

    rotateX(angle){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.transform.rotation3Dx(this.points[i],angle)
        }
        
    }

}
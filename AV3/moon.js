class Moon{
    constructor(diameter,distance,rotation,translation,praio,color){
        this.r = ((12742*diameter)/2)*0.0004
        this.distance = (distance*149600000)*0.0000004+praio
        this.rotation = 2*Math.PI/(24*rotation)
        this.translation = 2*Math.PI/(365*translation)
        this.sphere = new Sphere(this.distance,0,0,this.r,8,8,color)
    }

    rotate(x,y,z){
        
        this.sphere.translateToOrigin(x,y,z)
        this.sphere.rotate(this.rotation)
        this.sphere.translate(x,y,z)
        
    }
    orbit(){
        this.sphere.rotate(this.translation)
        
    }
    move(x,y,z){
        let px = x-this.sphere.points[0].get(1)
        let py = y-this.sphere.points[0].get(2)
        let pz = z-this.sphere.points[0].get(3)
        this.sphere.translateToOrigin(px,py,pz)
        this.orbit()
        this.rotate(x,y,z)
    }
    test(px,py,pz){
        this.sphere.translateToOrigin(px,py,pz)
        this.sphere.rotate(this.rotation)
        this.sphere.translate(px,py,pz)

    }
    draw(){
        this.sphere.draw()
    }
}
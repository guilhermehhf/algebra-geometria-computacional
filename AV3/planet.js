class Planet{
    constructor(diameter,distance,rotation,translation,color){
        this.moons = []
        this.r = ((12742*diameter)/2)*0.0004
        this.distance = (distance*149600000)*0.0000004+50
        this.rotation = 2*Math.PI/(24*rotation)
        this.translation = 2*Math.PI/(365*translation)
        this.sphere = new Sphere(this.distance,0,0,this.r,8,8,color)
    }
    rotate(){
        let x = this.sphere.points[0].get(1)
        let y = this.sphere.points[0].get(2)
        let z = this.sphere.points[0].get(3)
        this.sphere.translateToOrigin(x,y,z)
        this.sphere.rotate(this.rotation)
        this.sphere.translate(x,y,z)
        // this.movimentMoons(x,y,z)
    }
    addMoon(diameter,distance,rotation,translation,color){
        this.moons.push(new Moon(diameter,distance,rotation,translation,this.r,color))
        
    }
    movimentMoons(px,py,pz){
        for (let m = 0; m < this.moons.length; m++) {
            let x = this.moons[m].sphere.points[0].get(1)
            let y = this.moons[m].sphere.points[0].get(2)
            let z = this.moons[m].sphere.points[0].get(3)
            this.moons[m].sphere.translate(px,py,pz)
            this.moons[m].move(x,y,z)
        }
    }
    scale(k){
        this.sphere.translateToOrigin()
        this.sphere.scale(k)
        this.sphere.translate(this.sphere.x,this.sphere.y,this.sphere.z)
    }
    orbit(){
        this.sphere.rotate(this.translation)
    }
    move(){
        this.orbit()
        this.rotate()
    }
    draw(){
        this.sphere.draw()
        this.move()
    }
}


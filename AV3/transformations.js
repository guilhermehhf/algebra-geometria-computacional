class Transformation{

    reflection2Dx(v){
        let t = new Matrix(2,2,[1,0,0,-1])
        return la.dot(t,v)
    }
    reflection2Dy(v){
        let t = new Matrix(2,2,[-1,0,0,1])
        return la.dot(t,v)
    }
    reflection2Dxy(v){
        let t = new Matrix(2,2,[-1,0,0,-1])
        return la.dot(t,v)
    }



    reflection3Dx(v){
        let t = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1])
        return la.dot(t,v)
    }
    reflection3Dy(v){
        let t = new Matrix(3,3,[-1,0,0,0,1,0,0,0,1])
        return la.dot(t,v)
    }
    reflection3Dz(v){
        let t = new Matrix(3,3,[1,0,0,0,1,0,0,0,-1])
        return la.dot(t,v)
    }



    projection2Dx(v){
        let t = new Matrix(2,2,[1,0,0,0])
        return la.dot(t,v)
    }
    projection2Dy(v){
        let t = new Matrix(2,2,[0,0,0,1])
        return la.dot(t,v)
    }
    projection3Dx(v){
        let t = new Matrix(3,3,[1,0,0,0,0,0,0,0,1])
        return la.dot(t,v)
    }
    projection3Dy(v){
        let t = new Matrix(3,3,[0,0,0,0,1,0,0,0,1])
        return la.dot(t,v)
    }
    projection3Dz(v){
        let t = new Matrix(3,3,[1,0,0,0,1,0,0,0,0])
        return la.dot(t,v)
    }



    shearingx(v,k){
        let t = new Matrix(2,2,[1,k,0,1])
        return la.dot(t,v)
    }
    shearingy(v,k){
        let t = new Matrix(2,2,[1,0,k,1])
        return la.dot(t,v)
    }



    scale2Dx(v,k){
        let t = new Matrix(2,2,[k,0,0,1])
        return la.dot(t,v)
    }
    scale2Dy(v,k){
        let t = new Matrix(2,2,[1,0,0,k])
        return la.dot(t,v)
    }



    scale3Dx(v,k){
        let t = new Matrix(3,3,[k,0,0,0,1,0,0,0,1])
        return la.dot(t,v)
    }
    scale3Dy(v,k){
        let t = new Matrix(3,3,[1,0,0,0,k,0,0,0,1])
        return la.dot(t,v)
    }
    scale3Dz(v,k){
        let t = new Matrix(3,3,[1,0,0,0,1,0,0,0,k])
        return la.dot(t,v)
    }
    scale3D(v,k){
        let t = new Matrix(3,3,[k,0,0,0,k,0,0,0,k])
        return la.dot(t,v)
    }



    rotation2D(v,angle){
        let t = new Matrix(2,2,[Math.cos(angle),-Math.sin(angle),Math.sin(angle),Math.cos(angle)])
        return la.dot(t,v)
    }



    rotation3Dx(v,angle){
        let t = new Matrix(4,4,[1,0,0,0,0,Math.cos(angle),-Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1])
        return this.workWithHomogeneousCoordinates(t,v)
    }
    rotation3Dy(v,angle){
        let t = new Matrix(4,4,[Math.cos(angle),0,Math.sin(angle),0,0,1,0,0,-Math.sin(angle),0,Math.cos(angle),0,0,0,0,1])
        return this.workWithHomogeneousCoordinates(t,v)
    }
    rotation3Dz(v,angle){
        let t = new Matrix(4,4,[Math.cos(angle),-Math.sin(angle),0,0,Math.sin(angle),Math.cos(angle),0,0,0,0,1,0,0,0,0,1])
        return this.workWithHomogeneousCoordinates(t,v)
    }



    translate2D(v,dx,dy){
        let t = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1])
        return this.workWithHomogeneousCoordinates(t,v)
    }
    translate3D(v,dx,dy,dz){
        let t = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])
        return this.workWithHomogeneousCoordinates(t,v)
    }




    workWithHomogeneousCoordinates(t,v){
        let vectorch = new Vector(v.rows + 1)
        for(let i = 1; i < vectorch.rows; i++){
            vectorch.set(i, v.get(i))
        }

        vectorch.set(vectorch.rows, 1)

        let resultDot = la.dot(t, vectorch)

        let endvector = new Vector(v.rows)
        for(let j = 1; j <= v.rows; j++){
            endvector.set(j, resultDot.get(j)/resultDot.get(resultDot.rows))
        }

        return endvector
    }

}
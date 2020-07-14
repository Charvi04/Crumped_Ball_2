class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            isStatic:false,
            'restitution':0.5,
            'friction':1.0,
            'density':0.5,
            stiffness:0.04,
            length:10
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;

    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
            
           
           
    }
    

 }
    
    

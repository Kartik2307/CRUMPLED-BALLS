class Paper {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
          'restitution':0.5,
          'friction':0.5,
          'density':1.5
      }
      this.body = Bodies.circle(x, y,radius, options);
     this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      
      fill("white");
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
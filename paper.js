class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density: 1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      rotate(angle);
      fill("red");
      circle(0, 0, this.width, this.height);
      pop();
    }
  };
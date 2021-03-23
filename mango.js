class Mango {
    constructor(x,y,radius) {
      var options = {
          'isStatic': true,
          'restitution': 1,
          'friction': 1.5,
          'density': 1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius;
     
      this.image = loadImage("sprites/mango.png")
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      rectMode(CENTER);
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0, this.r*2, this.r*2);
      pop();
    }
  };
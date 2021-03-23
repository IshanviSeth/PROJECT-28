class Boy {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': true,
          'restitution': 1,
          'friction': 1.5,
          'density': 1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/boy.png")
      World.add(world,this.body);
    }
    attach(body){
      this.boy.bodyA = body;
  }
  
  fly(){
      this.boy.bodyA = null;
  }

    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("blue");
      image(this.image,pos.x,pos.y,this.width,this.height);
    }
  };
class Monster {
    constructor (x,y,width,height){
      var boxoptions = {
        restitution:0.6,
        friction:0.5,
        density:0.6,
      }
      this.body=Bodies.rectangle(x,y,width,height,boxoptions)
      this.image = loadImage("monster1.jpg");
      this.width=width
      this.height=height
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      
     image(this.image,0,0,this.width,this.height)
      pop();
    }
  
  }
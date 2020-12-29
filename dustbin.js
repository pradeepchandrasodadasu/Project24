class Box{
    constructor (x,y,w,h){
      var options = {
        isStatic : true,
        restitution : 0,
        friction : 0.3,
        density : 1.0,
        
      }

      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = w;
      this.height = h;
      World.add(world,this.body);
    }

    display () {

      var pos = this.body.position;
      rectMode(CENTER);
      fill("red");
      stroke("red");
      rect(pos.x,pos.y,this.width,this.height);
  
  
  }
}

class Paper {
    constructor(x,y,r){
        var ball_options = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           denity : 1.2

        }
        this.body = Bodies.circle(x,y,r/2,ball_options);
        this.body.radius = r;
        this.body.x = x;
        this.body.y = y;
        World.add(world,this.body);
    }

    display (){

        var pos = this.body.position;

        push();
        
        fill("blue");
        stroke("black");
        ellipse(pos.x,pos.y,this.body.circleRadius,this.body.circleRadius);
        pop();
     

    }
}

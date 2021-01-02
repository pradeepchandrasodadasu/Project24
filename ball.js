class Paper {
    constructor(x,y,r){
        var ball_options = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           denity : 1.2

        }
        this.body = Bodies.circle(x,y,r/2,ball_options);
        World.add(world,this.body);
    }

    display (){

        var pos = this.body.position;

        push();
        fill("blue");
        stroke("black");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.body.circleRadius,this.body.circleRadius);
        pop();
     

    }
}

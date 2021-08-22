class Balls {
    constructor (x,y,radius){
        var props = {
          
            restitution : 0.8

        }

        this.body = Bodies.circle (x,y,radius,props);
        World.add (world,this.body);

        this.radius = radius;
       

    }

    show (){
        push ();
        fill (255);
        translate (this.body.position.x,this.body.position.y);
        ellipseMode (CENTER);
        ellipse (0,0,this.radius,this.radius);
        pop ();


    }
}
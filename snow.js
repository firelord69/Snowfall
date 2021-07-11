class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            
            
            
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(255,255),random(255,255),random(255,255))
        this.image = loadImage("snow4.webp")
        World.add(world,this.body);
        
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        image(this.image,pos.x,pos.y,50,50)
        pop();
    }

};
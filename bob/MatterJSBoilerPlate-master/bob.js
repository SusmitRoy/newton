class bob{
    constructor(x, y, radius) {
        var options = {
            'restitution': 1,
            'density':0.79,
            'friction':1,
            'isStatic': false,
        }
        
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;

        World.add(world, this.body);
      }

      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        fill("red")
        circle(0, 0, this.radius);
        pop();
      }
}
class Stone {
    constructor(x,y) {

	var options = {
		'restitution':0.8,
		'friction':0.9,
		'density':12  
};
this.body = Bodies.rectangle(x, y, 20, 140, options);
this.width = 20;
this.height = 140;
World.add(world, this.body);
};
display()
{
	  
    var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rectangle(0,0,this.width,this.length);
			pop()
};
};
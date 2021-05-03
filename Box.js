class Box {
constructor (x,y,width,height){
var options = {
    'restitution':0.8
}
this.body = Bodies.rectangle(x,y,width,height);
}
World.add(world, this.body)
}
















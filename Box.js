class Box {
    constructor (x,y,width,height){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    
}
















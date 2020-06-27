class Net
{
    constructor()
    {
        var options={
            isStatic: true
        }
    this.image = loadImage("sprites/net2.png");
    World.add(world,this.body);
    }

    display()
    {
        image(this.image,800,100);
    }



} 


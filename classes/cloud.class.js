class Cloud extends MoveableObject{
    y = 20;
    height = 250;
    width = 300;
    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png')

        this.x = Math.random() * 500;  
    }
}
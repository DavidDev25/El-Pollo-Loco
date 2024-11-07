class MoveableObject{
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    img;

    //loadImage('img/text.png');
    loadImage(path){
        this.img = new Image();
        this.img.src = path
    }

    moveLeft(){
        console.log('Moving Left');
        
    }

    moveRight(){
        console.log('Moving Right');        
    }
}
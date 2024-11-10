class MoveableObject{
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.11;
    otherDirection = false;
    speedY = 0; 
    acceleration = 2.5;


    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround()){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;  
            }
        }, 1000/25);
    }

    isAboveGround(){
       return this.y < 155;
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path
    }

    loadImages(arr){
        arr.forEach((path) => {
        let img = new Image()
        img.src = path;
        this.imageCache[path] =  img;
        });
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;    
        }, 1000 / 60); 
    }

    moveRight(){
    }

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length;    
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;  
    }
}
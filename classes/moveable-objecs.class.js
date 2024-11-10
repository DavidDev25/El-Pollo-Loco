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
            if(this.isAboveGround() || this.speedY > 0){
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

    draw(ctx){
        ctx.drawImage(this.img,this.x, this.y, this.width,this.height);
    }

    drawFrame(ctx){
        ctx.beginPath();
        ctx.lineWidth = '6';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x, this.y, this.width,this.height);
        ctx.stroke();
    }

    loadImages(arr){
        arr.forEach((path) => {
        let img = new Image()
        img.src = path;
        this.imageCache[path] =  img;
        });
    }

    moveLeft(){
       
            this.x -= this.speed;
    }

    moveRight(){
        this.x += this.speed;
    }

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length;    
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;  
    }

    jump(){
        this.speedY = 30;
    }
}
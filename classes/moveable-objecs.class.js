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
    energy = 100;
    lastHit = 0;
    storeActualTime = 0;

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
        if(this instanceof Character ||  this instanceof Chicken){
        ctx.beginPath();
        ctx.lineWidth = '6';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x, this.y, this.width,this.height);
        ctx.stroke();
    }
}
//character.isColliding(chicken)
isColliding(mo){
    return this.x + this.width > mo.x && 
    this.y + this.height  > mo.y && 
    this.x < mo.x &&
    this.y < mo.y + mo.height;
}

    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        } else{
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms 
        timepassed = timepassed / 1000; // Difference in seconds
        // console.log(timepassed);
        return timepassed < 1;
    }

    getActualTime(){
        let actualTime = new Date().getTime();
        return actualTime;
    }
    
    storeTime(){
        let lastTime = new Date().getTime();
        storeActualTime =  lastTime; 
        return storeActualTime;
    }


    startSleeping(){
        let idleTimer = new Date().getTime() ;
        return idleTimer;
    }

    isDead(){
        return this.energy == 0;
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
        let i = this.currentImage % images.length;    
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;  
    }

    jump(){
        this.speedY = 30;
    }
}
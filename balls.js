class Balls{
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xSpeed = random(-2, 2)*5;
        this.ySpeed = random(-2, 2)*5;
        this.c = color(random(255), random(255), random(255), random(100, 255));
    }

    show() {
        noStroke();
        fill(this.c);
        circle(this.x, this.y, 2*this.r);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    collision(_x, _y, _r) {
        if(this.checkCollisions(_x, _y, _r)){
            // if(dist(this.x, 0, _x, 0) == dist(0, this.y, 0, _y) == this.r + _r){
            //     this.xSpeed = - this.xSpeed;
            //     this.ySpeed = - this.ySpeed;
            // }
            if(dist(this.x, 0, _x, 0) > dist(0, this.y, 0, _y)){
                this.xSpeed = - this.xSpeed;
                this.c = color(random(255), random(255), random(255), random(100, 255))
            }
            if(dist(this.x, 0, _x, 0) < dist(0, this.y, 0, _y)){
                this.ySpeed = - this.ySpeed;
                this.c = color(random(255), random(255), random(255), random(100, 255))
            }
        }
    }

    checkHorizontal() {
        if(this.x <= this.r || this.x >= width - this.r) {
            this.x -= this.xSpeed
            this.xSpeed = -this.xSpeed;
            this.c = color(random(255), random(255), random(255), random(100, 255))
        }      
    }
    checkVertical() {
        if(this.y <= this.r || this.y >= height - this.r) {
            this.y -= this.ySpeed;
            this.ySpeed = -this.ySpeed;
            this.c = color(random(255), random(255), random(255), random(100, 255))
        }
    }
    
    checkCollisions(_x, _y, _r) {
        this.d = dist(this.x, this.y, _x, _y)
        if(this.d <= this.r + _r + 2) {
            return true;
        }
        else{
            return false;
        }
    }

    over(mx, my){
        if(dist(this.x, this.y, mx, my) <= r) {
            return true;
        }
        return false;
    }

    remove(){

    }
}
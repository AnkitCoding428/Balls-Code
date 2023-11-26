let balls = [];
n = 20;

function setup() {
    createCanvas(600, 600);
    background(0);
    for(let i = 0; i < n; i++){
        r = 20;
        x = random(r, width - r);
        y = random(r,height - r);
        b = new Balls(x, y, r);
        balls.push(b);
    }
    // b1 = new Balls(300, 200, 20);
    // b2 = new Balls(300, 400, 20);
    // b1.xSpeed = 2;
    // b2.xSpeed = 2;
    // b1.ySpeed = 5;
    // b2.ySpeed = -5;
    // b1.c = 150;
}

function mousePressed() {

}

function draw() {
    background(255);
    // for(let x = 0; x < width; x += 40){
    //     for(let y = 0; y < height; y += 40){
    //         noFill();
    //         stroke(0, 255);
    //         strokeWeight(2);
    //         square(x, y, 40);
    //     }
    // }
    for(b of balls) {
        b.show();
        b.update();
        b.checkHorizontal();
        b.checkVertical();
    }
    // for(let i = 0; i < balls.length; i++) {
    //     for(let j = 0; j < balls.length; j++) {
    //         if(i != j){
    //             balls[i].collision(balls[j].x, balls[j].y, balls[j].r);
    //         }
    //     }
    // }
    // b1.show();
    // b1.update();
    // b2.show();
    // b2.update();
    // b1.collision(b2.x, b2.y, b2.r);
    // b2.collision(b1.x, b1.y, b1.r);

    

    frameRate(60);
}

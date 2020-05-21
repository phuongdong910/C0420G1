let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let imgs = []; // car image
let barrierImgs = []; // barrier image
let barrierCoor = []; // coordinate of barriers
let rewardImgs = []; // reward image
let rewardCoor = []; // reward coor.
let imgNames = ["car.png","carD.png","carL.png","carR.png"]
// first position
let x = 200, y = 200;
let speed = 3;// speed default
let lastKey = 38; // key up default
let idTimeout;
let point = 0;
// set window
canvas.height = 600;
canvas.width = 1200;
// create image array
for(let i = 0; i < 4; i++) {
    imgs[i] = new Image();
    imgs[i].src = "images/" + imgNames[i];
    barrierImgs[i] = new Image();
    barrierImgs[i].src = "images/box.gif";
    barrierCoor[i] = new Array(2); // 0: x, 1:y
    // add coin image
    rewardImgs[i] = new Image();
    rewardImgs[i].src = "images/coin.png";
    rewardCoor[i] = new Array(2); // 0: x, 1:y
}
window.onload = docReady();
function docReady() {
    window.addEventListener('keydown', moveSelection);
    // move();
}
displayImage();
// create car and barrier on window
function displayImage() {
    imgs[0].onload = () => {
        ctx.drawImage(imgs[0], x, y, 50, 50);
    }
    for(let i = 0; i < 4; i++) {
        barrierImgs[i].onload = () => {
            drawBarrier(barrierImgs[i], barrierCoor[i]);
        };
        rewardImgs[i].onload = () => {
            drawBarrier(rewardImgs[i], rewardCoor[i]);
        };
    }
}
function drawBarrier(barrierType, coordinate) {
    let x_rand;
    let y_rand;
    x_rand = Math.floor(Math.random() * (canvas.width - 50) + 100);
    y_rand = Math.floor(Math.random() * (canvas.height - 50) + 100);
    coordinate[0] = x_rand;
    coordinate[1] = y_rand;
    ctx.drawImage(barrierType, x_rand, y_rand, 50, 50);
}
// top-bottom
function checkTBBarrier(imgs, coordinate, pos) {
    let from_x, to_x;
    let tempY;
    let tempValue = -1;
    let delta = pos == 38 ? 50 : -50;
    for(let i = 0; i < 4; i++) {
        from_x = coordinate[i][0] - 50; //  - width car
        to_x = coordinate[i][0] + 50 + 50; // + width barrier + width car.
        tempY = coordinate[i][1] + delta; // +height barrier
        if((y > tempY - speed && y < tempY + speed) && (x >= from_x && x + 50 <= to_x)) {
            tempValue = i;
        }
    }
    return tempValue;
}
function process (num, result) {
    switch(num) {
        case 1:
            if(result != -1) {
                speed = 0;
                clearTimeout(idTimeout);
                alert("Game over");
                alert("You got " + point + " point.")
            }
            break;
        case 2:
            if (result != -1) {
                point++;
                console.log("point: "+ point);
                ctx.clearRect(rewardCoor[result][0],rewardCoor[result][1], 50, 50);
                drawBarrier(rewardImgs[result], rewardCoor[result])
            }
            break;
    }
}
function checkRLBarrier(imgs, coordinate, pos) { //right - left
    let from_y, to_y;
    let tempX;
    let tempValue = -1;
    let delta = pos == 37 ? 50 : -50;
    for(let i = 0; i < 4; i++) {
        from_y = coordinate[i][1] - 50; // height car
        to_y = coordinate[i][1] + 50 + 50; // + height barrier + height car.
        tempX = coordinate[i][0] + delta;
        if((x > tempX - speed && x < tempX + speed) && (y >= from_y && y + 50 <= to_y)) {
            tempValue = i;
        }
    }
    return tempValue;
}
function moveSelection(evt) {
    switch(evt.keyCode) {
        case 16:
            speed -= 3;
            if (speed < 0) speed = 0;
            break;
        case 17:
            speed += 3;
            break;
        default:
            lastKey = evt.keyCode;
    }
}
function move() {
    let id;
    ctx.clearRect(x, y, 50, 50);
    switch (lastKey) {
        case 37: // left
            x -= speed;
            id = checkRLBarrier(barrierImgs, barrierCoor, 37);
            process(1, id);
            id = checkRLBarrier(rewardImgs, rewardCoor, 37);
            process(2, id);
            if ( x < 0 ){
                x = 0;
                process(1, 0);
            }
            ctx.drawImage(imgs[2], x, y, 50, 50);
            break;
        case 39: //right
            x += speed;
            id = checkRLBarrier(barrierImgs ,barrierCoor, 39);
            process(1, id);
            id = checkRLBarrier(rewardImgs, rewardCoor, 39);
            process(2, id);
            if ( x > (canvas.width - 50)){
                x = canvas.width - 50;
                process(1, 0);
            }
            ctx.drawImage(imgs[3], x, y, 50, 50);
            break;
        case 38: //up
            y -= speed;
            id = checkTBBarrier(barrierImgs, barrierCoor, 38);
            process(1, id);
            id = checkRLBarrier(rewardImgs, rewardCoor, 38);
            process(2, id);
            if ( y < 0 ){
                y = 0;
                process(1, 0);
            }
            ctx.drawImage(imgs[0], x, y, 50, 50);
            break;
        case 40: //down
            y += speed;
            id = checkTBBarrier(barrierImgs, barrierCoor, 40);
            process(1, id);
            id = checkRLBarrier(rewardImgs, rewardCoor, 40);
            process(2, id);
            if ( y > (canvas.height - 50)){
                y = canvas.height - 50;
                process(1, 0);
            }
            ctx.drawImage(imgs[1], x, y, 50, 50);
            break;
    }
    idTimeout = setTimeout(move, 50);
    // window.requestAnimationFrame(move);
}
move();
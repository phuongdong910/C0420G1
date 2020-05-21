
function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += speed;
        // console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= speed;
        // console.log('ok: ' + this.left);
    }
    this.moveDown = function(){
        this.top += speed;
        // console.log('ok: ' + this.left);
    }
    this.moveUp = function(){
        this.top -= speed;
        // console.log('ok: ' + this.left);
    }

}

var hero = new Hero('https://file.tinnhac.com/resize/600x-/music/2018/09/03/20180903155711-11ad.gif', 30, 20, 200, 30);
let status = "right";
function start(){
    switch(status) {
        case "right":
            if(hero.left < window.innerWidth - hero.size){
                hero.moveRight();
            } else status = "down";
            break;
        case "down":
            if(hero.top < window.innerHeight - hero.size){
                hero.moveDown();
            } else status = "left";
            break;
        case "left":
            if(hero.left >= 20){
                hero.moveLeft();
            } else status = "up";
            break;
        case "up":
            if(hero.top >= 30){
                hero.moveUp();
            } else status = "right";
            break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 180)
}
start();
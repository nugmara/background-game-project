const canvas = document.querySelector("#canvas-screen");
const startGameButtonDOM = document.querySelector("#start-game");
const splashScreenDOM = document.querySelector("#splash-screen");
const gameOverDOM = document.querySelector("#game-over-screen");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 1200;
let gameSpeed = 5;
//let gameFrame = 0;

const backgroundLayer1 = new Image()
backgroundLayer1.src = "./images/layer-1-sky.png"
const backgroundLayer2 = new Image()
backgroundLayer2.src = "./images/layer-2-cloud.png"
const backgroundLayer3 = new Image()
backgroundLayer3.src = "./images/layer-3-rock-island.png"
const backgroundLayer4 = new Image()
backgroundLayer4.src = "./images/layer-4-toxic-ocean.png"
const backgroundLayer5 = new Image()
backgroundLayer5.src = "./images/layer-5-ground.png"
const backgroundLayer6 = new Image()
backgroundLayer6.src = "./images/layer-6-toxic-ocean-front.png"
const backgroundLayer7 = new Image()
backgroundLayer7.src = "./images/layer-7-cloud.png"

window.addEventListener("load",() => {
    const slider = document.getElementById("slider")
slider.value = gameSpeed;
const showGameSpeed = document.getElementById("showGameSpeed")
showGameSpeed.innerHTML = gameSpeed; 
slider.addEventListener("change", (event) => {
    gameSpeed = event.target.value;
    showGameSpeed.innerHTML = event.target.value; 
})

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 1200;
        //this.x2 = this.width;
        this.image = image; // create property called image on this new object you are creating rn and set it to image we passes on line 26
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier
        
        if ( this.x <= -this.width){
            this.x =  0;
        }
        /*
        if ( this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }*/
        this.x = this.x - this.speed
        //this.x2 = Math.floor(this.x2 - this.speed);
        //this.x = gameFrame *  this.speed % this.width;
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)

    }
}

const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 1);
const layer6 = new Layer(backgroundLayer6, 1.2);
const layer7 = new Layer(backgroundLayer7, 1.4);

const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6, layer7]

animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    gameObjects.forEach((object) => {
        object.update()
        object.draw()
    })
    //gameFrame--
    requestAnimationFrame(animate)
}
animate()
})



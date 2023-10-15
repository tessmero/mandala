

// Initialize the game
function init() {
    var cvs = document.getElementById("gameCanvas");
    cvs.addEventListener("mousedown", resetGame);
    cvs.addEventListener("touchmove", resetGame);
    
    
    global.canvas = cvs
    global.ctx = cvs.getContext("2d");
    
    
    resetRand() // math/rng.js
    fitToContainer()
    resetGame()
    requestAnimationFrame(gameLoop);
}


function resetGame(){
    resetRand(hard=true)
    global.autoResetCountdown = global.autoResetDelay
    global.activePatterns = []
    global.currentPatternIndex = 0
    

    global.ctx.fillStyle = global.backgroundColor
    global.ctx.fillRect(-10,-10,20,20)
}

// Main game loop
let secondsPassed;
let oldTimeStamp;
let fps;

var testX = .4

function gameLoop(timeStamp) {
    
    var msPassed = 0;
    if (oldTimeStamp) {
      msPassed = timeStamp - oldTimeStamp;
    }
    var secondsPassed = msPassed / 1000;
    oldTimeStamp = timeStamp;
    var fps = Math.round(1 / secondsPassed);


    msPassed = Math.min(msPassed,50)

    update(msPassed);
    draw(fps);
    
    

    requestAnimationFrame(gameLoop);
}


// Initialize the game
init();


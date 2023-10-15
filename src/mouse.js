function updateMousePos(event){
    
    
    var rect = global.canvas.getBoundingClientRect();
    var scaleX = global.canvas.width / rect.width;
    var scaleY = global.canvas.height / rect.height;
    
    global.canvasMousePos = new Vector( 
        (event.clientX - rect.left) * scaleX, 
        (event.clientY - rect.top) * scaleY 
    
    )
    global.mousePos = new Vector( 
        (global.canvasMousePos.x-global.canvasOffsetX)/global.canvasScale, 
        (global.canvasMousePos.y-global.canvasOffsetY)/global.canvasScale
    )
}

function mouseMove(e){
    updateMousePos(e)
    
    if( false ){
        // apply user-set motion
        global.autoMoveCountdown = global.autoMoveDelay
        global.innerFocus = global.mousePos.x
        global.outerFocus = global.mousePos.y
    }
    
}

function mouseClick(e){
    updateMousePos(e)
    
    //global.debugPoint = global.mousePos
    resetGame()
}
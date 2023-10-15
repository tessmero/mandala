

function update(dt) { 
    global.t += dt
    global.currentHi = Math.floor(global.t/global.layerDelay)

    if( (global.activePatterns.length < global.maxActivePatterns) 
            && (global.currentPatternIndex < global.maxTotalPatterns) ){
            
        global.patternCountdown -= dt
        while( global.patternCountdown < 0 ){
            
            // start new pattern
            global.patternCountdown += global.patternDelay
            global.activePatterns.push(getNextPattern())
        }
    }
    
    // remove finished patterns
    global.activePatterns = global.activePatterns.filter( p => !p.done )

    fitToContainer()  
}



var lastCanvasOffsetWidth = -1;
var lastCanvasOffsetHeight = -1;
function fitToContainer(){
    
    var cvs = global.canvas
    if( (cvs.offsetWidth!=lastCanvasOffsetWidth) || (cvs.offsetHeight!=lastCanvasOffsetHeight) ){
        
      cvs.width  = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
      lastCanvasOffsetWidth = cvs.width
      lastCanvasOffsetHeight = cvs.height
        
        var dimension = Math.max(cvs.width, cvs.height);
        global.canvasScale = dimension;
        global.canvasOffsetX = (cvs.width - dimension) / 2;
        global.canvasOffsetY = (cvs.height - dimension) / 2;
    global.ctx.setTransform(global.canvasScale, 0, 0, 
        global.canvasScale, global.canvasOffsetX, global.canvasOffsetY);
        
        var xr = -global.canvasOffsetX / global.canvasScale
        var yr = -global.canvasOffsetY / global.canvasScale
        global.screenCorners = [v(xr,yr),v(1-xr,yr),v(1-xr,1-yr),v(xr,1-yr)]
        global.screenCenter = v(.5,.5)
        
        global.ctx.fillStyle = global.backgroundColor
        global.ctx.fillRect(-10,-10,20,20)
    }
}
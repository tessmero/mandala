
    
    
// Render graphics
function draw(fps, t) {
    var g = global.ctx
    var canvas = global.canvas
    g.lineCap = 'round'
    g.lineJoin = 'round'

    // iterate over layers due for drawing
    while ( global.lastDrawnHi < global.currentHi ) {
        global.lastDrawnHi += 1
        
        // draw layer shadow
        global.activePatterns.forEach( p => p.draw(g,1) )
        
        // draw layer shadow
        global.activePatterns.forEach( p => p.draw(g,2) )

        // draw layer sand
        global.activePatterns.forEach( p => p.draw(g,0) )
        
        global.activePatterns.forEach( p => p.layerIndex += 1 )
    }
    
    
    // debug draw corners
    if( false ){
        global.screenCorners.forEach( c => {
            g.fillStyle = 'red'
            g.beginPath()
            g.moveTo(c.x,c.y)
            g.arc(c.x,c.y,.1,0,twopi)
            g.fill()
        })
    }

    // debug draw mouse
    if( global.debugMouse ){
        let c = global.mousePos
        g.fillStyle = 'red'
        g.beginPath()
        g.moveTo(c.x,c.y)
        g.arc(c.x,c.y,.01,0,twopi)
        g.fill()
    }

    //debug
    if( global.debugPoints ){
        g.fillStyle = 'red'
        g.beginPath()
        global.allPoints.forEach(p => p.draw(g))
        g.fill()
    }
}
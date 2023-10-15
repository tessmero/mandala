
    
    
// Render graphics
function draw(fps, t) {
    var g = global.ctx
    var canvas = global.canvas
    g.lineCap = 'round'

    // iterate over layers due for drawing
    while ( global.lastDrawnHi < global.currentHi ) {
        global.lastDrawnHi += 1
        
        // draw layer shadow
        g.strokeStyle = global.shadowColor[0]
        global.activePatterns.forEach( p => p.draw(g, global.shadowO[0] ) )
        
        // draw layer shadow
        g.strokeStyle = global.shadowColor[1]
        global.activePatterns.forEach( p => p.draw(g, global.shadowO[1] ) )

        // draw layer sand
        g.strokeStyle = global.sandColor
        global.activePatterns.forEach( p => p.draw(g ) )
        
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
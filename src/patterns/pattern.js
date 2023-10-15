// pattern provides 3d-printing instructions for one layer at a time
class Pattern {

    constructor(scale, pi){
        this.scale = scale
        this.patternIndex = pi
        
        // a step is a stack of layers
        // thickness decreases sharply between steps
        this.layersPerStep = 5
        this.layerIndex = 0
        
        // prepare color pallete (mostly one color)
        var lc = []
        var allColors = [
            // flat surface, dark shadow, light shadow
            ['#F6E0AE','#886666','#FFF5CC'], // wheat
            ['#FFB312','#884400','#FFBB22'], // butterscotch
            ['#85CFB4','#556633','#AAEEDD'], // eucalyptus
            ['#ED186B','#770011','#EE88AA'], // razz
        ]
        var c = allColors[randInt(0,allColors.length)]
        for( var i = 0 ; i < 10 ; i ++ ){
            lc.push((rand() > .8) ? c 
                : allColors[randInt(0,allColors.length)])
        }
        this.stepColors = lc
    }

    rc(v){
        var r = 10
        v += randInt(-r,r)
        if(v < 0) v = 0
        if(v > 255) v = 255
        return v
    }

    randomColorNoise(c,alpha){
        c = hexToRgb(c)
        var rad = 10
        var r = this.rc(c.r)
        var g = this.rc(c.g)
        var b = this.rc(c.b)
        return `rgba(${r},${g},${b},${alpha})`
    }

    draw(g,faceIndex,o=null){
        if( this.done ) return
        
        // determine color to draw
        var stepIndex = Math.floor(this.layerIndex/this.layersPerStep)
        if( stepIndex >= this.nSteps ){
            this.done = true
            return
        }
        var c = this.stepColors[stepIndex][faceIndex]
        var alpha = .6
        if( faceIndex == 1 ) alpha = .6
        if( faceIndex == 2 ) alpha = .6
        
        c = this.randomColorNoise(c,alpha)
        g.strokeStyle = c
        
        // compute precise position of the face to be drawn
        var offset = global.sandD.mul(this.layerIndex)
        offset = offset.add(global.patternO.mul(this.patternIndex))
        if( o ) offset = offset.add(o)
        if( faceIndex == 1 ) offset = offset.add( global.shadowO[0] )
        if( faceIndex == 2 ) offset = offset.add( global.shadowO[1] )
        
        
        // compute thickness of sand strip
        var taperIndex = this.layerIndex - (this.layersPerStep * stepIndex)
        var lw = this.stepThickness[stepIndex] - global.layerTaper*taperIndex
        g.lineWidth = lw
        
        // draw
        this._draw(g,offset)
    }
}
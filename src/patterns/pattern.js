// pattern provides 3d-printing instructions for one layer at a time
class Pattern {

    constructor(scale, pi){
        this.scale = scale
        this.patternIndex = pi
        
        // a step is a stack of layers
        // thickness decreases sharply between steps
        this.layersPerStep = 5
        this.layerIndex = 0
        
        // color each step, tending towards one solid color
        var lc = []
        var allColors = ['#F6E0AE','','','']
        this.layorColors = lc
    }

    draw(g,o=null){
        if( this.done ) return
        
        var offset = global.sandD.mul(this.layerIndex)
        offset = offset.add(global.patternO.mul(this.patternIndex))
        if( o ) offset = offset.add(o)
        
        var stepIndex = Math.floor(this.layerIndex/this.layersPerStep)
        if( stepIndex >= this.nSteps ){
            this.done = true
            return
        }
        var taperIndex = this.layerIndex - (this.layersPerStep * stepIndex)
        var lw = this.stepThickness[stepIndex] - global.layerTaper*taperIndex
        g.lineWidth = lw
        g.beginPath()
        this._draw(g,offset)
        g.stroke()
    }
}
class Star extends Pattern {

    constructor(scale,pi){
        super(scale,pi)
        
        // a step is a stack of layers
        // thickness decreases sharply between steps
        var st = [ .09,.06,.02  ]
        this.nSteps = st.length
        this.stepThickness = st.map( t => t*scale )
        
        this.rad = scale*.4
        this.nVerts = randInt(3,6)
        this.nReps = randInt(2,4)
    }
    

    _draw(g,offset=null){
        for( var i = 0 ; i < this.nReps ; i++ ){
            var angle = pio2 + twopi * i / this.nReps
            for( var j = 0 ; j <= this.nVerts ; j++ ){
                var a = angle + twopi * j / this.nVerts
                var p = global.screenCenter.add( vp( a, this.rad ) )
                if( offset ) p = p.add(offset)
                if( j == 0 ){
                    g.moveTo( p.x, p.y )
                } else {
                    g.lineTo( p.x,p.y )
                }
            }
        }
    }
}
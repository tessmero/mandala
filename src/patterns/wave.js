class Wave extends Pattern {

    constructor(scale,pi){
        super(scale,pi)
        
        // a step is a stack of layers
        // thickness decreases sharply between steps
        var st = [ .09,.06,.02  ]
        this.nSteps = st.length
        this.stepThickness = st.map( t => t*scale )
        
        this.rad = [-scale*.2,scale*.4]
        this.nPers = 6 * randInt(1,3)
    }
    

    _draw(g,offset=null){
        g.beginPath()
        var n = 10000
        for( var i = 0 ; i <= n ; i++ ){
            var a = pio2 * twopi * i / n
            var r = avg( ...this.rad, (Math.cos(a*this.nPers)+1)/2 )
            a += 0
            var p = global.screenCenter.add( vp( a, r ) )
            if( offset ) p = p.add(offset)
            if( i == 0 ){
                g.moveTo( p.x, p.y )
            } else {
                g.lineTo( p.x,p.y )
            }
        }
        g.stroke()
    }
}
class Mandala extends Pattern {

    constructor(scale,pi){
        super(scale,pi)
        
        // a step is a stack of layers
        // thickness decreases sharply between steps
        var st = [ .09,.06,.02  ]
        this.nSteps = st.length
        this.stepThickness = st.map( t => t*scale )
        
        this.rad = scale*.4
        this.nVerts = 12
        
        
        var n = 12
        var st = [ .04,.02,.01  ]
        
        if( scale < .4 ){
            
            //small
            n = 6
            st = [ .1, .04  ]
        } else if( scale < .8 ){
            
            //medium
            n = 12
            st = [ .04,.02,.01  ]
        }
        this.nVerts = n 
        this.baseRad = .2*this.scale
        this.nSteps = st.length
        this.stepThickness = st.map( t => t*scale )
        
    }
    

    _draw(g,offset=null){
        g.beginPath()
        for( var i = 0 ; i < this.nVerts ; i++ ){
            var a1 = twopi * i / this.nVerts
            var p1 = global.screenCenter.add( vp( a1, this.rad ) ).add(offset)
            for( var j = i+1 ; j <= this.nVerts ; j++ ){
                var a2 = twopi * j / this.nVerts
                var p2 = global.screenCenter.add( vp( a2, this.rad ) ).add(offset)
                g.moveTo( p1.x, p1.y )
                g.lineTo( p2.x, p2.y )
            }
        }
        g.stroke()
    }
}
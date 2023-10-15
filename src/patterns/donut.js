class Donut extends Pattern {
    constructor(scale,pi){
        super(scale,pi)
        
        //large
        var n = 24
        var st = [ .06,.04,.02  ]
        
        if( scale < .4 ){
            
            //small
            n = 6
            st = [ .1, .04  ]
        } else if( scale < .8 ){
            
            //medium
            n = 12
            st = [ .09,.05,.02  ]
        }
        this.baseRad = .2*this.scale
        
        // a step is a stack of layers
        // thickness decreases sharply between steps
        this.nSteps = st.length
        this.stepThickness = st.map( t => t*scale )
    
        
        this.allPoints = [] // ControlPoint instances
        this.allCircles = [] // Circle instances
    
    
        var baseRad = this.baseRad
        
        var dangle = twopi / n
        for( var i = 0 ; i < n ; i++ ){
            let angle = dangle*i + .08
            
            let pos = global.screenCenter//.add(vp(angle+pio2,baseRad))
            let b = new ControlPoint(pos)
            b.useOuterFocus = true
            let c = new ControlPoint(global.screenCenter.add(vp(angle-pio2,baseRad)))
            
            this.allPoints.push(b,c)
            let j = this.allPoints.length
            var bases = [j-1,j-2]
            
            pos = global.screenCenter.sub(vp(angle,baseRad*2))
            let controlPoint = new ControlPoint(pos)
            controlPoint.useInnerFocus = true
            this.allPoints.push(controlPoint)
            let cop = this.allPoints.length-1
            this.allCircles.push(new Circle( this, bases[0], bases[1], cop ))
        }
    }

    _draw(g,offset=null){
        this.allCircles.forEach( b => b.draw(g,offset) )
    }
}
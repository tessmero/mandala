// circle defined by three points
// prnt (parent) is instance of Pattern
// a,b,c are indices of control points in prnt.allPoints
class Circle {
    constructor(prnt,a,b,c){
        this.prnt = prnt
        this.a = a
        this.b = b
        this.c = c
    }
    
    xyr(){
        
        var a = this.prnt.allPoints[this.a].pos
        var b = this.prnt.allPoints[this.b].pos
        var c = this.prnt.allPoints[this.c].pos
        
        var xyr = constructCircle( 
            a.x,a.y, 
            b.x,b.y, 
            c.x,c.y )
            
        return xyr
    }
    
    draw(g, offset=null){
        
        var xyr = this.xyr()
        if( offset ){
            xyr[0] += offset.x
            xyr[1] += offset.y
        }
        
        g.moveTo( xyr[0]+xyr[2], xyr[1],  )
        g.arc(  xyr[0], xyr[1], xyr[2], 0, twopi )
    }
    
    
}
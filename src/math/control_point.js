// point defined by cartesian coordinates
class ControlPoint extends Point{
    constructor( pos,extremes ){  
        super()    
        
        this.pos = pos
        this.extremes = extremes
        
        // flag for transition 
        // from user movement to auto movement
        this.oldStart = null
    }
    
    update(dt){        
        if( this.extremes ){
            let r = 0
            if( this.useInnerFocus ) r = global.innerFocus
            if( this.useOuterFocus ) r = global.outerFocus
            
            // check if finished transitioning
            // from user movement to auto movement
            if( this.oldStart && (r>=.5) ){
                this.extremes[0] = this.oldStart
                this.oldStart = null
            }
            
            this.pos = va( this.extremes[0], this.extremes[1], r )
        }
    }
}
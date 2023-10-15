// point defined as midpoint between 2 points
// along the arc of the given circle
class ChildPoint extends Point{
    
    // all three params are indices in global circles/points
    constructor( circle, a, b, ratio=.5 ){
        super()
        
        this.circle = circle
        this.a = a
        this.b = b
        this.ratio = ratio
        
        this.computePos()
    }
    
    update(dt){
        this.computePos()
    }
    
    computePos(){
        this.updated = true
        
          var xyr = global.allCircles[this.circle].xyr()
          var cx = xyr[0]
          var cy = xyr[1]
          var r = xyr[2]
          
          var a = global.allPoints[this.a].pos
          var b = global.allPoints[this.b].pos
          
          // Calculate the angles of the two points
          let angle1 = Math.atan2(a.y - cy, a.x - cx);
          let angle2 = Math.atan2(b.y - cy, b.x - cx);

          // Calculate the angle difference
          let angleDiff = angle2 - angle1;

          // Ensure the shortest angle distance
          if (angleDiff > Math.PI) {
            angleDiff -= 2 * Math.PI;
          } else if (angleDiff < -Math.PI) {
            angleDiff += 2 * Math.PI;
          }

          // Find the weighted average angle
          let midAngle = angle1 + this.ratio * angleDiff;
          
          this.pos = v( cx, cy ).add( vp( midAngle, r ) )
    }
}
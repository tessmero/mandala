class Point {
    constructor(){
        this.children = [] // list of ChildPoint instances
    }
    
    draw(g){
        var c = this.pos
        g.moveTo(c.x,c.y)
        g.arc(c.x,c.y,.01,0,twopi)
    }
}
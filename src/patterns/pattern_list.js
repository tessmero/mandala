

function getNextPattern(){
    var scale = 1.1 - .2*global.currentPatternIndex
    var result
    
    var i = randInt(0,3)
    
    if( i == 0 ){
        result = new Donut(scale,global.currentPatternIndex)
    } else if (i == 1 ){
        result = new Mandala(scale,global.currentPatternIndex)
    } else if (i == 2 ){
        result = new Star(scale,global.currentPatternIndex)
    }
    
    global.currentPatternIndex += 1
    
    return result;
    
}
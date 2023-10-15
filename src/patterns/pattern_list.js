

function getNextPattern(){
    var scale = 1.1 - .18*global.currentPatternIndex
    var result
    
    var i = randInt(0,2)
    if( i == 0 ){
        result = new Donut(scale,global.currentPatternIndex)
    } else if (i == 1 ){
        result = new Star(scale,global.currentPatternIndex)
    }
    
    global.currentPatternIndex += 1
    
    return result;
    
}
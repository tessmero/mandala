

function getNextPattern(){
    var scale = 1.1 - .3*global.currentPatternIndex
    var result
    
    var i = randInt(0,2)
    
    // last one can'e be star
    if( global.currentPatternIndex == (global.maxTotalPatterns-1) ){
        i = randInt(0,1)
    }
    
    if( i == 0 ){
        result = new Donut(scale,global.currentPatternIndex)
    } else if (i == 1 ){
        result = new Star(scale,global.currentPatternIndex)
    }
    
    global.currentPatternIndex += 1
    
    return result;
    
}
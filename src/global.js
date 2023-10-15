const global = {
    // graphics context
    canvas: null,
    ctx: null,
    
    // relate pixels to virtual units
    canvasOffsetX: 0,
    canvasOffsetY: 0,
    canvasScale: 0,

    // mouse
    canvasMousePos: v(0,0),     //pixels
    mousePos: v(0,0),           //internal units

    // 
    shadowOffset: v(.001,.001),
    backgroundColor: '#F6E0AE',
    sandColor: '#F6E0AE',
    shadowColor: ['rgba(0,0,0,.5)','rgba(180,150,100,.2)'],
    lineWidth: .002,
    
    // overall speed settings
    layerDelay: 20, // ms per layer
    patternDelay: 100, // ms to spawn new pattern
    maxActivePatterns: 2,
    maxTotalPatterns: 4,
      
    // state
    t: 0, // total time elapsed
    activePatterns: [], // Pattern instances being drawn
    currentHi: 0, // (height index) of layer being drawn
    lastDrawnHi: -1,
    patternCountdown: 0, // ms until next pattern spawn
    currentPatternIndex: 0, // total number patterns so far
    
    // isometric perspective settings
    layerTaper: .001, // narrowing between layers, 0 -> 90 degree steps
    sandD: v(0,-.0005), // offset per layer of sand 
    patternO: v(0,-.005), // offset per pattern (a bunch of layers)
    shadowO: [v(.002,.002),v(-.001,-.001)], // shadow offset
    
    // move automatically if no user input
    autoMoveCountdown: 0,
    autoMoveDelay: 1000,
    
    
    
    //debug
    debugPoints: false,
    debugMouse: false,
}
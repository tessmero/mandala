// shorthands
var pi = Math.PI
var pio2 = Math.PI/2
var twopi = 2*Math.PI
function v(){return new Vector(...arguments)}
function vp(){return Vector.polar(...arguments)}


function getCircleIntersections(x1, y1, r1, x2, y2, r2) {
    const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    const a = (Math.pow(r1, 2) - Math.pow(r2, 2) + Math.pow(d, 2)) / (2 * d);
    const h = Math.sqrt(Math.pow(r1, 2) - Math.pow(a, 2));

    const x3 = x1 + a * (x2 - x1) / d;
    const y3 = y1 + a * (y2 - y1) / d;

    const offsetX = h * (y2 - y1) / d;
    const offsetY = h * (x2 - x1) / d;

    const intersection1 = v( x3 + offsetX,  y3 - offsetY );
    const intersection2 = v( x3 - offsetX, y3 + offsetY );

    return [intersection1, intersection2];
}

function segmentsIntersection(a1,a2,b1,b2) {
    var x1 = a1.x
    var y1 = a1.y
    var x2 = a2.x
    var y2 = a2.y
    var x3 = b1.x
    var y3 = b1.y
    var x4 = b2.x
    var y4 = b2.y
    
    // Calculate the cross products
    const crossProduct1 = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const crossProduct2 = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    const crossProduct3 = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);

    // Check if the line segments are not parallel
    if (crossProduct3 !== 0) {
        const t1 = crossProduct1 / crossProduct3;
        const t2 = crossProduct2 / crossProduct3;

        // Check if the intersection point is within the line segments
        if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
            const intersectionX = x1 + t1 * (x2 - x1);
            const intersectionY = y1 + t1 * (y2 - y1);

            return v( intersectionX, intersectionY );
        }
    }

    // Return null if there is no intersection
    return null;
}

function randRange(min,max){
    return min + rand()*(max-min)
}

function randInt(min,max){
    return Math.floor(randRange(min,max))
}

function randSign(){
    return rand() > .5 ? -1 : 1
}

function dist(a,b){
    var dx = a[0]-b[0]
    var dy = a[1]-b[1]
    return Math.sqrt( dx*dx + dy*dy )
}

function va(a,b,r=.5){
    return v(
        a.x*(1-r)+b.x*r, 
        a.y*(1-r)+b.y*r
    )
}

function avg(a,b,r=.5){
    return a*(1-r) + b*r
}

function avg2(a,b,r=.5){
    return [
        a[0]*(1-r) + b[0]*r,
        a[1]*(1-r) + b[1]*r,
    ]
}

//non negative modulo
function nnmod(a,b){
    var r = a%b
    if( r<0 ) return r+b
    return r
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(rand() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function constructCircle(x1, y1, x2, y2, x3, y3) {
const h = (
        (x1 * x1 + y1 * y1) * (y2 - y3) +
        (x2 * x2 + y2 * y2) * (y3 - y1) +
        (x3 * x3 + y3 * y3) * (y1 - y2)
    ) / (
        2 * (x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2)
    );

    const k = (
        (x1 * x1 + y1 * y1) * (x3 - x2) +
        (x2 * x2 + y2 * y2) * (x1 - x3) +
        (x3 * x3 + y3 * y3) * (x2 - x1)
    ) / (
        2 * (x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2)
    );

    const r = Math.sqrt((x1 - h) ** 2 + (y1 - k) ** 2);

    return [h,k,r]
}

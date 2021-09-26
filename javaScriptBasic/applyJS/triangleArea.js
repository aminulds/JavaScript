function triangleArea(base, height){
    var area = 0.5 * base * height;
    return area.toFixed(2);
}

var areaOfTriangle = triangleArea(3.5874, 2.3435345);
console.log(areaOfTriangle);
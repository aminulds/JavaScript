function sum(){
    var a = 20;
    var b = 30;
    var total = a + b;
    return total;
}

function areaOfTriangle (base, height){
    var triangleArea = 0.5 * base * height;
    triangleArea = triangleArea.toFixed(3);
    return triangleArea;
}

var areaTriangle = areaOfTriangle(2.335454, 4.5545);
// console.log(areaTriangle);

function grade(subjectName, mark){
    if (mark > 100) {
        return (subjectName + ' => Marks can`t over 100!\n');
    }
    else if (mark >= 80) {
        return (subjectName + ' => Grade: A+, Point: 5.00\n');
    }
    else if (mark >= 70) {
        return (subjectName + ' => Grade: A, Point: 4.00\n');
    }
    else if (mark >= 60) {
        return (subjectName + ' => Grade: A-, Point: 3.50\n');
    }
    else if (mark >= 50) {
        return (subjectName + ' => Grade: B, Point: 3.00\n');
    }
    else if (mark >= 40) {
        return (subjectName + ' => Grade: c, Point: 2.00\n');
    }
    else if (mark >= 33) {
        return (subjectName + ' => Grade: D, Point: 1.00\n');
    }
    else if (mark < 33) {
        return (subjectName + ' => Grade: F, Point: 0.00\n');
    }
    else{
        return (subjectName + ' => Marks Not Valid!\n');
    }
}

const bangla = grade('Bangla', 88);
const english = grade('English', 78);
const math = grade('Math', 67);
const islamic = grade('Islamic', 55);
const biology = grade('Biology', 45);
const physics = grade('Physics', 36);
const chemistry = grade('Chemistry', 25);



console.log(bangla, english, math, islamic, biology, biology, physics, chemistry);

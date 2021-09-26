function isLeapYear(year){
    if ((year % 4 == 0) || (year % 400 == 0) && (year % 100 != 0)) {
        return true;
    }
    else{
        return false;
    }
}

const leapYear = isLeapYear(2024);
console.log(leapYear);
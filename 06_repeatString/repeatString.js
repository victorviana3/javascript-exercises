const repeatString = function(string, num) {
    if (num < 0) return "ERROR"
    let stringReturn = ""
    for (i=0; i< num; i++){
        stringReturn = stringReturn + string
}
return stringReturn
};

// Do not edit below this line
module.exports = repeatString;

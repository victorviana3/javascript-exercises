const sumAll = function(firstOperator, secondOperator) {
    let sum =0
    if (firstOperator > 0 && Number.isInteger(firstOperator)){
        if(secondOperator > 0 && Number.isInteger(secondOperator)){
            if (secondOperator < firstOperator){
        const temp = firstOperator
        firstOperator = secondOperator
        secondOperator = temp
    }
    for (i=firstOperator; i <= secondOperator; i++){
        sum +=i
    }
    return sum;
        }
    }
    return "ERROR"
    
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(array, ...removeValues) {
    const arrayLength = array.length

    for (i = arrayLength; i >0 ; i--){
        for (const value of removeValues){
            if (array.indexOf(value) >= 0) array.splice(array.indexOf(value),1)
        }
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;

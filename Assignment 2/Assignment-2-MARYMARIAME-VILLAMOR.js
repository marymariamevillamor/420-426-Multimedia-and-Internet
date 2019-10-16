function xoReferee(firstRow, secondRow, thirdRow) {
    function splitString(value) {
        let stringIt = value.toString();
        let newValue = stringIt.split('');
        return newValue;
    }
    function checkResult(theArray) {
        //check by row
        for (let i = 0; i < gridSize; i++) {
            if (theArray[i][0] == theArray[i][1] == theArray[i][2]) {
                console.log("THERES A WINNER!");
            }
        }
    }
    let gridSize = 3;
    let winner = false;
    
    let arr1 = splitString(firstRow);
    let arr2 = splitString(secondRow);
    let arr3 = splitString(thirdRow);
    let bigArr = [arr1, arr2, arr3];
    checkResult(bigArr);
}


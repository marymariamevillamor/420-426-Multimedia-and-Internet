/*************************** 1. Tic-Tac-Toe Referee ************************/
function xoReferee(firstRow, secondRow, thirdRow) {
    function splitString(value) {
        let stringIt = value.toString();
        let newValue = stringIt.split('');
        return newValue;
    }
    function checkWinner(a) {
        let counter = 0;
        while (counter < a.length) {
            if (a[counter][0] == a[counter][1] && 
                a[counter][1] == a[counter][2]) {
                    return a[counter][counter];
            }
            else if (a[0][counter] == a[1][counter] &&
                a[2][counter]) {
                    return a[0][counter];
            }
            else if (a[0][0] == a[1][1] && a[1][1] == a[2][2] ||
                a[0][2] == a[1][1] && a[1][1] == a[2][0]) {
                    return a[1][1];
            }
            else {
                counter += 1;
            }
        }
        return "D";
    }
    
    let arr1 = splitString(firstRow);
    let arr2 = splitString(secondRow);
    let arr3 = splitString(thirdRow);
    let theArray = [arr1, arr2, arr3];
    
    console.log(checkWinner(theArray));
}

/*************************** 2. Pawn Brotherhood **************************/
function safePawns (pawnsCoordinates) {
    function splitString(value) {
        let stringIt = value.toString();
        let newValue = stringIt.split(',');
        return newValue;
    }
    prevLetter = prevL => String.fromCharCode(prevL.charCodeAt(0) - 1);
    nextLetter = nextL => String.fromCharCode(nextL.charCodeAt(0) + 1);
    concatPlace = (l, n) => l + n;
    function checkBackup (arr, left, right) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == left || arr[i] == right) {
                return true;
            }
        }
    }
    function isSafe(coordinatesArr) {
        let counter = 0;
        for (let i = 0; i < coordinatesArr.length; i++) {
            let currentPlace = coordinatesArr[i];
            let placeArr = currentPlace.split('');

            //finding back left coordinates
            let pl = prevLetter(placeArr[0]);
            let pn = (placeArr[1] - 1);
            let left = concatPlace(pl, pn);

            //finding back right coordinates
            let nl = nextLetter(placeArr[0]);
            let nn = (placeArr[1] - 1);
            let right = concatPlace(nl, nn);

            let backup = checkBackup(coordinatesArr, left, right);

            if (backup == true) {
                counter += 1;
            }
        }
        return counter;
    }
    let cString = splitString(pawnsCoordinates);
    let result = isSafe(cString);
    console.log(result);    
}

/*************************** 3. Rectangle Union ***************************/
function rectanglesUnion (Array) {
    
}

/******************************* 4. Fast Train ****************************/
function fastTrain(rail) {

}

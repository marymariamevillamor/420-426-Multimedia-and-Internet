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
function safePawns(pawnsCoordinates) {
    function splitString(value) {
        let stringIt = value.toString();
        let newValue = stringIt.split(',');
        return newValue;
    }
    prevLetter = prevL => String.fromCharCode(prevL.charCodeAt(0) - 1);
    nextLetter = nextL => String.fromCharCode(nextL.charCodeAt(0) + 1);
    concatPlace = (l, n) => l + n;
    function checkBackup(arr, left, right) {
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
function rectanglesUnion(shapes) {
    function calculateArea(points) {
        let value1 = points[2] - points[0];
        let value2 = points[3] - points[1];
        return value1 * value2;
    }
    function intersectedArea(r1, r2) {
        if (r1[0] < r1[2] && r1[2] > r2[0] && r1[1] < r2[3] && r1[3] > r2[1]) {
            //total intersected area
            let xdistance = Math.min(r1[2], r2[2]) - Math.max(r1[0], r2[0]);
            let ydistance = Math.min(r1[3], r2[3]) - Math.max(r1[1], r2[1]);
            let areaX = xdistance * ydistance;

            return areaX;
        }
        else {
            return 0;
        }
    }
    function intersectionExists(points) {    
        if (intersectedArea(points[0], points[1]) != 0) {
            return intersectedArea(points[0], points[1]);
        }
        else if (intersectedArea(points[1], points[2]) != 0) {
            return intersectedArea(points[1], points[2]);
        }
        else if (intersectedArea(points[2], points[0]) != 0) {
            return intersectedArea(points[2], points[0])
        }
        else {
            return 0;
        }
    }
    let a = shapes[0];
    let b = shapes[1];
    let c = shapes[2];

    let areaA = calculateArea(a);
    let areaB = calculateArea(b);
    let areaC = calculateArea(c);
    let areaX = intersectionExists(shapes);

    console.log((areaA + areaB + areaC) - areaX);
}

/******************************* 4. Fast Train ****************************/
function fastTrain(rail) {

}

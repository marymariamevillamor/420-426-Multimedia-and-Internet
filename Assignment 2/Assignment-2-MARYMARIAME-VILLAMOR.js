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

//TO DO - ASK FOR HELP
function safePawns (coordinates) {
    function splitString(value) {
        let stringIt = value.toString();
        let newValue = stringIt.split(',');
        return newValue;
    }
    function splitMeAgain(value) {
        let stringIt = value.toString();
        let newValue = stringIt.split('');
        return newValue;
    }

    function byIndex(a, rows, columns) {
        for (let i = 0; i < a.length; i++) {
            let indexVal = splitMeAgain(a[i]);


        }
    }

    let ranks = [1, 2, 3, 4, 5, 6, 7, 8];
    let files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let cString = splitString(coordinates);

    let runThis = byIndex(cString, ranks, files);
    console.log(runThis);
}

function rectagnlesUnion () {
    
}




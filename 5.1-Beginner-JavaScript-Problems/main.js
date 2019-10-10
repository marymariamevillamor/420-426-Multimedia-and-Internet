function multiplyTwoNumbers(num1, num2) {
    return result = num1 * num2;
}

function sayHi(name, age) {
    let salutation = "Hi. My name is " + name + " and I'm " + age + " years old."
    return salutation; 
}

function indexPower(array, n) {
    if (n > array.length) {
        return -1;
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (i == n){
                return Math.pow(array[i], n);  
            }          
        }
    }
}

function fizzBuzz(number) {
    if(number % 3 == 0 && number % 5 == 0) {
        return "Fizz Buzz"
    }
    else if(number % 3 == 0) {
        return "Fizz"
    }
    else if(number % 5 == 0) {
        return "Buzz"
    }
    else {
        return number;
    }
}

function multiplyDigits(digits) {
    let numArray = digits.toString();
    let result = 1;

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] != 0) {
            result *= numArray[i];
        }
    }   
    return result;
}

function secretCode(hiddenText) {
    let justString = hiddenText.split(' ').join('');
    let letter;
    let message = "";

    for (let i = 0; i < justString.length; i++) {
        letter = justString.charAt(i);
        if (letter >= 'A' && letter <= 'Z') {
            message += letter;
        }        
    }
    return message;
}
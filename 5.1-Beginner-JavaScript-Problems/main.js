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
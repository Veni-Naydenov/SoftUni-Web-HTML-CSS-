function Global(id) {
    // Every button in our html file has an unique id and value.To pass these values to our javascript we use
    // onclick Event: onclick="Global('num1')" . When we click some of the buttons it executes the function Global(id)
    // in our javascript . function Global(id) accepts a parameter id .We use that id in the code below,to take 
    // the value from the button, when we click it.

    /* with getElementById("display").value , we take the value from the input with id=display,
	 so str is that value ,which is String .   */
    var str = document.getElementById("display").value;
    var val = document.getElementById(id).value; //the String value from some of the buttons.

    //here we check the last char in our calculator display.If the value is " " ,that means that we have already
    // made a calculation and on the display is the result. So if we enter a new number the display will be cleaned
    //and there will be only the new values for calculation.But if the new value is an arithmetic operation 
    //we don't clear the display and continue to calculate.
    if (str[str.length - 1] === " "
        && (val !== "+" && val !== "-" && val !== "*" && val !== "/")) {
        document.getElementById("display").value = "";// clear the  <input type="text"  id="display">.
    }
    // call the function addValues().
    addValues(id);

    function addValues(id) {
        var inputedValue = document.getElementById(id).value;//the value from the button.
        var input = document.getElementById("display").value || "";//get the value from display.It is String.
        var array = input.split('');//split the string in to array.Each array element contains a char from the string 
        // if the array is empty (array.length === 0) and the clicked button is an arithmetic operation, we put
        // zero to our display. After the zero we add the clicked arithmetic operation.
        if (array.length === 0
            && (inputedValue === "-" || inputedValue === "+"
            || inputedValue === "/" || inputedValue === "*")) {

            document.getElementById("display").value += 0; // add zero.
            document.getElementById("display").value += inputedValue; //add arithmetic operation.

        } else if (inputedValue === "C") {
            document.getElementById("display").value = ""; // clear the display .
        }
        else if (inputedValue === "=") {
            var numArray = []; //array with numbers for calculation .

            for (var i = 0; i < array.length; i++) {

                var current = array[i];
                var currenrValue = ""; // this string will be the concatenated number.
                //array is a char array,so we need to collect the numbers.
                //In the while() we concatenate the digits in to a string.We concatenate until we met an arithmetic operation.   
                while (i < array.length
                    && (current !== "+" && current !== "-"
                    && current !== "*" && current !== "/")) {
                    currenrValue += current;
                    i++;
                    current = array[i];
                }
                numArray.push(currenrValue - 0);// add the number to the array. 
                //currenrValue is a String,so with -0 it becomes a Number.
            }

            var index = 1;// the index for the second number in numArray[].
            result = numArray[0];// numArray[0] is our first number for calculation

            for (var i = 0; i < array.length; i++) {
                current = array[i];
                if (current === "+") {       // when met an arithmetic operation we do it. 
                    result += numArray[index];
                    index++; // increments the index for the array with numbers.This is the next number for calculation.
                } else if (current === "-") {
                    result -= numArray[index];
                    index++;
                } else if (current === "*") {
                    result *= numArray[index];
                    index++;
                } else if (current === "/") {
                    result /= numArray[index];
                    index++;
                }
            }
            // After the calculation we add to the display the result. We also add a empty interval " ".
            // This " " will show us that the value to the display is THE RESULT FROM THE CALCULATION.
            document.getElementById("display").value = result + " ";
        } else if (inputedValue === "-" || inputedValue === "+"
            || inputedValue === "/" || inputedValue === "*" || inputedValue === ".") {
            //If we already have entered an arithmetic operation ,it is not allowed to enter arithmetic operation again.
            // So if we enter "+" and after that "-" , the minus won't be shown .
            if (inputedValue !== array[array.length - 1]
                && (array[array.length - 1] !== "+" && array[array.length - 1]
                   && array[array.length - 1] !== "*" && array[array.length - 1] !== "/"
                     && array[array.length - 1] !== ".")) {

                document.getElementById("display").value += inputedValue;//add the arithmetic operation to the display.
            }
        } else {
            // here we add the digit from some of the buttons. That digit will appear to the display.
            document.getElementById("display").value += inputedValue;
        }
    }
}
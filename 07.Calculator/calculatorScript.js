function Global(id) {
    var str = document.getElementById("display").value;
    var val = document.getElementById(id).value;

    if (str[str.length - 1] === " "
        && (val !== "+" && val !== "-" && val !== "*" && val !== "/")) {
        document.getElementById("display").value = "";
    }

    addValues(id);

    function addValues(id) {
        var inputedValue = document.getElementById(id).value;
        var input = document.getElementById("display").value || "";
        var array = input.split('');

        if (array.length === 0
            && (inputedValue === "-" || inputedValue === "+"
            || inputedValue === "/" || inputedValue === "*")) {

            document.getElementById("display").value += 0;
            document.getElementById("display").value += inputedValue;

        } else if (inputedValue === "C") {
            document.getElementById("display").value = "";
        }
        else if (inputedValue === "=") {
            var numArray = [];

            for (var i = 0; i < array.length; i++) {

                var current = array[i];
                var currenrValue = "";
                while (i < array.length
                    && (current !== "+" && current !== "-"
                    && current !== "*" && current !== "/")) {
                    currenrValue += current;
                    i++;
                    current = array[i];
                }
                numArray.push(currenrValue - 0);
            }

            var index = 1;
            result = numArray[0];

            for (var i = 0; i < array.length; i++) {
                current = array[i];
                if (current === "+") {
                    result += numArray[index];
                    index++;
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

            document.getElementById("display").value = result + " ";
        } else if (inputedValue === "-" || inputedValue === "+"
            || inputedValue === "/" || inputedValue === "*" || inputedValue === ".") {

            if (inputedValue !== array[array.length - 1]
                && (array[array.length - 1] !== "+" && array[array.length - 1]
                   && array[array.length - 1] !== "*" && array[array.length - 1] !== "/"
                     && array[array.length - 1] !== ".")) {

                document.getElementById("display").value += inputedValue;
            }
        } else {
            document.getElementById("display").value += inputedValue;
        }
    }
}
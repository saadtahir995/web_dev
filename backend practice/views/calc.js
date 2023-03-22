window.addEventListener('DOMContentLoaded', () => {
    const numeric_tiles = Array.from(document.querySelectorAll('.numeric_tiles'));
    const operation_tiles = Array.from(document.querySelectorAll('.operation_tiles'));
    const result_display = document.querySelector('.resultdisplay');
    var operand1 = ""; var operand2 = ""; var operator = ""; var res = 0; var count = 0; var chk = false;

    numeric_tiles.forEach(Element => {
        Element.addEventListener('click', () => {
            operand1 = `${operand1}${Element.innerHTML}`;
            result_display.innerHTML = operand1;

        });

    });
    operation_tiles.forEach(Element => {
        Element.addEventListener('click', () => {
            result_display.innerHTML = "";
            if (Element.innerHTML !== '=') {
                count++;
                if (count > 1) {

                    operator = Element.innerHTML;
                    if (operator == '+') {

                        res = +operand2 + +operand1;
                    }
                    else if (operator == '-') {
                        res = +operand2 - +operand1;
                    }
                    else if (operator == '*') {
                        res = +operand2 * +operand1;
                    }
                    else {
                        res = +operand2 / +operand1;
                    }
                    operand2 = res;

                }
                else {
                    operator = Element.innerHTML;
                    operand2 = operand1;
                }
                operand1 = "";
            }
            else {
                if (operator == '+') {
                    res = +operand2 + +operand1;
                }
                else if (operator == '-') {
                    res = +operand2 - +operand1;
                }
                else if (operator == '*') {
                    res = +operand2 * +operand1;
                }
                else {
                    res = +operand2 / +operand1;
                }
                result_display.innerHTML = res;

            }


        });

    });

});
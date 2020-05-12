var number1,number2,result,cal1;
var cham = false;
var dau = false;

function addNumber(cal) {
    var x = document.getElementById("textbox");
    switch(cal){
        case '.':
            if (!cham) {x.value = x.value+cal;}
            cham = true;
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (dau){x.value = '';dau=false;}
            x.value = x.value+cal;
            break;
        case 'AC':
            x.value = "";
            number1 = null;
            number2 = null;
            cal1 = null;
            result = null;
            cham = false;
            dau = false;
            break;
        case '+':
            number1 = x.value*1;
            cal1 = '+';
            dau = true;
            break;
        case '-':
            number1 = x.value*1;
            cal1 = '-';
            dau = true;
            break;
        case '*':
            number1 = x.value*1;
            cal1 = '*';
            dau = true;
            break;
        case '/':
            number1 = x.value*1;
            cal1 = '/';
            dau = true;
            break;
        case '=':
            number2 = x.value*1;
            switch (cal1){
                case '+':
                    result = number1+number2;
                    break;
                case '-':
                    result = number1-number2;
                    break;
                case '*':
                    result = number1*number2;
                    break;
                case '/':
                    result = number1/number2;
                    break;
            }
            x.value = result;
            break;
    }

}
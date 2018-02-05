var input = document.querySelector("#number");
var msg = document.querySelector("#message");

input.onfocus = function (){
    msg.style.display = 'block';
};

input.onblur = function() {
    msg.style.display='none';
};


function convert() {

    var nr = document.querySelector("#number").value;

    var romanToInt = function(s) {

        if (s == null || s == "") {
            return "Wpisz jakąś liczbę";
        }

        var s = s.toUpperCase();

        var digits = (""+s).split("");


        for (i=0; i<digits.length; i++){

            if(digits[i] == "I"){


                digits.splice(i,1, 1);

            } else if (digits[i] == "V"){

                digits.splice(i, 1, 5);

            } else if (digits[i] == "X"){

                digits.splice(i, 1, 10);

            } else if (digits[i] == "L"){

                digits.splice(i, 1, 50);

            } else if (digits[i] == "C"){

                digits.splice(i, 1, 100);

            } else if (digits[i] == "D"){

                digits.splice(i, 1, 500);

            } else if (digits[i] == "M"){

                digits.splice(i, 1, 1000);

            } else {
                return "Podaj poprawną liczbę";
            }

        }

        digits.reverse();

        for (i=0; i<digits.length; i++) {

            if (digits[i] === digits[i+1]) {

                digits[i] = digits[i] + digits[i + 1];

                digits.splice(i+1,1);

            } else if (digits[i + 1] < digits[i]){

                digits[i] =digits[i] - digits[i+1];

                digits.splice(i + 1, 1);

            } else if (digits[i + 1] < digits[i]) {

                digits[i] = digits[i] + digits[i+1];

                digits.splice(i+1,1);

            }

        }

        var wynik=0;

        for (i=0; i<digits.length; i++){

            wynik += digits[i];

        }


        return wynik;

    };


    document.getElementById("converted").innerHTML = romanToInt(nr);

}


function convert2() {

    var ar = document.querySelector("#arabic").value;


    var intToRoman = function(n) {

        var n = parseInt(n);

        if (n == null || n == "") {
            return "Pole nie może być puste";
        }

        var regex=/^[0-9]+$/;

        if (!ar.match(regex)) {

            return "Liczba może składać się tylko z cyfr arabskich (0-9)";
        }

        var decimal = [1,   4,   5,   9,  10,  40,  50,  90, 100, 400, 500, 900,1000];
        var roman = ["I","IV", "V","IX", "X","XL", "L","XC", "C","CD", "D","CM", "M"];

        var res = "";

        for (var i = 12; i >= 0; i--) {
            while (n >= decimal[i]) {
                res += roman[i];
                n -= decimal[i];
            }
        }
        return res;
    };

    document.getElementById("converted2").innerHTML = intToRoman(ar);

}

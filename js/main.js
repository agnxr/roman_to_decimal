function convert() {

    var nr = document.querySelector("#number").value;

    var romanToInt = function(s) {

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

            }

        }


        digits.reverse();



        console.log(digits);



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


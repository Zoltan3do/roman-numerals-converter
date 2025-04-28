// Converti il numero dato in un numero romano.

/*

Numeri romani	   Numeri arabi
M	               1000
CM	               900
D	               500
CD	               400
C	               100
XC	               90
L	               50
XL	               40
X	               10
IX	               9
V	               5
IV	               4
I	               1

*/

// Tutti i numeri romani nei risultati dovrebbero essere in maiuscolo. 


function convertToRoman(num) {

    function simbolo(s){
        if(s == 1) return "I";
        else if (s == 2) return "V";
        else if (s == 3) return "X";
        else if (s == 4) return "L";
        else if (s == 5) return "C";
        else if (s == 6) return "D";
        else if (s == 7) return "M";
        return "error";
    }

    let roman = "";
    let i = 1;
    let cinquina = 0;

    while(num != 0){

        let rest = num % 5;
        num -= rest;

        if(num % 10 == 5){
            cinquina = 1;
            num -= 5;
        }

        if(rest >= 0 && rest <= 3){
            let n = rest;
            while(n > 0){
                roman = simbolo(i) + roman;
                n--;
            }
            if(cinquina == 1){
                roman = simbolo(i + cinquina) + roman;
            }
        }

        if(rest == 4){
            if(cinquina == 1){
                roman = simbolo(i) + simbolo(i + 2) + roman;
            }else{
                roman = simbolo(i) + simbolo(i + 1) + roman;
            }
        }

        cinquina = 0;
        i = i + 2;
        num = Math.round(num / 10);
    }

    return roman;

}

console.log(convertToRoman(36));
// Convertitore di numeri romani
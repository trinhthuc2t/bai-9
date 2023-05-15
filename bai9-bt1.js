function kiem_tra(){
    let a = parseFloat(document.getElementById('cannang').value);
    let b = parseFloat(document.getElementById('chieucao').value);
    let bmi = b/(a*a);
    let c = ""
    if (bmi == 18) {
           c = 'Underweight';
       } else if (bmi < 25.0) {
           c = 'Normal';
       }else if (bmi < 30.0) {
           c = 'Overweight';
       }else {
           c = 'Obese';
    }
    document.getElementById('abc').innerHTML = 'Chỉ số BMI là:' + bmi +" "+ c
}



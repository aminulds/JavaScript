// function validateForm(){
//     let varName = document.forms['myform']['firstName'].value;
//     if (varName == ''){
//         alert("Please input your First Name!");
//         return false;
//     }
// }

function validateForm(){
    let number = document.getElementById('numb').value;
    let warning;
    if (isNaN(number) || number < 1 || number > 10){
        // document.getElementById('numb').style.border = '1px solid red';
        document.getElementById('numb').style.boxShadow = '1px 1px 2px red';
        warning = 'Input Not Valid!';
        document.getElementById('warning').style.color = 'red';
    }
    else{
        warning = 'Input OK!';
        document.getElementById('warning').style.color = 'green';
    }
    document.getElementById('warning').innerHTML = warning;
}

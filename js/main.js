function Agecalc(){
    var getAge = document.getElementById('dAge').value;
    getAge=parseFloat(getAge);
    if (isNaN(getAge)||getAge<0.1){
        alert("cant be blank! or age cant be below 0.0")
        document.getElementById('result').innerHTML = "";
    }else{
    var humanAge = ((getAge-2)*4)+21;
    document.getElementById('dAge').value="";
    document.getElementById('result').innerHTML =`
    Your Dog is ${humanAge} Years old in Human Years.`;
    }
}
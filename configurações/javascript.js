function mostrar(num){
    var número = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = número + num
}
function limpar(){
    document.getElementById('resultado').innerHTML = "";
}
function apagar1número(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerHTML = "Nada"

    }
}
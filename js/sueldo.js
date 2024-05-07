function obtenerIGSS(){
    document.getElementById("txt_IGSS").value=(parseFloat(document.getElementById("txt_salario").value)*0.0483);
}
function obtenerSueldo(){
    let totalGanado = parseFloat(document.getElementById("txt_salario").value)
    +parseFloat(document.getElementById("txt_bonificacion").value)
    +parseFloat(document.getElementById("txt_comisiones").value);
    let totalDescuento = parseFloat(document.getElementById("txt_ahorro").value)
    +parseFloat(document.getElementById("txt_IGSS").value)
    +parseFloat(document.getElementById("txt_prestamos").value);
    let total = totalGanado-totalDescuento;
    if(isNaN(total)){
        alert("Debes llenar todos los campos");
    }else{
        document.getElementById("totalIngresos").innerHTML="Q."+totalGanado;
        document.getElementById("totalEgresos").innerHTML="Q."+totalDescuento;
        document.getElementById("totalSalario").innerHTML="Q."+total;
    }
}
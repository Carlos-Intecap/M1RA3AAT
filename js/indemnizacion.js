function calcularDias() {
    let dias;
    let timeStart = new Date(document.getElementById("txt_fecha_inicial").value);
    let timeEnd = new Date(document.getElementById("txt_fecha_final").value);
    if (timeEnd > timeStart)
    {
        let diff = timeEnd.getTime() - timeStart.getTime();
        dias = Math.round(diff / (1000 * 60 * 60 * 24))+1;
        document.getElementById("txt_dias").value = dias;
        document.getElementById("txt_meses").value = Math.round(dias/30);
        document.getElementById("txt_cantidad").value = Math.round(dias/365);
    }
    else if (timeEnd != null && timeEnd < timeStart) {
        alert("La fecha final debe ser mayor a la fecha inicial");
        document.getElementById("txt_dias").value = 0;
    }
}
function obtenerIndemnizacion(){
    let sueldoBase = parseFloat(document.getElementById("txt_sueldo").value);
    let cantA = parseFloat(document.getElementById("txt_cantidad").value);
    let cantM = parseFloat(document.getElementById("txt_meses").value);
    let salarioPendiente = parseFloat(document.getElementById("txt_pendiente").value);
    let deudas = parseFloat(document.getElementById("txt_deudas").value);
    let bono14 = (sueldoBase/12)*cantM;
    let aguinaldo = (sueldoBase/12)*cantM;
    let indemnizacion = (sueldoBase*cantA)+bono14+aguinaldo+salarioPendiente-deudas;
    if(isNaN(indemnizacion)){
        alert("Debes llenar todos los campos")
    }else{
        document.getElementById("totalBono14").innerHTML="Bono 14: Q."+bono14;
        document.getElementById("totalAguinaldo").innerHTML="Aguinaldo: Q."+aguinaldo;
        document.getElementById("totalIndemnizacion").innerHTML="Idemnización: Q."+indemnizacion;
    }
}
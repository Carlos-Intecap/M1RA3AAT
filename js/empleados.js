function generarTabla(c1,c2,c3,c4){
    // Seleccionar el tbody donde quieres agregar la nueva fila
    const tbody = document.getElementById("datos_empleados");

    // Crear una nueva fila <tr>
    const nuevaFila = document.createElement('tr');

    // Crear nuevas celdas <td> y agregarles contenido
    const celda1 = document.createElement('td');
    celda1.textContent = c1;
    nuevaFila.appendChild(celda1);

    const celda2 = document.createElement('td');
    celda2.textContent = c2;
    nuevaFila.appendChild(celda2);

    const celda3 = document.createElement('td');
    celda3.textContent = c3;
    nuevaFila.appendChild(celda3);

    const celda4 = document.createElement('td');
    celda4.textContent = c4;
    nuevaFila.appendChild(celda4);

    // Agregar la nueva fila al tbody
    tbody.appendChild(nuevaFila);
}
function guardar(){
    let nombre = document.getElementById("txt_nombre").value;
    let fecha = document.getElementById("txt_fecha").value;
    let puesto = document.getElementById("txt_puesto").value;
    let salario = document.getElementById("txt_salario").value;
    if(nombre == "" || fecha == "" || puesto == "" || salario == ""){
        alert("Debes llenar todos los campos");
    }else{
        generarTabla(nombre,fecha,puesto,salario);
    }
}
function eliminarPrimero(){
    // Seleccionar el elemento padre
    const padre = document.querySelector('#datos_empleados');

    // Eliminar el primer hijo del elemento padre
    if (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}
function eliminarUltimo(){
    // Seleccionar el elemento padre
    const padre = document.querySelector('#datos_empleados');

    // Eliminar el último hijo del elemento padre
    if (padre.lastChild) {
        padre.removeChild(padre.lastChild);
    }
}
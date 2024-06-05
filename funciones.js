liscli = []

liscli.push(new Cliente("21.230.764-3","Natalia","Gonzalez",976581294,"ngonzalez@gmail.com", "REQUINOA", "FEMENINO", "PANTALON","15.0000","2","CREDITO","Cada 5"));
liscli.push(new Cliente("11.111.111-1","Balto","Mayorga", 923721940,"bmayorga@gmail.com","RANCAGUA","MASCULINO","POLERON","20.000","4","DEBITO","Cada 10"));


const listarClientes = () => {
    let filas = "";
    for(let i=0; i<liscli.length; i++){
        let cli = liscli[i];
        filas += "<tr>";
        filas += "<td>"+cli.rut+"</td>";
        filas += "<td>"+cli.nombre+"</td>";
        filas += "<td>"+cli.apellido+"</td>";
        filas += "<td>"+cli.telefono+"</td>";
        filas += "<td>"+cli.email+"</td>";
        filas += "<td>"+cli.ciudad+"</td>";
        filas += "<td>"+cli.sexo+"</td>";
        filas += "<td>"+cli.prenda+"</td>";
        filas += "<td>"+cli.precio+"</td>";
        filas += "<td>"+cli.cuotas+"</td>";
        filas += "<td>"+cli.pago+"</td>";
        filas += "<td>"+cli.diapago+"</td>";
        filas += "</tr>";
    }
    document.getElementById("tablaDeDatos").innerHTML = filas;
}

const registrarCliente = () =>{

    let r = document.getElementById("txtrut").value;
    let n = document.getElementById("txtnom").value;
    let a = document.getElementById("txtape").value;
    let t = document.getElementById("txttel").value;
    let e = document.getElementById("txtema").value;
    let c = document.getElementById("cbociu").value;

    let s = "";
    if(document.getElementById("opsexm").checked === true){
        s = "MASCULINO";
    }if(document.getElementById("opsexf").checked === true){
        s = "FEMENINO";
    }if(document.getElementById("opsexx").checked === true){
        s = "X";
    }
    
    let p = document.getElementById("txtpr").value;
    let pr = document.getElementById("txtpre").value;
    let cu = document.getElementById("cuo").value;

    let pg = "";
    if(document.getElementById("opcre").checked === true){
        pg = "CREDITO";
    }if(document.getElementById("opdeb").checked === true){
        pg = "DEBITO";
    }

    let dp = document.getElementById("dia").value;

    let errores = "";
    if(r.trim().length === 0){
        errores += "El Campo No Debe Quedar En Blanco.\n";
    }else{
        for(let i=0; i<liscli.length; i++){
            let cli = liscli[i];
            if(Number(r) === cli.rut){
                errores += "El Rut ("+r+") Ya Existe.\n";
            }
        }
    }

    if (n.trim().length === 0){
        errores += "El Nombre No Debe Quedar En Blanco.\n";
    }

    if (a.trim().length === 0){
        errores += "El Apellido No Debe Quedar En Blanco.\n";
    }

    if (t.trim().length === 0){
        errores += "El Telefono No Debe Quedar En Blanco.\n";
    }

    if (e.trim().length === 0){
        errores += "El Email No Debe Quedar En Blanco.\n";
    }

    if (c.trim().length === 0){
        errores += "La Ciudad No Debe Quedar En Blanco.\n";
    }

    if (s.trim().length === 0){
        errores += "El Sexo No Debe Quedar En Blanco.\n";
    }

    if (p.trim().length === 0){
        errores += "La Prenda No Debe Quedar En Blanco.\n";
    }

    if (pr.trim().length === 0){
        errores += "El Precio No Debe Quedar En Blanco.\n";
    }

    if (cu.trim().length === 0){
        errores += "Las cuotas No Debe Quedar En Blanco.\n";
    }

    if (pg.trim().length === 0){
        errores += "El Pago No Debe Quedar En Blanco.\n";
    }

    if (dp.trim().length === 0){
        errores += "El Dia de Pago No Debe Quedar En Blanco.\n";
    }
    
    
    if (errores === ""){
        let cli = new Cliente(r,n,a,Number(t),e,c,s,p,pr,cu,pg,dp);
        liscli.push(cli); 
        listarClientes();

        let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
        msg += '<strong>Felicitaciones!</strong> Cliente ('+r+') Registrado Correctamente!';
        msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        msg += '</div>';
        document.getElementById("mensajes").innerHTML = msg;

        document.getElementById("txtrut").value="";
        document.getElementById("txtnom").value="";
        document.getElementById("txtape").value="";
        document.getElementById("txttel").value="";
        document.getElementById("txtema").value="";
        document.getElementById("cbociu").value="";
        document.getElementById("opsexm").checked = true;
        document.getElementById("txtpr").value = "";
        document.getElementById("txtpre").value = "";
        document.getElementById("cuo").value = "";
        document.getElementById("opcre").checked = true;
        document.getElementById("dia").value = "";

    }else{
        alert(errores);
    }
}

const consultarCliente =() =>{
    let r = document.getElementById("txtrut").value;

    if(r.trim().length === 0){
        alert("Debe Ingresar El Rut Del Cliente A Buscar!!");
    }else{
        let sw = 0;
        for(let i=0; i<liscli.length; i++){
            let cli = liscli[i];
            if(r === cli.rut){
                sw = 1;
                document.getElementById("txtnom").value = cli.nombre;
                document.getElementById("txtape").value = cli.apellido;
                document.getElementById("txttel").value = cli.telefono;
                document.getElementById("txtema").value = cli.email;
                document.getElementById("cbociu").value = cli.ciudad;
                
                if(cli.sexo === "M"){
                    document.getElementById("opsexm").checked = true;
                }if(cli.sexo === "F"){
                    document.getElementById("opsexf").checked = true;
                }else if(cli.sexo === "X"){
                    document.getElementById("opsexx").checked = true;
                }

                document.getElementById("txtpr").value = cli.prenda;
                document.getElementById("txtpre").value = cli.precio;
                document.getElementById("cuo").value = cli.cuotas;

                if(cli.pago === "CREDITO"){
                    document.getElementById("opcre").checked === true;
                }else if(cli.pago === "DEBITO"){
                    document.getElementById("opdeb").checked === true;
                }

                document.getElementById("dia").value = cli.diapago;

            }
        }

        if(sw === 0){
            let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') No Encontrado!</strong> Puede Registrar!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }else if(sw === 1){
            let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') Encontrado!</strong> Puede Modificar o Eliminar!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }
    }
}

const eliminarCliente = () =>{
    let r = document.getElementById("txtrut").value;

    if(r.trim().length === 0){
        alert("Debe Ingresar El Rut Del Cliente Que Desea Eliminar!!");
    }else{
        let sw = 0;
        for(let i=0; i<liscli.length; i++){
            let cli = liscli[i];
            if(r === cli.rut){
                let x = confirm("¿Confirma La Eliminacion Del Registro?");
                if (x = true){
                    sw = 1;
                    liscli.splice(i,1);
                    listarClientes();
                    break;
                }else{
                    sw = 2;
                    break;
                }
            }
        }

        if (sw = 0){
            if(sw === 0){
                let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
                msg += '<strong>Rut ('+r+') No Encontrado!</strong> Imposible Eliminar!';
                msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                msg += '</div>';
                document.getElementById("mensajes").innerHTML = msg;
            }else if(sw === 1){
                let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
                msg += '<strong>Rut ('+r+') Eliminado Correctamente!</strong>!';
                msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                msg += '</div>';
                document.getElementById("mensajes").innerHTML = msg;
    
                document.getElementById("txtrut").value="";
                document.getElementById("txtnom").value="";
                document.getElementById("txtape").value="";
                document.getElementById("txttel").value="";
                document.getElementById("txtema").value="";
                document.getElementById("cbociu").value="";
                document.getElementById("opsexm").checked = true;
                document.getElementById("txtpr").value = "";
                document.getElementById("txtpre").value = "";
                document.getElementById("cuo").value = "";
                document.getElementById("opcre").checked = true;
                document.getElementById("dia").value = "";
                
            }
        }
    }
}


const modificarCliente = () =>{

    let r = document.getElementById("txtrut").value;
    let n = document.getElementById("txtnom").value;
    let a = document.getElementById("txtape").value;
    let t = document.getElementById("txttel").value;
    let e = document.getElementById("txtema").value;
    let c = document.getElementById("cbociu").value;

    let s = "";
    if(document.getElementById("opsexm").checked === true){
        s = "MASCULINO";
    }if(document.getElementById("opsexf").checked === true){
        s = "FEMENINO";
    }if(document.getElementById("opsexx").checked === true){
        s = "X";
    }
    
    let p = document.getElementById("txtpr").value;
    let pr = document.getElementById("txtpre").value;
    let cu = document.getElementById("cuo").value;

    let pg = "";
    if(document.getElementById("opcre").checked === true){
        pg = "CREDITO";
    }if(document.getElementById("opdeb").checked === true){
        pg = "DEBITO";
    }

    let dp = document.getElementById("dia").value;

    let errores = "";

    if(r.trim().length === 0){
        errores += "El Campo No Debe Quedar En Blanco.\n";
    }

    if (n.trim().length === 0){
        errores += "El Nombre No Debe Quedar En Blanco.\n";
    }

    if (a.trim().length === 0){
        errores += "El Apellido No Debe Quedar En Blanco.\n";
    }

    if (t.trim().length === 0){
        errores += "El Telefono No Debe Quedar En Blanco.\n";
    }

    if (e.trim().length === 0){
        errores += "El Email No Debe Quedar En Blanco.\n";
    }

    if (c.trim().length === 0){
        errores += "La Ciudad No Debe Quedar En Blanco.\n";
    }

    if (s.trim().length === 0){
        errores += "El Sexo No Debe Quedar En Blanco.\n";
    }

    if (p.trim().length === 0){
        errores += "La Prenda No Debe Quedar En Blanco.\n";
    }

    if (pr.trim().length === 0){
        errores += "El Precio No Debe Quedar En Blanco.\n";
    }

    if (cu.trim().length === 0){
        errores += "Las Cuotas No Deben Quedar En Blanco.\n";
    }

    if (dp.trim().length === 0){
        errores += "EL dia de pago No Debe Quedar En Blanco.\n";
    }

    
    
    if (errores === ""){

        sw = 0;
        
        for(let i = 0; i<liscli.length; i++){
            let cli = liscli [i];
            if(r === cli.rut){
                let x = confirm("¿Confirma La Modificacion De Datos?");
                if (x === true){
                    sw = 1;
                    liscli[i].nombre = n;
                    liscli[i].apellido = a;
                    liscli[i].telefono = Number(t);
                    liscli[i].email = e;
                    liscli[i].comuna = c;
                    liscli[i].sexo = s;
                    liscli[i].prenda = p;
                    liscli[i].precio = pr;
                    liscli[i].cuotas = cu;
                    liscli[i].pago = pg;
                    liscli[i].diapago = dp;
                    listarClientes();
                    break;
                }else{
                    sw=2;
                    break;
                }
            }
        }
        if(sw === 0){
            let msg = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
            msg += '<strong>Rut ('+r+') No Encontrado!</strong> Imposible Modificar Datos!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;
        }else if(sw === 1){
            let msg = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg += '<strong>Datos Del Cliente ('+r+') Modificados Correctamente!</strong>!';
            msg += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg += '</div>';
            document.getElementById("mensajes").innerHTML = msg;

            document.getElementById("txtrut").value="";
            document.getElementById("txtnom").value="";
            document.getElementById("txtape").value="";
            document.getElementById("txttel").value="";
            document.getElementById("txtema").value="";
            document.getElementById("cbociu").value="";
            document.getElementById("opsexm").checked = true;
            document.getElementById("txtpr").value = "";
            document.getElementById("txtpre").value = "";
            document.getElementById("cuo").value = "";
            document.getElementById("opcre").checked = true;
            document.getElementById("dia").value = "";
        }



    }else{
        alert(errores);
    }
}
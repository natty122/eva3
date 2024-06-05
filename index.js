<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evaluacion JS</title>
    <link href="css/estilos.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <script src="js/cliente.js"></script>
    <script src="js/funciones.js"></script>
</head>

<body onload="listarClientes()">

    <header><h1>Listado de Clientes</h1></header>

    <div class="miContenedor">
    
        <div id="mensajes"></div>
        <div class="p-2">
            
            <div class="row align-items-end">
                <div class="col-md-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="txtrut" placeholder="" maxlength="12">
                        <label for="txtrut">Rut</label>
                    </div>
                </div>

                <div class="col-md-1">
                    <button class="btn btn-primary btn-lg misBotones" onclick="consultarCliente()">
                        ... 
                    </button>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="txtnom" placeholder="">
                        <label for="txtnom">Nombre</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="txtape" placeholder="">
                        <label for="txtape">Apellido</label>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="number" class="form-control" id="txttel" placeholder=""/>
                        <label for="txttel">Telefono</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="txtema" placeholder=""/>
                        <label for="txtema">Email</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <select class="form-select" id="cbociu">
                            <option value="">SELECCIONE CIUDAD</option>
                            <option value="SAN FERNANDO">SAN FERNANDO</option>
                            <option value="RANCAGUA">RANCAGUA</option>
                            <option value="SANTIAGO">SANTIAGO</option>
                            <option value="TALCA">TALCA</option>
                            <option value="CURICO">CURICO</option>
                            <option value="REQUINOA">REQUINOA</option>
                        </select>
                        <label for="cbocom">CIUDAD</label>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-4">
                    <label class="form-check-label" for="opsexm"><strong>Sexo</strong></label>
                    <div class="row">
                        <div class="col-4">
                            <input class="form-check-input" type="radio" name="opsex" id="opsexm" checked>
                            <label class="form-check-label" for="opsexm" value="M"><i>M</i></label>
                        </div>
                        <div class="col-4">
                            <input class="form-check-input" type="radio" name="opsex" id="opsexf">
                            <label class="form-check-label" for="opsexf" value="F"><i>F</i></label>
                        </div>
                        <div class="col-4">
                            <input class="form-check-input" type="radio" name="opsex" id="opsexx">
                            <label class="form-check-label" for="opsexx" value="X"><i>X</i></label>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="txtpr" placeholder=""/>
                        <label for="txtsede">Prenda</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="txtpre" placeholder=""/>
                        <label for="txtcar">Precio</label>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-4">
                    <div class="form-floating">
                        <select class="form-select" id="cuo">
                            <option value="">Cuotas</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                        </select>
                        <label for="smes">Cuotas</label>
                    </div>
                </div>

                <div class="col-md-4">
                    <label class="form-check-label" for="oppag"><strong>Pago</strong></label>
                    <div class="row">
                        <div class="col-6">
                            <input class="form-check-input" type="radio" name="oppag" id="opcre" checked>
                            <label class="form-check-label" for="opcre" value="CREDITO"><i>CREDITO</i></label>
                        </div>
                        <div class="col-6">
                            <input class="form-check-input" type="radio" name="oppag" id="opdeb">
                            <label class="form-check-label" for="opdeb" value="DEBITO"><i>DEBITO</i></label>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-floating">
                        <select class="form-select" id="dia">
                            <option value="">DiaPago</option>
                            <option value="Cada 5">Cada 5</option>
                            <option value="Cada 10">Cada 10</option>
                            <option value="Cada 15">Cada 15</option>
                            <option value="Cada 20">Cada 20</option>
                        </select>
                        <label for="jorn">DiaPago</label>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-4">
                    <button id="btnreg" type="button" class="btn btn-success btn-lg mb-2 misBotones" onclick="registrarCliente()">
                        Registrar <i class="bi bi-file-plus"></i>
                    </button>
                </div>

                <div class="col-md-4">
                    <button id="btnmod" type="button" class="btn btn-warning btn-lg mb-2 misBotones" onclick="modificarCliente()">
                        Modificar <i class="bi bi-pencil"></i>
                    </button>
                </div>

                <div class="col-md-4">
                    <button id="btneli" type="button" class="btn btn-danger btn-lg misBotones" onclick="eliminarCliente()">
                        Eliminar <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </div>
                    
        </div>
    
    </div> 

    <div class="miContenedor" id="miContenedor2">      

        <div class="mt-3">
            
            <div class="row">
                <div class="col-12">
                    <h2>Listado de Clientes</h2>
                    <table class="table table-hover">
                        <thead>
                            <tr align="center">
                                <th>Rut</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Email</th>
                                <th>Ciudad</th>
                                <th>Sexo</th>
                                <th>Prenda</th>
                                <th>Precio</th>
                                <th>Cuotas</th>
                                <th>Pago</th>
                                <th>DiaPago</th>
                            </tr>
                        </thead>
                        <tbody id="tablaDeDatos">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    
    </div> 

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
    <footer>

        <strong text-center>Desarrollado por: </strong>  Natalia Andrea Gonzalez Mayorga
    
    </footer>

</body>

</html>
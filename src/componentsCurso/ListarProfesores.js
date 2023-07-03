import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ListarProfesores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosProfesores: [],
            modalOpen: false,
            modalMensajesActulizado: false,
            modalMensajesEliminado: false,
            id: "",
            cedula: "",
            correoelectronico: "",
            telefono: "",
            telefonocelular: "",
            fechanacimiento: "",
            sexo: "",
            direccion: "",
            nombre: "",
            apellidopaterno: "",
            apellidomaterno: "",
            nacionalidad: "",
            idCarreras: "",
            usuario: ""
        }
    }
        
    cargarDatos(){        
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php")//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {
            this.setState({datosCargados:true,  datosProfesores:datosrepuesta.data})
            console.log(datosrepuesta.data);
        })
        .catch(console.log)//muestra errores
    }

    eliminar(id){
        var datosenviar = {
            id: id
        }
        this.openModalMensajesEliminar();
        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php",
        {
            method:"POST",
            body:JSON.stringify(datosenviar)
        })//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {

        })
        .catch(console.log)//muestra errores
        console.log(id);
    }

    editar(objeto){
        console.log(objeto);
        this.setState({id: objeto.id,
            cedula: objeto.cedula,
            correoelectronico: objeto.correoelectronico,
            telefono: objeto.telefono,
            telefonocelular: objeto.telefonocelular,
            fechanacimiento: objeto.fechanacimiento,
            sexo: objeto.sexo,
            direccion: objeto.direccion,
            nombre: objeto.nombre,
            apellidopaterno: objeto.apellidopaterno,
            apellidomaterno: objeto.apellidomaterno,
            nacionalidad: objeto.nacionalidad,
            idCarreras: objeto.idCarreras,
            usuario: objeto.usuario });
        this.openModal();
    }

    cambioValor = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState ({state});
    }

    enviarDatos = (e) =>{
        e.preventDefault();

        const { id,
            cedula,
            correoelectronico,
            telefono,
            telefonocelular,
            fechanacimiento,
            sexo,
            direccion,
            nombre,
            apellidopaterno,
            apellidomaterno,
            nacionalidad,
            idCarreras,
            usuario } = this.state;

        var datosenviar = {
            id: id,
            cedula: cedula,
            correoelectronico: correoelectronico,
            telefono: telefono,
            telefonocelular: telefonocelular,
            fechanacimiento: fechanacimiento,
            sexo: sexo,
            direccion: direccion,
            nombre: nombre,
            apellidopaterno: apellidopaterno,
            apellidomaterno: apellidomaterno,
            nacionalidad: nacionalidad,
            idCarreras: idCarreras,
            usuario: usuario
        }

        console.log(datosenviar);
        this.openModalMensajesActualizar();
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php",
        {
            method:"POST",
            body:JSON.stringify(datosenviar)
        })//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {    
             
        })
        .catch(console.log)//muestra errores
    }

    openModal(){
        this.setState({modalOpen:true});
    }

    closeModal(){
        this.setState({modalOpen:false});
    }

    openModalMensajesActualizar(){
        this.setState({modalMensajesActulizado:true});
    }

    closeModalMensajesActualizar(){
        window.location.reload();
        this.setState({modalMensajesActulizado:false});
    }

    openModalMensajesEliminar(){
        this.setState({modalMensajesEliminado:true});
    }

    closeModalMensajesEliminar(){
        window.location.reload();
        this.setState({modalMensajesEliminado:false});
    }

    componentDidMount(){
        this.cargarDatos();
    }
    
    render() { 
        const { datosCargados, datosProfesores, modalOpen, modalMensajesActulizado, modalMensajesEliminado,
            id, 
            cedula, 
            correoelectronico,
            telefono,
            telefonocelular,
            fechanacimiento,
            sexo,
            direccion,
            nombre,
            apellidopaterno,
            apellidomaterno,
            nacionalidad,
            idCarreras,
            usuario } = this.state
        return (            
            <div>                                
                <h1>Listar Profesores</h1>
                <div className="table-responsive rounded rounded-3">
                    <table className="table table-striped
                        table-hover	
                        table-borderless
                        table-primary
                        align-middle tabla">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Cedula</th>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Teléfono celular</th>
                                <th scope="col">Fecha nacimiento</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido paterno</th>
                                <th scope="col">Apellido materno</th>
                                <th scope="col">Nacionalidad</th>
                                <th scope="col">Id Grupo</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datosProfesores.map(
                                    (datosExtraidos)=>(
                                        <tr key={datosExtraidos.id} className="table-primary" >
                                            <td id='font' scope="row">{datosExtraidos.id}</td>
                                            <td id='font'>{datosExtraidos.cedula}</td>
                                            <td id='font'>{datosExtraidos.correoelectronico}</td>
                                            <td id='font'>{datosExtraidos.telefono}</td>
                                            <td id='font'>{datosExtraidos.telefonocelular}</td>
                                            <td id='font'>{datosExtraidos.fechanacimiento}</td>
                                            <td id='font'>{datosExtraidos.sexo}</td>
                                            <td id='font'>{datosExtraidos.direccion}</td>
                                            <td id='font'>{datosExtraidos.nombre}</td>
                                            <td id='font'>{datosExtraidos.apellidopaterno}</td>
                                            <td id='font'>{datosExtraidos.apellidomaterno}</td>
                                            <td id='font'>{datosExtraidos.nacionalidad}</td>
                                            <td id='font'>{datosExtraidos.idCarreras}</td>
                                            <td id='font'>{datosExtraidos.usuario}</td>
                                        
                                            <td>
                                                <a name="" id="" className="btn btn-del" onClick={()=> this.eliminar(datosExtraidos.id)} role="button">Borrar</a>
                                                ||
                                                <a name="" id="" className="btn btn-edit" onClick={()=> this.editar(datosExtraidos)} role="button">Editar</a>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <Modal show={modalOpen} >
                        <Modal.Header >
                        <Modal.Title>Modal Editar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <form id="formulario" onSubmit={this.enviarDatos}>
                            <div className="mb-3">
                                <input type="hidden" id="id" name="id" onChange={this.cambioValor} value={id}></input>
                                <label htmlFor="cedula" className="form-label">Cedula</label>
                                <input type="text" className="form-control" name="cedula" id="cedula" aria-describedby="helpId" placeholder="Cedula del profesor" required onChange={this.cambioValor} value={cedula}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa la cedula del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correoelectronico" className="form-label">Correoelectronico</label>
                                <input type="text"
                                    className="form-control" name="correoelectronico" id="correoelectronico" aria-describedby="helpId" placeholder="Correoelectronico del profesor" required onChange={this.cambioValor} value={correoelectronico}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el correoelectronico del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input type="text"
                                    className="form-control" name="telefono" id="telefono" aria-describedby="helpId" placeholder="Telefono del profesor" required onChange={this.cambioValor} value={telefono}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el telefono del profesor</small>
                            </div> 
                            <div className="mb-3">
                                <label htmlFor="telefonocelular" className="form-label">Telefonocelular</label>
                                <input type="text"
                                    className="form-control" name="telefonocelular" id="telefonocelular" aria-describedby="helpId" placeholder="Telefono celular" required onChange={this.cambioValor} value={telefonocelular}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el telefono celular del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechanacimiento" className="form-label">Fechanacimiento</label>
                                <input type="date"
                                    className="form-control" name="fechanacimiento" id="fechanacimiento" aria-describedby="helpId" placeholder="Fecha de nacimiento del profesor" required onChange={this.cambioValor} value={fechanacimiento}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa la fecha de nacimiento del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sexo" className="form-label">Sexo</label>
                                <select className="form-select" name="sexo" id="sexo" aria-describedby="helpId" placeholder="Sexo del profesor" required onChange={this.cambioValor} value={sexo}>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input type="text"
                                    className="form-control" name="direccion" id="direccion" aria-describedby="helpId" placeholder="Direccion del profesor" required onChange={this.cambioValor} value={direccion}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa la direccion del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">nombre</label>
                                <input type="text"
                                    className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre del profesor" required onChange={this.cambioValor} value={nombre}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el nombre del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="apellidopaterno" className="form-label">Apellidopaterno</label>
                                <input type="text"
                                    className="form-control" name="apellidopaterno" id="apellidopaterno" aria-describedby="helpId" placeholder="Apellido paterno del profesor" required onChange={this.cambioValor} value={apellidopaterno}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el apellido paterno del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="apellidomaterno" className="form-label">Apellidomaterno</label>
                                <input type="text"
                                    className="form-control" name="apellidomaterno" id="apellidomaterno" aria-describedby="helpId" placeholder="Apellido materno del profesor" required onChange={this.cambioValor} value={apellidomaterno}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el apellido materno del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nacionalidad" className="form-label">Nacionalidad</label>
                                <input type="text"
                                    className="form-control" name="nacionalidad" id="nacionalidad" aria-describedby="helpId" placeholder="Nacionalidad del profesor" required onChange={this.cambioValor} value={nacionalidad}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa la nacionalidad del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="idCarreras" className="form-label">Grupos</label>
                                <input type="text"
                                    className="form-control" name="idCarreras" id="idCarreras" aria-describedby="helpId" placeholder="idCarreras del profesor" required onChange={this.cambioValor} value={idCarreras}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el grupo del profesor</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="usuario" className="form-label">Usuario</label>
                                <input type="text"
                                    className="form-control" name="usuario" id="usuario" aria-describedby="helpId" placeholder="Usuario" required onChange={this.cambioValor} value={usuario}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el usuario</small>
                            </div>                                           
                            <div className="mb-3">
                                <button type="button" className="btn btn-secondary" onClick={() => this.closeModal()}>Close</button>
                                ||
                                <button type="reset" className="btn btn-del">Reset</button>
                                ||
                                <button type="submit" className="btn btn-edit">Actualizar</button>
                            </div>                         
                        </form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                </Modal>

                <Modal show={modalMensajesActulizado} >
                    <Modal.Header >
                    <Modal.Title>Mensaje</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form id="formulario">
                        <div className="mb-3">
                            <p>Actualizado correctamente</p>
                        </div>
                                                                     
                        <div className="mb-3">
                            <button type="button" className="btn btn-secondary" onClick={() => this.closeModalMensajesActualizar()}>Close</button>
                        </div>                         
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

                <Modal show={modalMensajesEliminado} >
                    <Modal.Header >
                    <Modal.Title>Mensaje</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form id="formulario">
                        <div className="mb-3">
                            <p>Eliminado correctamente</p>
                        </div>
                                                                     
                        <div className="mb-3">
                            <button type="button" className="btn btn-secondary" onClick={() => this.closeModalMensajesEliminar()}>Close</button>
                        </div>                         
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
         );
    }
}
 
export default ListarProfesores;
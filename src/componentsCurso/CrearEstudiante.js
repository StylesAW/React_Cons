import React from 'react';
import ListarEstudiantes from './ListarEstudiantes';
import ListarGrupo from './ListarGrupo';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CrearEstudiante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosEstudiantes: [],
            datosGrupo: [],
            modalOpen: false,
            modalMensajesCreado:false,
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
            usuario: "",
            cargarGrupos: []
        }
        this.cargarGrupo();
    }

    cambioValor = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({state});
    }

    guardarDatos = (e) => {
        e.preventDefault();
        
        const {  id,
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
        this.openModalMensajesCrear();
        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php",
        {
            method:"POST",
            body:JSON.stringify(datosenviar)
        })//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {            
            
        })
        .catch(console.log)//muestra errores
    }

    cargarGrupo = () => {
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                this.setState({cargarGrupos: datosrepuesta.data})
            })

        .catch(console.log)//muestra errores
    }

    openModalMensajesCrear(){
        window.location = "ListarEstudiantes"
        this.setState({modalMensajesCreado:true});
    }

    closeModalMensajesCrear(){
        window.location.reload();
        this.setState({modalMensajesCreado:false});
    }

    render() { 
        const {  id,
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
            usuario, modalMensajesCreado } = this.state;
        return ( 
            <div>
                <h1>Crear Estudiante</h1>
                <div className='container bg-create pt-3 rounded rounded-4 w-50'>
                <form id="formulario" onSubmit={this.guardarDatos}>
                    <div className="mb-3 mx-4">
                                <input type="hidden" id="id" name="id" onChange={this.cambioValor} value={id}></input>
                                <label htmlFor="cedula" className="form-label text-config text-white">Cedula</label>
                                <input type="text" className="form-control" name="cedula" id="cedula" aria-describedby="helpId" placeholder="Cedula del estudiante" required onChange={this.cambioValor} value={cedula}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="correoelectronico" className="form-label text-config text-white">Correoelectronico</label>
                                <input type="text"
                                    className="form-control" name="correoelectronico" id="correoelectronico" aria-describedby="helpId" placeholder="Correoelectronico del profesor" required onChange={this.cambioValor} value={correoelectronico}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="telefono" className="form-label text-config text-white">Telefono</label>
                                <input type="text"
                                    className="form-control" name="telefono" id="telefono" aria-describedby="helpId" placeholder="Telefono del estudiante" required onChange={this.cambioValor} value={telefono}></input>
                                
                            </div> 
                            <div className="mb-3 mx-4">
                                <label htmlFor="telefonocelular" className="form-label text-config text-white">Telefonocelular</label>
                                <input type="text"
                                    className="form-control" name="telefonocelular" id="telefonocelular" aria-describedby="helpId" placeholder="Telefono celular" required onChange={this.cambioValor} value={telefonocelular}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="fechanacimiento" className="form-label text-config text-white">Fechanacimiento</label>
                                <input type="date"
                                    className="form-control" name="fechanacimiento" id="fechanacimiento" aria-describedby="helpId" placeholder="Fecha de nacimiento del estudiante" required onChange={this.cambioValor} value={fechanacimiento}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="sexo" className="form-label text-config text-white">Sexo</label>
                                <select className="form-select" name="sexo" id="sexo" aria-describedby="helpId" placeholder="Sexo del estudiante" required onChange={this.cambioValor} value={sexo}>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="direccion" className="form-label text-config text-white">Direccion</label>
                                <input type="text"
                                    className="form-control" name="direccion" id="direccion" aria-describedby="helpId" placeholder="Direccion del estudiante" required onChange={this.cambioValor} value={direccion}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="nombre" className="form-label text-config text-white">nombre</label>
                                <input type="text"
                                    className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre del estudiante" required onChange={this.cambioValor} value={nombre}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="apellidopaterno" className="form-label text-config text-white">Apellidopaterno</label>
                                <input type="text"
                                    className="form-control" name="apellidopaterno" id="apellidopaterno" aria-describedby="helpId" placeholder="Apellido paterno del estudiante" required onChange={this.cambioValor} value={apellidopaterno}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="apellidomaterno" className="form-label text-config text-white">Apellidomaterno</label>
                                <input type="text"
                                    className="form-control" name="apellidomaterno" id="apellidomaterno" aria-describedby="helpId" placeholder="Apellido materno del estudiante" required onChange={this.cambioValor} value={apellidomaterno}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="nacionalidad" className="form-label text-config text-white">Nacionalidad</label>
                                <input type="text"
                                    className="form-control" name="nacionalidad" id="nacionalidad" aria-describedby="helpId" placeholder="Nacionalidad del estudiante" required onChange={this.cambioValor} value={nacionalidad}></input>
                                
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="idCarreras" className="form-label text-config text-white">Grupos</label>
                                <select className="form-control" name="idCarreras" id="idCarreras" aria-describedby="helpId" placeholder="idCarreras del estudiante" required onChange={this.cambioValor} value={idCarreras}>
                                    {this.state.cargarGrupos.map(valor=>(
                                        <option value={valor.id}>{valor.nombre}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="usuario" className="form-label">Usuario</label>
                                <input type="text"
                                    className="form-control" name="usuario" id="usuario" aria-describedby="helpId" placeholder="Usuario" required onChange={this.cambioValor} value={usuario}></input>
                                
                            </div>                                           
                            <div className="mb-3 pb-3">
                                <button type="button" className="btn btn-secondary" onClick={() => this.closeModal()}>Close</button>
                                ||
                                <button type="reset" className="btn btn-del mx-2">Reset</button>
                                ||
                                <button type="submit" className="btn btn-edit mx-2">Crear</button>
                            </div>                     
                </form>
                
                <Modal show={modalMensajesCreado} >
                    <Modal.Header >
                        <Modal.Title>Mensaje</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formulario">
                            <div className="mb-3">
                                <p>Creado correctamente</p>
                            </div>

                            <div className="mb-3">
                                <button type="button" className="btn btn-secondary" onClick={() => this.closeModalMensajesCrear()}>Close</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>

         );
    }
}
 
export default CrearEstudiante;
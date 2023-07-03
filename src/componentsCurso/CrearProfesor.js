import React from 'react';
import ListarProfesores from './ListarProfesores';
import Modal from 'react-bootstrap/Modal';

class CrearProfesor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosProfesores: [],
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
        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarProfesores.php",
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
        window.location = "ListaProfesores"
        this.setState({modalMensajesCreado:true});
    }

    closeModalMensajesCrear(){
        window.location.reload();
        this.setState({modalMensajesCreado:false});
    }

    render() { 
        const {  modalMensajesCreado, id,
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
            usuario,
            cargarGrupos
         } = this.state;
        return ( 
            <div>
                <h1>Crear Profesor</h1>
                <div className='container bg-create pt-3 rounded rounded-4 w-50'>
                <form id="formulario" onSubmit={this.guardarDatos}>
                <div className="mb-3 mx-4">
                                <input type="hidden" id="id" name="id" required onChange={this.cambioValor} value={id}></input>
                                <label htmlFor="cedula" className="form-label text-config text-white">Cedula</label>
                                <input type="text" className="form-control" name="cedula" id="cedula" aria-describedby="helpId" placeholder="Cedula del profesor" required onChange={this.cambioValor} value={cedula}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa la cedula del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="correoelectronico" className="form-label text-config text-white">Correoelectronico</label>
                                <input type="text"
                                    className="form-control" name="correoelectronico" id="correoelectronico" aria-describedby="helpId" placeholder="Correoelectronico del profesor" required onChange={this.cambioValor} value={correoelectronico}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa el correoelectronico del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="telefono" className="form-label text-config text-white">Telefono</label>
                                <input type="text"
                                    className="form-control" name="telefono" id="telefono" aria-describedby="helpId" placeholder="Telefono del profesor" required onChange={this.cambioValor} value={telefono}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa el telefono del profesor</small>
                            </div> 
                            <div className="mb-3 mx-4">
                                <label htmlFor="telefonocelular" className="form-label text-config text-white">Telefonocelular</label>
                                <input type="text"
                                    className="form-control" name="telefonocelular" id="telefonocelular" aria-describedby="helpId" placeholder="Telefono celular" required onChange={this.cambioValor} value={telefonocelular}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa el telefono celular del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="fechanacimiento" className="form-label text-config text-white">Fechanacimiento</label>
                                <input type="date"
                                    className="form-control" name="fechanacimiento" id="fechanacimiento" aria-describedby="helpId" placeholder="Fecha de nacimiento del profesor" required onChange={this.cambioValor} value={fechanacimiento}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa la fecha de nacimiento del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="sexo" className="form-label text-config text-white">Sexo</label>
                                <select className="form-select" name="sexo" id="sexo" aria-describedby="helpId" placeholder="Sexo del profesor" required onChange={this.cambioValor} value={sexo}>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="direccion" className="form-label text-config text-white">Direccion</label>
                                <input type="text"
                                    className="form-control" name="direccion" id="direccion" aria-describedby="helpId" placeholder="Direccion del profesor" required onChange={this.cambioValor} value={direccion}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa la direccion del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="nombre" className="form-label text-config text-white">nombre</label>
                                <input type="text"
                                    className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre del profesor" required onChange={this.cambioValor} value={nombre}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa el nombre del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="apellidopaterno" className="form-label text-config text-white">Apellidopaterno</label>
                                <input type="text"
                                    className="form-control" name="apellidopaterno" id="apellidopaterno" aria-describedby="helpId" placeholder="Apellido paterno del profesor" required onChange={this.cambioValor} value={apellidopaterno}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa el apellido paterno del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="apellidomaterno" className="form-label text-config text-white">Apellidomaterno</label>
                                <input type="text"
                                    className="form-control" name="apellidomaterno" id="apellidomaterno" aria-describedby="helpId" placeholder="Apellido materno del profesor" required onChange={this.cambioValor} value={apellidomaterno}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa el apellido materno del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="nacionalidad" className="form-label text-config text-white">Nacionalidad</label>
                                <input type="text"
                                    className="form-control" name="nacionalidad" id="nacionalidad" aria-describedby="helpId" placeholder="Nacionalidad del profesor" required onChange={this.cambioValor} value={nacionalidad}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa la nacionalidad del profesor</small>
                            </div>
                            <div className="mb-3 mx-4">
                            <label htmlFor="idCarreras" className="form-label text-config text-white">Grupos</label>
                                <select className="form-select" name="idCarreras" id="idCarreras" aria-describedby="helpId" placeholder="idCarreras del profesor" required onChange={this.cambioValor} value={idCarreras}>
                                    {this.state.cargarGrupos.map(valor=>(
                                        <option value={valor.id} placeholder="idCarreras del profesor">{valor.nombre}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3 mx-4">
                                <label htmlFor="usuario" className="form-label text-config text-white">Usuario</label>
                                <input type="text"
                                    className="form-control" name="usuario" id="usuario" aria-describedby="helpId" placeholder="Usuario" required onChange={this.cambioValor} value={usuario}></input>
                                <small id="helpId" className="form-text text-config text-whites">Ingresa el usuario</small>
                            </div>                                           
                            <div className="mb-3 mx-4 pb-3">
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
 
export default CrearProfesor;
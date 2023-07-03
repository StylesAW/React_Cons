import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            datosCursos: [],
            modalOpen: false,
            modalMensajesActulizado: false,
            modalMensajesEliminado: false,
            nombre: "",
            descripcion: "",
            tiempo: "",
            id:"",
            usuario:"",
            mensaje:""
        }
    }
        
    cargarDatos(){        
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {
            this.setState({datosCargados:true,  datosCursos:datosrepuesta.data})
            console.log(datosrepuesta.data);
        })
        .catch(console.log)//muestra errores
    }

    eliminar(id){
        var datosenviar = {
            id: id
        }
        this.openModalMensajesEliminar();
        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
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
        this.setState({nombre: objeto.nombre, descripcion: objeto.descripcion, tiempo: objeto.tiempo, id: objeto.id, usuario: objeto.usuario });
        this.openModal();
    }

    cambioValor = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState ({state});
    }

    enviarDatos = (e) =>{
        e.preventDefault();
        
        const { id, nombre, descripcion, tiempo, usuario} = this.state;

        var datosenviar = {
            id:id,
            nombre: nombre,
            descripcion: descripcion,
            tiempo: tiempo,
            usuario: usuario
        }
        this.openModalMensajesActualizar();
        console.log(datosenviar);

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
        {
            method:"POST",
            body:JSON.stringify(datosenviar)
        })//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {
            
            //window.location = 'ListarCurso'        
             
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
        const { datosCargados, datosCursos, modalOpen, modalMensajesActulizado, modalMensajesEliminado, nombre, descripcion, tiempo, id, usuario } = this.state
        return (            
            <div className='container'>                                
                <h1>Listar Curso</h1>
                <div className="table-responsive rounded rounded-3">
                    <table className="table table-striped
                        table-hover	
                        table-borderless
                        table-primary
                        align-middle tabla">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Tiempo</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datosCursos.map(
                                    (datosExtraidos)=>(
                                        <tr key={datosExtraidos.id} className="table-primary" >
                                            <td scope="row">{datosExtraidos.id}</td>
                                            <td>{datosExtraidos.nombre}</td>
                                            <td>{datosExtraidos.descripcion}</td>
                                            <td>{datosExtraidos.tiempo}</td>
                                            <td>{datosExtraidos.usuario}</td>
                                        
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
                                <input type="hidden" id="id" name="id" required onChange={this.cambioValor} value={id}></input>
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre del curso" required onChange={this.cambioValor} value={nombre}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el nombre del curso</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                                <input type="text"
                                    className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Descripcion del curso" required onChange={this.cambioValor} value={descripcion}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa la Descripcion del curso</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tiempo" className="form-label">Tiempo</label>
                                <input type="text"
                                    className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Tiempo del curso" required onChange={this.cambioValor} value={tiempo}></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el Tiempo del curso</small>
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
 
export default ListarCurso;

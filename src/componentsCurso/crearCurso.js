import React from 'react';
import ListarCurso from './ListarCurso';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class CrearCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            nombre:"",
            descripcion:"",
            tiempo:"",
            datosCargado:false,
            modalMensajesCreado: false
        }
    }

    cambioValor = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({state});
    }

    guardarDatos = (e) => {
        e.preventDefault();
        
        const { nombre, descripcion, tiempo } = this.state;

        var datosenviar = {
            nombre:nombre,
            descripcion:descripcion,
            tiempo:tiempo,
            usuario:'Kevin' 
        }
        console.log(datosenviar);
        this.openModalMensajesCrear();
        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
        {
            method:"POST",
            body:JSON.stringify(datosenviar)
        })//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
        .then((datosrepuesta) => {            
            
        })
        .catch(console.log)//muestra errores
    }

    openModalMensajesCrear(){
        this.setState({modalMensajesCreado:true});
    }

    closeModalMensajesCrear(){
        window.location = "ListarCurso"
        this.setState({modalMensajesCreado:false});
    }

    render() { 
        const { nombre, descripcion, tiempo, datosCargado, modalMensajesCreado } = this.state;
        return ( 
            <div>
                <h1>Crear Curso</h1>
                <div className='container bg-create pt-3 rounded rounded-4 w-50'>
                
                <form id="formulario" onSubmit={this.guardarDatos}>
                    <div className="mb-3 mx-4">
                    <label htmlFor="nombre" className="form-label text-config text-white">Nombre</label>
                    <input type="text" required onChange={this.cambioValor} value={nombre}
                        className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre del curso"></input>
                    <small id="helpId" className="form-text text-config text-whites">Ingresa el nombre del curso</small>
                    </div>
                    <div className="mb-3 mx-4">
                        <label htmlFor="descripcion" className="form-label text-config text-white">Descripcion</label>
                        <input type="text" required onChange={this.cambioValor} value={descripcion}
                        className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Descripcion del curso"></input>
                        <small id="helpId" className="form-text text-config text-whites">Ingresa la Descripcion del curso</small>
                    </div>
                    <div className="mb-3 mx-4">
                        <label htmlFor="tiempo" className="form-label">Tiempo</label>
                        <input type="text" required onChange={this.cambioValor} value={tiempo}
                        className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Tiempo del curso"></input>
                        <small id="helpId" className="form-text text-config text-whites">Ingresa el Tiempo del curso</small>
                    </div>         
                    <div className="mb-3 mx-4 pb-3">
                        <button type="reset" className="btn btn-del mx-2">Reset</button>
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
 
export default CrearCurso;
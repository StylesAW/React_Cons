import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//ccc
class ListarGrupo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargado: false,
            datosGrupo: [],
            modalMensajesActulizado: false,
            id: "",
            nombre: ""
        }
    }
    
    

    guardarDatos = (e) => {
        e.preventDefault();

        const { id, nombre } = this.state;

        var datosenviar = {
            id: id,
            nombre: nombre
        }
        console.log(datosenviar);
        this.openModalMensajesActualizar();
        fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                
            })
            .catch(console.log)//muestra errores
    }

    openModalMensajesActualizar(){
        this.setState({modalMensajesActulizado:true});
    }

    closeModalMensajesActualizar(){
        window.location = "ListarGrupo"
        this.setState({modalMensajesActulizado:false});
    }
    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    closeModalMensajesCrear(){
        window.location = "ListarGrupo"
        this.setState({modalMensajesCreado:false});
    }
    render() {
        const { datosCargado, datosGrupo, modalMensajesActulizado, nombre } = this.state;
        return (
            <div>
                <h1>Crear Grupo</h1>
                <div className='container bg-create pt-3 rounded rounded-4 w-50'>
                
                <form id="formulario" onSubmit={this.guardarDatos}>
                    <div className="mb-3 mx-4">
                    <label htmlFor="nombre" className="form-label text-config text-white">Nombre</label>
                    <input type="text" required onChange={this.cambioValor} value={nombre}
                        className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre del grupo"></input>
                    <small id="helpId" className="form-text text-config text-whites">Ingresa el nombre del grupo</small>
                    </div>                           
                    <div className="mb-3 mx-4 pb-3">
                        <button type="reset" className="btn btn-del mx-2">Reset</button>
                        <button type="submit" className="btn btn-edit mx-2">Crear</button>

                    </div>                         
                </form>
            
                <Modal show={modalMensajesActulizado} >
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

export default ListarGrupo;
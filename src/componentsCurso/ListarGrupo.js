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
            stateModal: false,
            modalMensajesActulizado: false,
            modalMensajesEliminado:false,
            id: "",
            nombre: ""
        }
    }

    cargarDatos() {

        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                this.setState({ datosrepuesta: true, datosGrupo: datosrepuesta.data })
                console.log('Datos', datosrepuesta.data)//Muestra el resultado de la peticion
            })
            .catch(console.log)//muestra errores
    }

    eliminar(id) {
        var datosenviar = {
            id: id
        }
        this.openModalMensajesEliminar();
        fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                

            })
            .catch(console.log)//muestra errores
    }

    editar(objeto) {
        this.openModal();
        this.setState({
            id: objeto.id,
            nombre: objeto.nombre
        });
        console.log(objeto);
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
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php",
            {
                method: "POST",
                body: JSON.stringify(datosenviar)
            })//url de peticion de datos
            .then(respuesta => respuesta.json())//recibe los datos en formato json
            .then((datosrepuesta) => {
                
            })
            .catch(console.log)//muestra errores
    }

    closeModal() {
        this.setState({ stateModal: false });
    }

    openModal() {
        this.setState({ stateModal: true });
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

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    componentDidMount() {
        this.cargarDatos()
    }

    state = {}
    render() {

        const { datosCargado, datosGrupo, stateModal, modalMensajesActulizado, modalMensajesEliminado, id, nombre } = this.state;

        return (
            <div className='container' style={{width: '800px'}}>
                <h1>Lista Grupo</h1>

                <Modal show={stateModal}>
                    <Modal.Header>
                        <Modal.Title>Modal Edicion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form id="formulario" onSubmit={this.guardarDatos}>
                            <div className="mb-3">
                                <input type="hidden" id="id" name="id"></input>
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" required onChange={this.cambioValor} value={nombre}
                                    className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre del curso"></input>
                                <small id="helpId" className="form-text text-muted">Ingresa el nombre del grupo</small>
                            </div>

                            <div className="mb-3">
                                <button type="reset" className="btn btn-del">Reset</button>
                                ||
                                <button type="submit" className="btn btn-edit">Editar</button>
                                ||
                                <Button variant="secondary" onClick={() => this.closeModal()}>
                                    Close
                                </Button>
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
                                <th className='acciones-right' scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datosGrupo.map(
                                    (datosExtraido) => (
                                        <tr key={datosExtraido.id} className="">
                                            <td>{datosExtraido.id}</td>
                                            <td>{datosExtraido.nombre}</td>
                                            <td className='acciones-right'>
                                                <a name="" id="" className="btn btn-del" onClick={() => this.eliminar(datosExtraido.id)} role="button">Borrar</a>
                                                ||
                                                <a name="" id="" className="btn btn-edit" onClick={() => this.editar(datosExtraido)} role="button">Editar</a>
                                            </td>
                                        </tr>
                                    )

                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListarGrupo;
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/MenuStyles.css';
import { FaReact } from 'react-icons/fa';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { }
    
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = () => {
      const navbar = document.getElementById('Menu1');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop === 0) {
        navbar.classList.remove('scrolled');
      } else {
        navbar.classList.add('scrolled');
      }
    };

    render() {
        return (          
          <Navbar expand="lg" className="justify-content-center" id='Menu1' >
            <Container className='justify-content-center burger-icon'>
              <Navbar.Brand className='text-white text-config link-menu fs-5' href="./"><FaReact size={40} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">              
                <Nav className="me-auto">                  
                                  
                </Nav>
                <Nav className='ml-auto'>
                <NavDropdown title={<span style={{ color: 'white', opacity: 1 }}>Cursos</span>} id="basic-nav-dropdown" className='custom-dropdown text-config link-menu mx-2'>
                    <Nav.Link href="/ListarCurso">Listar Curso</Nav.Link>
                    <Nav.Link href="/CrearCurso">Crear Curso</Nav.Link>
                  </NavDropdown>
                  <NavDropdown title={<span style={{ color: 'white', opacity: 1 }}>Grupos</span>} id="basic-nav-dropdown" className="custom-dropdown text-config link-menu mx-2">
                    <Nav.Link href="/ListarGrupo">Listar Grupo</Nav.Link>
                    <Nav.Link href="/CrearGrupo">Crear Grupo</Nav.Link>
                  </NavDropdown>
                  <NavDropdown title={<span style={{ color: 'white', opacity: 1 }}>Estudiantes</span>} id="basic-nav-dropdown" className="custom-dropdown text-config link-menu mx-2">
                    <Nav.Link href="/ListarEstudiantes">Listar Estudiantes</Nav.Link>
                    <Nav.Link href="/CrearEstudiante">Crear Estudiante</Nav.Link>
                  </NavDropdown>
                  <NavDropdown title={<span style={{ color: 'white', opacity: 1 }}>Profesores</span>} id="basic-nav-dropdown" className="custom-dropdown text-config link-menu mx-2">
                    <Nav.Link href="/ListaProfesores">Listar Profesores</Nav.Link>
                    <Nav.Link href="/CrearProfesor">Crear Profesor</Nav.Link>
                  </NavDropdown>  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>                
              
                          
            //  <div>
            //      <nav className="navbar navbar-expand navbar-light bg-light">
            //          <ul className="nav navbar-nav">
            //              <li className="nav-item">
            //                  <a className="nav-link active" href="#" aria-current="page">Nav 1 <span className="visually-hidden">(current)</span></a>
            //              </li>
            //              <li className="nav-item">
            //                  <a className="nav-link" href="#">Nav 2</a>
            //              </li>
            //          </ul>
            //      </nav>
            //  </div>
          );
    }
}
 
export default Menu;
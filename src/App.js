import logo from './logo.svg';
import ListarCurso from './componentsCurso/ListarCurso';
import CrearCurso from './componentsCurso/crearCurso';
import ListarGrupo from './componentsCurso/ListarGrupo';
import CrearGrupo from './componentsCurso/CrearGrupo';
import ListarEstudiantes from './componentsCurso/ListarEstudiantes';
import CrearEstudiante from './componentsCurso/CrearEstudiante';
import ListarProfesores from './componentsCurso/ListarProfesores';
import CrearProfesor from './componentsCurso/CrearProfesor';
import Menu from './componentsPlantilla/Menu';
import Footer from './componentsPlantilla/footer';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import './styles/FooterStyles.css';

import HeaderAnimation from './componentsJavaScript/HeaderAnimation';

import {Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import CrearEstudiantes from './componentsCurso/CrearEstudiante';

function App() {
  return (
    <div className="App">      
      <div id="large-header" className="large-header Main">
        <div>
        <canvas id="demo-canvas">
          <HeaderAnimation></HeaderAnimation>
        </canvas>
        </div>        
        <Menu></Menu>    
        <div className='lista container-fluid'>
          <div className="scrollable-content">
            <Router>
              <Route exact path="/"></Route>
              <Route path="/ListarCurso" component={ListarCurso}></Route>
              <Route path="/CrearCurso" component={CrearCurso}></Route>
              <Route path="/ListarGrupo" component={ListarGrupo}></Route>
              <Route path="/CrearGrupo" component={CrearGrupo}></Route>
              <Route path="/ListarEstudiantes" component={ListarEstudiantes}></Route>
              <Route path="/CrearEstudiante" component={CrearEstudiante}></Route>
              <Route path="/ListaProfesores" component={ListarProfesores}></Route>
              <Route path="/CrearProfesor" component={CrearProfesor}></Route>
            </Router>
          </div>
        </div>    
        <div className='main-title'>          
        <img src={logo} className="App-logo" alt="logo"/> 
        </div>        
        <div id='footer-abs'>
        <Footer></Footer>
        </div>                     
      </div>        
    </div>
  );
}

export default App;

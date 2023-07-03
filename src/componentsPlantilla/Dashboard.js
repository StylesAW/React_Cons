import React from 'react';
import logo from '../logo.svg';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <h1>Dashboard</h1>       
                <img src={logo} className='App-logo' alt='logo'></img>         
            </div>           
         );
    }
}
 
export default Dashboard;
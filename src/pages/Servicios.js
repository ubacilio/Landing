import React, { Fragment, Component } from 'react' 
 
import ReactGA from 'react-ga';

export class Servicios extends Component {
  componentDidMount(){
    ReactGA.initialize('');
    ReactGA.pageview('/servicios');
  }
  render() {
    return ( 
        <section id="servicios">
         PÁGINA DE SERVICIOS
        </section>  
    )
  }
}

export default Servicios

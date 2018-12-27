import React, { Component } from 'react' 
import ReactGA from 'react-ga';


export class Soporte extends Component {

  componentDidMount(){
    ReactGA.initialize('');
    ReactGA.pageview('/es/soporte');
  }

  render() {
    return ( 
        <section id="soporte"> 
           ESTO ES SOPORTE
        </section>
  
    )
  }
}

export default Soporte

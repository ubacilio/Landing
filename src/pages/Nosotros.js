import React, { Fragment, Component } from 'react' 
import { Image, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../assets/styles/aboutUs.css' 
import ReactGA from 'react-ga'; 
export class Nosotros extends Component {
  
  componentDidMount(){

  ReactGA.initialize('');
  ReactGA.pageview('/nosotros');
  }
  render() {
    return ( 
        <section id="nosotros">
        ESTA ES LA PÁGINA NOSOTROS
        </section>  
    )
  }
}

export default Nosotros

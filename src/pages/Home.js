import React, { Fragment, Component } from "react"; 
import '../components/presentational/Input.less'; 
import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'  
 
import ReactGA from 'react-ga' 
import { Router, Link } from 'react-router-dom'   
import { Experiment, Variant, emitter } from '@marvelapp/react-ab-test';
import { Text, getCurrentLocale } from 'react-easy-i18n';
import { withNamespaces } from 'react-i18next';


// Define variants and weights in advance.
emitter.defineVariants('My Example', ['A', 'B'], [50, 50]);

class Home extends React.Component {

  componentDidMount(){
    ReactGA.initialize('');
    ReactGA.pageview('/');

  }

  constructor(props) {
    super(props);
    this.state = { 
      closeModal: false,
      openModal: false
    }; 
  }
 
  
  render() {
     const { t, i18n } = this.props;

     console.log(t, i18n)
     console.log('current', i18n.language)
    return ( 
      
        <section id="inicio">
           ESTO ES LA HOME
        </section>  
      

    );
  }
}



export default withNamespaces()(Home)
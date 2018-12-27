import React, { Fragment, Component } from 'react'
import { Grid, Accordion, Icon } from 'semantic-ui-react' 
import '../assets/styles/accordion.css'
import '../assets/styles/faq.css'
import ReactGA from 'react-ga';

export class Contacto extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-128115565-1');
    ReactGA.pageview('/es/faq');
  }

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {

    const { activeIndex } = this.state
    return (
      <Fragment>
         
        <section id="contacto">

          <h2>Preguntas más frecuentes</h2>
         
        </section> 
      </Fragment>
    )
  }
}

export default Contacto

import React, { Fragment, Component } from 'react'
import { Image } from 'semantic-ui-react'
import imgProximamente from '../../assets/images/proximamente.png'
import  TopMenu  from '../../components/topMenu'
import { Footer } from './components/footer'
//


export class Proximamente extends Component {
  render() {
    return (
      <Fragment>
        <TopMenu language="ES"/>
        <section id="proximamente">
          <Image src={imgProximamente} /> 
        </section>
        <Footer language="ES" />
      </Fragment>
    )
  }
}

export default Proximamente

 
import React from 'react'
import '../assets/styles/exchanges.css'
import { Grid, Image } from 'semantic-ui-react' 

export class Exchanges extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <section id="exchanges"> 
            <h2>Exchanges</h2> 
            <div className="underline_title_descriptionProject"/>

          <Grid stackable centered padded="horizontally">
            <Grid.Row >
                  <Grid.Column textAlign="center" mobile={12} tablet={5} computer={6}> 
                    <a href="https://idex.market/eth/cst" target="_blank" className="logo idex greyscale"></a>
                  </Grid.Column>
                  <Grid.Column textAlign="center" mobile={12} tablet={5} computer={6}>
                    <a href="https://www.digifinex.com/" target="_blank"  className="logo digifinex greyscale"></a>
                  </Grid.Column>  
              </Grid.Row>
               
          </Grid>
        </section>
      )
    }
  }
  
  export default Exchanges

 
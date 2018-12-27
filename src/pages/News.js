import React, { Component } from 'react'

import { Grid, Card, Icon } from 'semantic-ui-react'; 
const extra = (
 
    <Icon name='user' />
 
)


export class News extends Component {
  render() {
    return (
      <div>
        <Grid align="center">
          <Grid.Row>
            <Grid.Column >
            <Card 
              header='Elliot Baker'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extra}
            />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default News

import React from 'react'
import { Button, Grid, Image } from 'semantic-ui-react'
import DownloadButton from '../assets/images/download.png'
import './download.css'
export default () => (
    <section id="download">
        <Grid textAlign="center">
            <Grid.Row>
                <Grid.Column verticalAlign="middle" mobile={16} tablet={3} computer={1} largeScreen={1} widescreen={1}>
                    <Image src={DownloadButton} />
                </Grid.Column>
                <Grid.Column verticalAlign="middle" mobile={16} tablet={6} computer={6} largeScreen={6} widescreen={6}>
                    <h3>
                        Comming Soon You can try CST Mining Platform
                    </h3>
                    <span>
                    </span>

                </Grid.Column>
                <Grid.Column verticalAlign="middle" mobile={16} tablet={6} computer={5} largeScreen={5} widescreen={5}>
                    <Button  as="a" href="/comming-soon" target="_blank" color='green'>Beta Comming Soon</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </section>
)

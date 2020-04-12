import React, { Component } from 'react'
import Countup from "react-countup"

import {Card, CardContent, Typography, Grid} from "@material-ui/core"


const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed) {
        return 'loading...'
    }
    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="grid infected">
                    <CardContent>
                        <Typography className="text-primary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup 
                                start={0} 
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{ new Date(lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2" className="text-dark text-capitalize">number of active cases from covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="grid recovered">
                    <CardContent>
                        <Typography className="text-success" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <Countup 
                                start={0} 
                                end={ recovered.value }
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{ new Date(lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2" className="text-dark text-capitalize">number of Recovered cases from covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="grid deaths">
                    <CardContent>
                        <Typography className="text-danger" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup 
                                start={0} 
                                end={ deaths.value }
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{ new Date(lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2" className="text-dark text-capitalize">number of Deaths from covid19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards
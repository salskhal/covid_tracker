import React from "react"
import { Card, CardContent, Typography, Grid    } from "@material-ui/core"
import CountUp from "react-countup"
import styles from "./Card.module.css"
import cx from "classnames"

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) {
        return "loading...."
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBotttom>Infected</Typography>
                        <Typography varient="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBotttom>Recovered</Typography>
                        <Typography varient="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>                                                
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBotttom>Death</Typography>
                        <Typography varient="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography> 
                        <Typography varient="body2">Number of deaths due to COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
import React, { useContext } from 'react'
import useStyles from './styles'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import Form from './Form/Form'
import List from './List/List'
import { ExpenseTrackContext } from '../../context/context'
import InfoCard from '../InfoCard'
 
const Main = () => {
    const classes = useStyles()
    const {balance} = useContext(ExpenseTrackContext)
  return (
    <Card className={classes.root}>
        <CardHeader  title='Expense Tracker' subheader='Powered by Speechly' />
        <CardContent>
            <Typography variant='h5' align='center'>Total Balance ${balance}</Typography>
            <Typography variant='subtitle1'  style={{lineHeight:  '1.5em', marginTop:'20px'}}>
                <InfoCard />
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spaacing={2}>
                <Grid item xs={12}>
                   <List />
                </Grid>
            </Grid>
        </CardContent>

    </Card>
  )
}

export default Main

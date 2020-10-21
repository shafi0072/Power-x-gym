import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import background from '../../../Image/penguinuhh-8VI6WwEEEHw-unsplash.jpg';
import CheckIcon from '@material-ui/icons/Check';
import './PricingPlan.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    
    root: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});
const PricingDetailsData = (props) => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    const {name, price , fade} = props.data
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <div className="col-md-4" >
                <Card data-aos = {`fade-${fade}`} id="backingPricingImage" className={classes.root}>
                    <CardContent>
                        <Typography
                            className={`classes.title`,"text-warning text-center"}
                            color="textSecondary"
                            gutterBottom="gutterBottom"
                            style={{ fontFamily: "'Anton', sans-serif"}}
                            >
                            BILLED MONTHLY
                        </Typography>
                        <Typography variant="h5" component="h1" className="text-center text-light" style={{ fontFamily: "'Anton', sans-serif"}}>
                            <h2>{name}</h2>
                        </Typography>
                        <Typography className={`classes.pos text-warning text-center`}  style={{ fontFamily: "'Anton', sans-serif"}}>
                        <h1 style={{fontSize:'70px'}}>${price}</h1>
                        </Typography>
                        <Typography className='text-center' variant="body2" component="p">
                            <p><CheckIcon className='text-warning'/> <span className='text-light' >Mobile-Optimized</span></p>
                            <p><CheckIcon className='text-warning'/> <span className='text-light' >Best Hosting</span></p>
                            <p><CheckIcon className='text-warning'/> <span className='text-light' >Free Custom</span></p>
                            <p><CheckIcon className='text-warning'/> <span className='text-light' >Outstanding</span></p>
                            <p><CheckIcon className='text-warning'/> <span className='text-light' >Happy Customers</span></p>
                        </Typography>
                    </CardContent>
                    <CardActions className='d-flex justify-content-center'>
                        <Link to='/form'><button  style={{ fontSize:'20px', fontFamily: "'Anton', sans-serif"}} className='btn btn-warning text-center pl-3 pr-3'>PURCHASE</button></Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default PricingDetailsData;
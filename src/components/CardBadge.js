import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Button2 from "../components/MainButton"
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        margin: 50,
        maxHeight: 400,
        minHeight: 400,

    },
    image: {
        minHeight: 200,
        maxHeight: 200
    },
    boton: {
        backgroundColor: "#8ba752"
    }
});

const CardBadge = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={props.image}
                        className={classes.image}>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.productName}
                        </Typography>
                        <Typography variant="body3" color="textSecondary" component="p">
                            {props.productDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className="row">
                        <div className="col-md-6">
                            <Button component={Link} to={`/product/${props.id}`} className={classes.boton} variant="outlined" size="small" color="black">
                                See product
                            </Button> 
                        </div>
                        <div className="col-md-6 m-auto">
                            <Typography gutterBottom variant="h5" component="h4">
                                MXN {props.price}
                            </Typography>
                        </div>
                    </div>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default CardBadge;
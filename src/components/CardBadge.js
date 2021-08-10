import React from "react"
import "./style/CardBadge.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        margin: 50,
        maxHeight: 600,
        minHeight: 380,
        
    },
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
                        className="image_Catalogue">
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
                            <Button link={"/product"} variant="outlined" size="small" color="black">
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
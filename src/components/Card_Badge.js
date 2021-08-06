import React from "react"
import "./style/Card_Badge.css"
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
      maxHeight: 600

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
                            <Button size="small" color="black">
                            Add To Cart
                            </Button>
                           
                        </CardActions>
                    </Card>
        </React.Fragment>
    );
}

export default CardBadge;
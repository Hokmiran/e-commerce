import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { Context } from '../context/Context';


function CardComponent({ index }) {

    const { addToCart, removeFromCart, cart } = useContext(Context);
    const productInCart = cart.find((item) => item.id === index.id);
    const quantity = productInCart ? productInCart.quantity : 0;

    const handleAddToCart = () => {
        addToCart(index);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(index.id);
    };

    return (

        <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card
                sx={{
                    maxWidth: 345,
                    // height: 500,
                    borderTopRightRadius: 4,
                    borderTopLeftRadius: 4,
                }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={index.image}
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {index.title.substring(0, 25)}
                    </Typography>
                    <Typography sx={{fontSize: 16}} variant="body2" color="text.secondary">
                        {index.description.substring(0, 101)}...
                    </Typography>
                    <Typography mt={1} variant="h5" color="text.primary">
                        {index.price}$
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={handleAddToCart}
                    >
                        Add
                    </Button>
                    {quantity > 0 &&
                        <Button
                            variant="contained"
                            startIcon={<RemoveIcon />}
                            onClick={handleRemoveFromCart}
                        >
                            Remove
                        </Button>
                    }
                    <Typography sx={{ marginLeft: 5 }} variant="body2" color="text.secondary">
                        {quantity > 0 &&
                            <>
                                Quantity: {quantity}
                            </>
                        }
                    </Typography>

                </CardActions>
            </Card>
        </Grid>

    );
}
export default CardComponent;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../context/Context';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {

    const { cart, removeFromCart } = useContext(Context);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };
    
    return (
        <Container>
            <Grid container spacing={2}>
                {cart.map((product) => (
                    <Grid mt={2} item xs={4} key={product.id}>
                        <Card sx={{
                            maxWidth: 345,
                            borderTopRightRadius: 4,
                            borderTopLeftRadius: 4,
                        }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={product.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    startIcon={<RemoveIcon />}
                                    onClick={() => handleRemoveFromCart(product.id)}
                                >
                                    Remove
                                </Button>
                                <Typography sx={{marginLeft: 15}} variant="body2" color="text.secondary">
                                    Quantity: {product.quantity}
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Cart;

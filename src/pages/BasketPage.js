import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CircularProgress, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../context/Context';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {

    const { cart, removeFromCart, isLoading, error } = useContext(Context);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };
    const total = cart.reduce((acc, item) => acc + item.price, 0)
    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}>
                <CircularProgress />
            </div>
        )
    }


    if (error) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}>
                <h2>{error.message}</h2>
            </div>
        )
    }
    return (
        <Container>
            <Grid container spacing={2}>
                {cart.map((product) => (
                    <Grid mt={2} item xs={4} key={product.id}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                            }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={product.image}
                                sx={{ objectFit: "contain" }}
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
                                <Typography sx={{ marginLeft: 15 }} variant="body2" color="text.secondary">
                                    Quantity: {product.quantity}
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <h2>{total}</h2>
        </Container>
    );
}

export default Cart;

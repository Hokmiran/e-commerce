import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CircularProgress, Container, Grid } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../context/Context';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import NoData from '../components/lottie/Lottie';

function Cart() {

    const { cart, removeFromCart, isLoading, error, addToCart } = useContext(Context);
    const handleAddToCart = (product) => {
        addToCart(product);
    };
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
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
                {cart.length > 0 ? cart.map((product) => (
                    <>
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
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title?.substring(0, 25)}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">
                                        {product.description?.substring(0, 101)}...
                                    </Typography>
                                    <Typography mt={1} variant="h5" color="text.primary">
                                        {product.price}$
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add
                                    </Button>
                                    <Button
                                        variant="contained"
                                        startIcon={<RemoveIcon />}
                                        onClick={() => handleRemoveFromCart(product.id)}
                                    >
                                        Remove
                                    </Button>
                                    <Typography sx={{ marginLeft: 5 }} variant="body2" color="text.secondary">
                                        Quantity: {product.quantity}
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    </>
                ))
                    :
                    <NoData />
                }

            </Grid>
            <Typography mt={4} variant="h4" color="text.primary">
                Total: {total.toFixed(2)}$
            </Typography>
        </Container>
    );
}

export default Cart;

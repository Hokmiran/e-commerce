import * as React from 'react';
import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { Context } from '../context/Context';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import NoData from '../components/lottie/Lottie';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
});

function Cart() {
    const { cart, removeFromCart, isLoading, error, addToCart, clearCart } = useContext(Context);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <h2>{error.message}</h2>
            </div>
        );
    }
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const order = {
            name: values.name,
            address: values.address,
            cart: cart.map((item) => ({
                id: item.id,
                quantity: item.quantity,
            })),
        };

        await fetch('https://northwind.vercel.app/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });

        const existingUsers = localStorage.getItem('user');
        const user = existingUsers ? JSON.parse(existingUsers) : [];

        user.push(values);

        localStorage.setItem('user', JSON.stringify(user));

        clearCart();
        setSubmitting(false);
        resetForm();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {cart.length > 0 ? (
                    cart.map((product) => (
                        <Grid mt={2} item xs={4} key={product.id}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    borderTopRightRadius: 4,
                                    borderTopLeftRadius: 4,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product.image}
                                    sx={{ objectFit: 'contain' }}
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
                    ))
                ) : (
                    <NoData />
                )}
            </Grid>

            {cart.length > 0 && (
                <Typography key={cart.length} mt={4} variant="h4" color="text.primary">
                    Total: {total.toFixed(2)}$
                </Typography>
            )}

            {cart.length > 0 && (
                <Formik
                    initialValues={{
                        name: '',
                        address: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field
                                as={TextField}
                                name="name"
                                label="Name"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                error={Boolean(errors.name && touched.name)}
                                helperText={<ErrorMessage name="name" component="div" />}
                            />

                            <Field
                                as={TextField}
                                name="address"
                                label="Address"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                error={Boolean(errors.address && touched.address)}
                                helperText={<ErrorMessage name="address" component="div" />}
                            />

                            <Button type="submit" variant="contained" color="primary">
                                Complete Order
                            </Button>
                        </Form>
                    )}
                </Formik>
            )}
        </Container>
    );
}

export default Cart;

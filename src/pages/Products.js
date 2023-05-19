import React from 'react';
import { Grid, Container } from '@mui/material';
import CardComponent from '../components/CardComponent';
import { Context } from '../context/Context';
import CircularProgress from '@mui/material/CircularProgress';

function Products() {

    const { data, isLoading, error } = React.useContext(Context)

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
            <Grid container spacing={4} mt={2} >
                {
                    data?.data?.map(index =>
                        <CardComponent key={index.id} index={index} />
                    )
                }
            </Grid>
        </Container>
    );
}
export default Products;
import React from 'react';
import { Grid, Container } from '@mui/material';
import CardComponent from '../components/CardComponent';
import { Context } from '../context/Context';

function Products() {
    const { data } = React.useContext(Context)

    return (
        <Container>
            <Grid container spacing={4} mt={2}>
                {
                    data?.map(index =>
                        <CardComponent key={index.id} index={index} />
                    )
                }
            </Grid>
        </Container>
    );
}
export default Products;
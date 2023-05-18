import React, { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import CardComponent from '../components/CardComponent';
import { Context } from '../context/Context';
import axios from 'axios'

function Products() {
    const { data } = React.useContext(Context)

    return (
        <>
            {
                data?.map(index =>
                    <Grid container>
                        <Grid item>
                            <Grid xs={4}>
                                <CardComponent key={index.id} index={index} />
                            </Grid>
                        </Grid>
                    </Grid >
                )
            }
        </>
    );
}
export default Products;
import React from 'react'
import Header from './Header'
import { Grid, Container } from '@mui/material';

function Layout({ children }) {
    return (
        <>
            <Header />
            {/* <Container> */}
                {children}
            {/* </Container> */}
        </>
    )
}

export default Layout;
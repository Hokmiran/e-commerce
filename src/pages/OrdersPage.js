import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import NoData from '../components/lottie/Lottie';

function OrderList() {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);

    return (
        <>
            {
                user?.length > 0 ?
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.map((order, index) => (
                                    <TableRow key={order.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{order.name}</TableCell>
                                        <TableCell>{order.address}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <NoData />
            }
        </>
    );
}

export default OrderList;

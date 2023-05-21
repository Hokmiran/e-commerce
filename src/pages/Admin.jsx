import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import { Context } from '../context/Context';

function ProductTable() {
  const { data, isLoading, error } = React.useContext(Context);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <h2>{error.message}</h2>
      </div>
    );
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
      <Table aria-label="Product Table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell>
              <strong>Description</strong>
            </TableCell>
            <TableCell>
              <strong>Price</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;

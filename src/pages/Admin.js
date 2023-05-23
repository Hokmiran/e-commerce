import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Context } from "../context/Context";
import ModalDelete from "../components/ModalDelete";
import { useNavigate } from "react-router-dom";

function ProductTable() {
  const { data, isLoading, error } = React.useContext(Context);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState("");
  const nav = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h2>{error.message}</h2>
      </div>
    );
  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem", marginTop: "1rem", marginRight: 10 }}>
        <Button sx={{marginRight: 5}} variant="contained" color="primary" onClick={() => nav('/orders')}>
          Go to Orders page
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            nav('/add-product')
          }}
        >
          Add New Product
        </Button>
      </div>
      <TableContainer component={Paper}>
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
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell sx={{ display: "flex" }}>
                  <IconButton
                    onClick={() => {
                      handleOpen();
                      setProduct(item.id);
                    }}
                    color="error"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      nav(`/edit/${item.id}`)
                    }}
                    color="primary"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <ModalDelete open={open} product={product} handleClose={handleClose} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ProductTable;

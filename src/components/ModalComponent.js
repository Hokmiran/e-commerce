import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'

function ModalComponent({ open, handleClose, successEditText, successAddProductText, successSignUpText, successOrdeText }) {

    return (

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4
                }}
            >
                <Typography variant="h6" id="modal-title" gutterBottom>
                    {successOrdeText}
                    {successEditText}
                    {successSignUpText}
                    {successAddProductText}
                </Typography>
                <Button variant="contained" onClick={handleClose}>
                    OK
                </Button>
            </Box>
        </Modal>
    )
}

export default ModalComponent;
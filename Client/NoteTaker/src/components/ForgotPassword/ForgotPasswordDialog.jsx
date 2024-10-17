import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React from 'react'

const ForgotPasswordDialog = ({ open, close }) => {
    return (
        <Dialog open={open} close={close} onClose={close} maxWidth={'sm'}>
            <DialogTitle>
                Forgot Password ?
            </DialogTitle>
            <DialogContent>
                <Box>
                    <Typography sx={{
                        mb: 3
                    }}>
                        Please enter the email address associated with your account. We'll send you a link to reset your password.
                    </Typography>
                </Box>
                <TextField variant='standard' label='Email' fullWidth />
            </DialogContent>
            <DialogActions >
                <Button sx={{
                    color: 'red',
                    border: 'none',
                    backgroundColor: "transparent"

                }} onClick={close}>
                    Cancel
                </Button>
                <Button variant='outlined' sx={{
                    color: 'red',
                    border: 'none',
                    backgroundColor: "transparent"
                }}>
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ForgotPasswordDialog
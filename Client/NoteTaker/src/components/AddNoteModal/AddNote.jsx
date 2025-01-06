import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { enqueueSnackbar } from "notistack";

const AddNote = ({ open, close }) => {
  return (
    <Dialog open={open} close={close} onClose={close} fullWidth>
      <DialogTitle>Add Note</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            p: "10px",
          }}
        >
          <Typography>Title</Typography>
          <TextField
            fullWidth
            placeholder="Breakfast"
            variant="standard"
            sx={{
              p: 1,
              mb: 4,
            }}
          />
          <Typography>Content</Typography>
          <TextField
            variant="standard"
            placeholder="Content"
            fullWidth
            sx={{
              p: 1,
              mb: 4,
            }}
            multiline
            maxRows={7}
          />

          <Typography>Tag  </Typography>
          <TextField
            fullWidth
            placeholder="#diet"
            variant="standard"
            sx={{
              p: 1,
              mb: 4,
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            color: "red",
            border: "none",
            backgroundColor: "transparent",
          }}
          onClick={close}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            enqueueSnackbar({
              message: "Email sent succesfully",
              variant: "success",
            });
            close();
          }}
          variant="outlined"
          sx={{
            color: "red",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNote;

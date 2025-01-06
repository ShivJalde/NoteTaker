import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box } from "@mui/material";
import Notecard from "../../components/NoteCard/Notecard";
import Grid from "@mui/material/Grid2";
import { IoMdAdd } from "react-icons/io";
import AddNote from "../../components/AddNoteModal/AddNote";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          p: 2,
          gap: 2,
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid
              key={index}
              item
              xs={12} // Full width on extra small screens (mobile)
              sm={6} // 50% width (2 items per row) on small screens (tablet)
              md={3} // 25% width (4 items per row) on medium screens (laptop and larger)
            >
              <Notecard
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis totam laboriosam"
                date="23/04/2002"
                isPinned={true}
                onDelete=""
                onEdit=""
                onPinNote=""
                tags="#imp"
                title="Important task"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
       onClick={()=>{
        setOpenAddEditModal(true)
       }}
        sx={{
          height: "100px",
          width: "100px",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 100,
          right: 40,
          borderRadius: "10px",
        }}
      >
        <IoMdAdd size={60} />
      </Box>

      <>
        <AddNote open={openAddEditModal} close={()=>{
          setOpenAddEditModal(false)
        }} />
      </>
    </Box>
  );
};

export default Home;

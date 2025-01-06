import { Box, Typography } from "@mui/material";
import React from "react";
import { MdPushPin } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Notecard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <Box
      sx={{
        width: "400px",
        p: 1,
        boxShadow: "2px 2px 2px 2px lightgray",
        '&:hover': {
          backgroundColor: "lightgray", // Change background color on hover
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "black",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "gray",
            }}
          >
            {date}
          </Typography>
        </Box>
        <Box>
          <MdPushPin color={isPinned ? "blue" : "black"} />
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          {content}
        </Typography>
      </Box>
      <Box sx={{
        display:'flex',
        justifyContent:'space-between'
      }}>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          {tags}
        </Typography>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          <MdDelete />
          <MdEdit />
        </Typography>
      </Box>
    </Box>
  );
};

export default Notecard;

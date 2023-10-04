import {
  Alert,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Snackbar,
  Typography
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postDelete } from "../api-helpers/helpers";

const DiaryItem = ({
  title,
  description,
  image,
  location,
  date,
  id,
  user,
  onPostDelete
}) => {
  const [open, setOpen] = useState(false);

  const isLoogedInUser = () => {
    const userIdFromStorage = localStorage.getItem("userId");
  
    if (userIdFromStorage === user._id) {
      return true;
    }
    return false;
  };

  const handleDelete = () => {
    postDelete(id)
      .then((data) => {
        console.log(data);
        onPostDelete(id);
      })
      .catch((err) => console.log(err));
    setOpen(true);
  };

  return (
    <Card
      sx={{
        maxWidth: { sm: "auto", md: "22%" },
        height: "auto",
        display: "flex",
        margin: 1.5,  
        flexDirection: "column",
        boxShadow: "5px 5px 15px #ccc",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
          borderRadius: "10px 10px 0 0",
          maxHeight: { sm: "auto", md: "220px" }
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {location} · {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0, 35)}...
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto", marginRight: 1, marginTop: 1 }}>
        {isLoogedInUser() && (
          <>
            <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
              <ModeEditOutlineIcon />
            </IconButton>
            <IconButton onClick={handleDelete} color="error">
              <DeleteForeverIcon />
            </IconButton>
          </>
        )}
      </CardActions>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post was successfully deleted!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default DiaryItem;
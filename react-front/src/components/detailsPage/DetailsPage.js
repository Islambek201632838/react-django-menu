import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsPage = () => {
  const [blogDetails, setblogDetails] = useState([]);
  const [postIngredients, setPostIngredients] = useState("");
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/details/${id}`
        );
        setblogDetails(res.data);
        setPostIngredients(res.data.ingredients);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" mt={4}>
        {blogDetails.title}
      </Typography>
      <Typography variant="body1" align="center" m={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={`${process.env.REACT_APP_API_URL}${blogDetails.image}`}
          onError={(e) => {
              console.error("Error loading image:", e);
            }}
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.content}
      </Typography>
      <List>
        {postIngredients.split(",").map((ingredients, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={ingredients} />
          </ListItemButton>
        ))}
      </List>

      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        You may also like
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;

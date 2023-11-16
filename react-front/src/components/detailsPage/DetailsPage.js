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
import Category from "../categoryList/Category";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const DetailsPage = () => {
  const [blogDetails, setblogDetails] = useState([]);
  const [postIngredients, setPostIngredients] = useState("");
  let { slug } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blogs/${slug}`
        );
        setblogDetails(res.data);
        setPostIngredients(res.data.ingredients);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        {blogDetails.title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={blogDetails.image}
          alt="burger"
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.content}
      </Typography>
      <Typography variant="h3" align="center" m={2}>
        {blogDetails.content2}
      </Typography>
      <List>
        {postIngredients.split(",").map((ingredients) => (
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={ingredients} />
          </ListItemButton>
        ))}
      </List>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.content2}
      </Typography>

      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        You may also like
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;

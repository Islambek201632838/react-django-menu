import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  CircularProgress
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions";
import type { BlogType } from "@/types";

interface DetailsPageProps {
  blogDetails: BlogType | null;
  postIngredients: string;
  loading: boolean;
  error: string;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ blogDetails, postIngredients, error, loading }) => {

  

  return (
    <Container maxWidth="md">

      {loading && (
        <Box display="flex" justifyContent="center" my={5}>
          <CircularProgress />
        </Box>
      )}

      <Typography marginTop='10px' textAlign='center' color='red' variant="h5">{error}</Typography>

      <Typography variant="h3" align="center" mt={4}>
        {blogDetails?.title}
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
          image={`${process.env.NEXT_PUBLIC_API_URL}${blogDetails?.image}`}
          onError={(e) => {
            console.error("Error loading image:", e);
          }}
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails?.content}
      </Typography>
      <List>
        {postIngredients.split(",").map((ingredient, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={ingredient.trim()} />
          </ListItemButton>
        ))}
      </List>

      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        You may also like
      </Typography>
      <Suggestions />
    </Container>
  );
}

export default DetailsPage;

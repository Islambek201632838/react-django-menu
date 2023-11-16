import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const PostsCard = ({ myDirection, title, excerpt, blogHref, image, price }) => {
  return (
    <Box mt={3} mb={5}>
      <Link href={blogHref} sx={{ textDecoration: "none" }}>
        <Card>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: `${myDirection}`,
                md: `${myDirection}`,
              },
              flexDirection: "row",
            }}
          >
            <CardMedia
              component={"img"}
              height="300px"
              image={image}
              alt="burger_image"
              sx={{
                width: "400px",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent sx={{ minHeight: "260px", flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" align="center">
                {title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {excerpt}
              </Typography>
              {/* Styling for Price */}
              <Typography
                variant="h6"
                color="tomato"
                sx={{ marginTop: 2, fontWeight: "bold" }}
              >
                ${price}
              </Typography>

              <CardActions>
                <Button sx={{ color: "tomato" }} size="large">
                  Share
                </Button>
                <Button sx={{ color: "tomato" }} size="large">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostsCard;

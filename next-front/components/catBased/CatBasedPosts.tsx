import { Container, Grid, Box, Stack, CircularProgress, Typography } from "@mui/material";
import PostsCard from "../posts/PostsCard";
import { BlogType } from "@/types";

interface CatBasedPostsProps {
  blog: BlogType[] | [];
  loading: boolean;
  error: string;
}

const CatBasedPosts: React.FC<CatBasedPostsProps> = ({ blog, loading, error}) => {


  return (
    <Container>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        {loading && (
        <Box display="flex" justifyContent="center" my={5}>
          <CircularProgress />
        </Box>
      )}

      <Typography marginTop='10px' textAlign='center' color='red' variant="h5">{error}</Typography>

        {blog.map((post, index) => (
          <Grid item xs key={index}>
            <PostsCard
              title={post.title}
              excerpt={post.excerpt}
              price={post.price}
              image={`${process.env.NEXT_PUBLIC_API_URL}${post.image}`}
              blogHref={`/details/${post.id}`}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>

      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent="center"
        alignItems={"center"}
      >
      </Stack>
      
    </Container>
  );
};

export default CatBasedPosts;

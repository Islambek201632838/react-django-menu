import React from 'react';
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import PostsCard from "./PostsCard";
import { BlogType } from "@/types";

interface PostClientProps {
  blog: BlogType[];
  post: BlogType[];
  blogLength: number;
  currentBlogPage: number;
  handleBlogPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const PostsClient = ({
  blog, 
  post, 
  blogLength, 
  currentBlogPage, 
  handleBlogPageChange
}: PostClientProps) => {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Latest Recipes
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"column"}>
        {blog.map((item) => (
          <Grid item xs key={item.id}>
            <PostsCard
              title={item.title}
              excerpt={item.excerpt}
              image={item.image}
              price={item.price}
              blogHref={`/details/${item.id}`}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} mt={3} mb={3} justifyContent="center" alignItems={"center"}>
        <Pagination count={blogLength} color="primary" page={currentBlogPage} onChange={handleBlogPageChange} />
      </Stack>
      <Typography variant="h4" bgcolor={"black"} color="white" align="center" mt={4} mb={4}>
        Most Popular
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={{ md: "row" }}>
        {post.map((popular) => (
          <Grid item md={6} xs={12} sm={6} key={popular.id}>
            <PostsCard
              title={popular.title}
              excerpt={popular.excerpt}
              image={`${process.env.NEXT_PUBLIC_API_URL}${popular.image}`}
              myDirection={"block"}
              price={popular.price}
              blogHref={`/details/${popular.id}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PostsClient;

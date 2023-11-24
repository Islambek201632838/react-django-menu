import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostsCard from "./PostsCard";
import axios from 'axios';

const Posts = () => {
  const [blog, setBlog] = useState([]);
  const [post, setPost] = useState([]);
  const [blogLength, setBlogLength] = useState(0);
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const fetchData = async (url, setData, page) => {
    try {
      const res = await axios.get(url, {
        params: {
          offset: (page - 1) * itemsPerPage,
          limit: itemsPerPage,
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  const fetchPopData = async (url, setData) => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLength = async (url, setData) => {
    try {
      const res = await axios.get(url);
      setData(res.data['max_pages']);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    const fetchBlogData = async () => {
      fetchData(`${process.env.REACT_APP_API_URL}/api/blogs/`, setBlog, currentBlogPage);
    };
    
    fetchBlogData();
  }, [currentBlogPage]);

  useEffect(() => {
    const fetchPostData = async () => {
      fetchPopData(`${process.env.REACT_APP_API_URL}/api/PopularPostsApiView/`, setPost);
    };
  
    const fetchBlogLength = async () => {
      fetchLength(`${process.env.REACT_APP_API_URL}/api/blogPages/`, setBlogLength);
    };
  
    fetchBlogLength();
    fetchPostData();
  }, []);


  const handleBlogPageChange = (event, value) => {
    setCurrentBlogPage(value);
  };




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
        <Pagination count={blogLength} color={"warning"} page={currentBlogPage} onChange={handleBlogPageChange} />
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
              image={`${process.env.REACT_APP_API_URL}${popular.image}`}
              myDirection={"block"}
              price = {popular.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Posts;

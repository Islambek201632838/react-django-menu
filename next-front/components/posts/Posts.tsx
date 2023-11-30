'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PostsClient from "./PostsClient";
import { BlogType } from "@/types";

const Posts = () => {
  const [blog, setBlog] = useState<BlogType[]>([]);
  const [post, setPost] = useState<BlogType[]>([]);
  const [blogLength, setBlogLength] = useState<number>(0);
  const [currentBlogPage, setCurrentBlogPage] = useState<number>(1);
  const itemsPerPage = 5; // Number of items per page

  const fetchData = async (url: string, setData: React.Dispatch<React.SetStateAction<BlogType[]>>,
                           page: number) => {
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

  const fetchPopData = async (url: string, setData: React.Dispatch<React.SetStateAction<BlogType[]>>) => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLength = async (url: string) => {
    try {
      const res = await axios.get(url);
      setBlogLength(res.data['max_pages']);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/`, setBlog, currentBlogPage);
  }, [currentBlogPage]);

  useEffect(() => {
    fetchPopData(`${process.env.NEXT_PUBLIC_API_URL}/api/PopularPostsApiView/`, setPost);
    fetchLength(`${process.env.NEXT_PUBLIC_API_URL}/api/blogPages/`);
  }, []);

  const handleBlogPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentBlogPage(value);
  };

  return (
    <PostsClient
      blog={blog} post={post} blogLength={blogLength}
      currentBlogPage={currentBlogPage} handleBlogPageChange={handleBlogPageChange}
    />
  );
};

export default Posts;

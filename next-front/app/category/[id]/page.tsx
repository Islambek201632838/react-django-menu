'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import CatBasedPosts from "../../../components/catBased/CatBasedPosts";
import { BlogType } from "@/types";

const Page: React.FC = () => {
  const pathname = usePathname();
  const [blog, setBlog] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {

      const pathSegments = pathname.split('/');
      const id = pathSegments[pathSegments.length - 1];
      setLoading(true);
      setError('');

      if (id) {
        try {
          const res = await axios.get<BlogType[]>(
            `http://127.0.0.1:8000/api/categoryBasedBlogs/${id}`
          );
          if(!res) {
            setLoading(true);
          }
          
          if (Array.isArray(res.data)) {
            setBlog(res.data);
            setLoading(false);
          } else {
            setLoading(false);
            console.error("Fetched data is not an array:", res.data);
            
          }
        } catch (error) {
          console.log(error);
          setError('error fetching data');
        }
      }
    };


      fetchData();
    
  }, [pathname]);

  return (
    <CatBasedPosts blog={blog} loading={loading} error= {error}/>
  );
};

export default Page;

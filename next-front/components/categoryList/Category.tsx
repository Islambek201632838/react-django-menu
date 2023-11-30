'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";
import { CategoryType } from "@/types";

const Category = () => {
  const [cat, setCat] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/category/`
        );
        setCat(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

 

  return (
    <CategoryPage cat = {cat}/>
  );
};

export default Category;

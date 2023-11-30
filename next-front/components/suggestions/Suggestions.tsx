'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { CategoryType } from "@/types";

const Suggestions = () => {
  const [cat, setCat] = useState([]);

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

  // Function to get a random subset of an array
  const getRandomCategories = (arr:CategoryType[], num:number) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };


  // Get 5 random categories
  const randomCategories = getRandomCategories(cat, 5);

  return (
    <SuggestionCard randomCategories = {randomCategories} />
  );
};

export default Suggestions;

'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsPage from "../../../components/detailsBased/DetailsPage";
import { usePathname } from 'next/navigation'; // Only import usePathname
import { BlogType } from "@/types";

const Page: React.FC = () => {
  const [blogDetails, setBlogDetails] = useState<BlogType | null>(null);
  const [postIngredients, setPostIngredients] = useState<string>("");
  const pathname = usePathname(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchData = async () => {

      const pathSegments = pathname.split('/');
      const id = pathSegments[pathSegments.length - 1];
      setError('');

      if (id) {
        try {
          const res = await axios.get<BlogType>(
            `http://127.0.0.1:8000/api/details/${id}`
          );
          if(!res) {
            setLoading(true);
          }
          setLoading(false);
          setBlogDetails(res.data);
          setPostIngredients(res.data.ingredients ?? "");
        } catch (error) {
          console.log(error);
          setError('Error fetching data');
        }
      }
    };

    fetchData();
  }, [pathname]); // Depend on pathname to re-run the effect

  return (
    <DetailsPage blogDetails={blogDetails} 
                 postIngredients={postIngredients} 
                 loading = {loading}
                 error = {error} />
  );
};

export default Page;

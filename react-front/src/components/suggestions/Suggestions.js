import { Box, Stack, styled, Typography, Link } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Suggestions = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/category/`
        );
        setCat(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Function to get a random subset of an array
  const getRandomCategories = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "100px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });

  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });

  // Get 5 random categories
  const randomCategories = getRandomCategories(cat, 5);

  return (
    <Stack
      Container
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ maxWidth: "100%", overflow: "auto" }}
    >
      {randomCategories.map((item) => (
        <Link href={`http://localhost:3000/category/${item.id}`} sx={{ textDecoration: "none" }}>
          <CardBox key={item.id}>
            <StyledCard sx={{ backgroundImage: `url(${item.image})` }} />
            <StyledTypography>{item.name}</StyledTypography>
          </CardBox>
        </Link>
        
      ))}
    </Stack>
  );
};

export default Suggestions;

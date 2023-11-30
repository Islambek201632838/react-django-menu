import React from 'react'
import { Box, Stack, styled, Typography, Link } from "@mui/material";
import { CategoryType } from '@/types';

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

  interface SuggestionCardProps {
    randomCategories: CategoryType[];
  }
  

const SuggestionCard = ({ randomCategories }: SuggestionCardProps) => {
  return (
    <Stack
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ maxWidth: "100%", overflow: "auto" }}
    >
      {randomCategories.map((item, index:number) => (
        <Link key={index} href={`http://localhost:3000/category/${item.id}`} sx={{ textDecoration: "none" }}>
          <CardBox key={item.id}>
            <StyledCard sx={{ backgroundImage: `url(${item.image})` }} />
            <StyledTypography>{item.name}</StyledTypography>
          </CardBox>
        </Link>
        
      ))}
    </Stack>
  )
}

export default SuggestionCard
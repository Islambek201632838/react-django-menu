import React from 'react'
import { Box, Link, Stack, styled, Typography } from "@mui/material";
import { CategoryType } from '@/types';

interface CategoryPageProps {
    cat: CategoryType[];
  }

export const CategoryPage: React.FC<CategoryPageProps> = ({cat}) => {
    const StyledCard = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "100%",
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
    
      return (
        <Stack
          direction="row"
          mt={4}
          spacing={3}
          ml={3}
          sx={{ maxWidth: "100%", overflow: "auto", margin: "50px 0" }}
        >
          {cat.map((category, index:number) => (
            <Link key={index} href={`category/${category.id}`} sx={{ textDecoration: "none" }}>
              <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${category.image})` }} />
                <StyledTypography>{category.name}</StyledTypography>
              </CardBox>
            </Link>
          ))}
        </Stack>
      );
    };
    
    export default CategoryPage;
    
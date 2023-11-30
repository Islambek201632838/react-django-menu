import { Box, Container, Stack } from "@mui/material";
import Hero from "../components/hero/Hero";
import Posts from "../components/posts/Posts";
import Rightbar from "../components/rightbar/Rightbar";
import Navbar from "@/components/navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Container>
        <Stack direction={"row"} spacing={1} mt={3}>
          <Box flex={3}>
            <Posts />
          </Box>
          <Box flex={1} display={{ xs: "none", md: "block" }}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Main;

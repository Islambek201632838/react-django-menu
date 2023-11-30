'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import PostsCard from "../posts/PostsCard";
import { PostType } from "@/types";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: 600,
  minHeight: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PostSearch = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [postSearch, setPostSearch] = React.useState<PostType[]>([]);
  const [lookup, setLookup] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/blogs/`
        );
        setPostSearch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredPosts = postSearch.filter((post) => 
    lookup && post.title.toLowerCase().includes(lookup.toLowerCase())
  );

  return (
    <div>
      <TextField
        sx={{ display: { xs: "none", md: "flex" } }}
        color="warning"
        label="Search Here!"
        variant="standard"
        onClick={() => setOpen(true)}
      />

      <TextField
        sx={{ display: { xs: "flex", md: "none" } }}
        color="warning"
        label="Click Here To Search!"
        variant="standard"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ display: { xs: "none", md: "flex" } }}
            color="warning"
            label="Search Here!"
            variant="standard"
            onChange={(e) => setLookup(e.target.value)}
          />
          <TextField
            sx={{ display: { xs: "flex", md: "none" } }}
            color="warning"
            label="Search Here!"
            variant="standard"
            onChange={(e) => setLookup(e.target.value)}
          />
          {filteredPosts.map((post) => (
            <Grid item xs key={post.id}>
              <PostsCard
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                blogHref={`/details/${post.id}`}
                myDirection={"flex"}
                price={post.price}
              />
            </Grid>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default PostSearch;

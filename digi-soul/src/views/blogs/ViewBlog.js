import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import './blogs.css'
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewBlog = () => {

  const { id } = useParams();
  const [blog, setBlog] = React.useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  React.useEffect(() => {
    axios.get(`http://localhost:3002/api/blog/singleBlog/${id}`).then((res) => {
      setBlog(res.data.data)
    }).catch((err) => {
      alert(err.response.data.message);
    });
  }, [])

  return (
    <>
      <Container sx={{ marginTop: "25px" }}>
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          {blog.Title}
        </Typography>

        <img
          src={`http://localhost:3002/images/${blog.imagePath}`}
          alt=" not available"
          className='blogs-img'
        />

        <hr />

        <Typography variant="body1" gutterBottom>
          {blog.Content}
        </Typography>
      </Container>

      {/* <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            id="comment"
            label="Comment box"
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: "1rem" }}
          >
            Submit
          </Button>
        </form>

        <Typography variant="h5" component="h2" gutterBottom>
          Comments:
        </Typography>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </Container> */}
    </>
  );
};

export default ViewBlog;

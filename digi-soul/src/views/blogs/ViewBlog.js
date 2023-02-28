import React, { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import './blogs.css'

const ViewBlog = () => {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <>
      <Container sx={{ marginTop: "25px" }}>
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          Will AI takeover the world?
        </Typography>

        <img
          src="https://www.priv.gc.ca/media/4847/ai.jpg"
          alt=" not available"
          className='blogs-img'
        />

        <hr />

        <Typography variant="body1" gutterBottom>
          No, AI will not take over the world. AI is a tool created by humans
          and its behavior is determined by how it is programmed and used. While
          AI has the potential to greatly benefit society and improve our lives,
          it is important that its development and deployment are guided by
          ethical and moral considerations. Additionally, there are technical
          and practical limitations to what AI can currently do, and it is
          unlikely that it will surpass human intelligence and agency in the
          near future. Ultimately, the future of AI depends on the choices and
          actions of humans, and we must strive to ensure that it is used for
          the betterment of society.
        </Typography>
      </Container>

      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            id="comment"
            label="Comment box"
            variant="outlined"
            sx={{width: "100%", marginTop: "1rem"}}
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{mt:"1rem"}}
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
      </Container>
    </>
  );
};

export default ViewBlog;

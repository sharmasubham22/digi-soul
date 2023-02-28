import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFF7",
  },
  container: {
    margin: "0 auto",
    maxWidth: "800px",
    textAlign: "center",
    padding: "2rem",
  },
  image: {
    height: "400px",
    width: "400px",
  },
  commentContainer: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  commentBox: {
    width: "100%",
    marginTop: "1rem",
  },
  submitBtn: {
    marginTop: "1rem",
  },
}));

const ViewBlog = () => {
  const classes = useStyles();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h3" component="h1" gutterBottom>
          Will AI takeover the world?
        </Typography>

        <img
          src="https://www.priv.gc.ca/media/4847/ai.jpg"
          alt=" not available"
          className={classes.image}
        />

        <hr />

        <Typography variant="body1" gutterBottom>
          No, AI will not take over the world. AI is a tool created by humans
          and its behavior is determined by how it is programmed and used.
          While AI has the potential to greatly benefit society and improve our
          lives, it is important that its development and deployment are guided
          by ethical and moral considerations. Additionally, there are technical
          and practical limitations to what AI can currently do, and it is
          unlikely that it will surpass human intelligence and agency in the near
          future. Ultimately, the future of AI depends on the choices and actions
          of humans, and we must strive to ensure that it is used for the betterment
          of society.
        </Typography>
      </div>

      <div className={classes.commentContainer}>
        <form onSubmit={handleSubmit} className={classes.container}>
          <TextField
            id="comment"
            label="Comment box"
            variant="outlined"
            className={classes.commentBox}
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submitBtn}
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
      </div>
    </div>
  );
};

export default ViewBlog;

/**
 * @author Amanjot Singh
 **/

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { reviewsApi } from "./services/reviews-api";
import axios from "axios";

const theme = createTheme();

function CreateReview() {
  const [Login, setLogin] = React.useState(localStorage.getItem("login"));
  const [username, setUsername] = React.useState(localStorage.getItem("email"));
  const dataFetchedRef = React.useRef(false);

  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    if (Login == null || Login === "false") {
      setLogin("false");
      localStorage.setItem("login", "false");
      console.log("false called");
      alert("Please login to create an review");
      window.location.href = "/login";
    } else if (Login === "true") {
      localStorage.setItem("login", "true");
      setLogin("true");
      console.log("true called");
    }
    console.log(`login value ${Login}`);
  }, [Login]);

  const [formData, setFormData] = React.useState({
    name: {
      value: "",
      isError: false,
      errorMessage: "Minimum input size 5",
    },
    brief: {
      value: "",
      isError: false,
      errorMessage: "Minimum input size 25",
    },
    imageURL: {
      value: "",
      isError: false,
      errorMessage: "Upload valid image",
    },
    detail: {
      value: "",
      isError: false,
      errorMessage: "",
    },
    youtube: {
      value: "",
      isError: false,
      errorMessage: "Upload valid URL",
    },
  });

  const navigate = useNavigate();

  function handleChange(review) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [review.target.name]: {
        ...formData[review.target.name],
        value: review.target.value,
        isError: false,
      },
    }));
  }

  function validate(review) {
    var isValidationSuccess = true;

    var regexTitle = /(?=.{5,})./;
    var regexDescription = /(?=.{10,})./;

    if (!regexTitle.test(formData.name.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: {
          ...formData.name,
          isError: true,
        },
      }));
    }

    if (!regexDescription.test(formData.brief.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        brief: {
          ...formData.brief,
          isError: true,
        },
      }));
    }

    return isValidationSuccess;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      reviewsApi
        .createReview({
          name: formData.name.value,
          brief: formData.brief.value,
          detail: formData.detail.value,
          imageURL: formData.imageURL.value,
          youtube: "https://www.youtube.com/embed/" + formData.youtube.value,
        })
        .then((res) => {
          if (res.data.success) {
            console.log("Review Created :)", res.data);
            axios.post(
              "https://digi-soul.onrender.com/api/user_details/addreview",
              {
                email: username,
                reviewId: res.data?.review?._doc?._id,
              }
            );
            res.data?.review?._doc?._id
              ? navigate(`/review/${res.data.review._doc._id}`)
              : navigate(`/reviews`);
          }
        })
        .catch((err) => {
          console.log("Cannot create review due to the error-->,", err);
        });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <CalendarMonth />
          </Avatar>
          <Typography component="h1" variant="h5">
            Review
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  value={formData.name.value}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="name"
                  label="Title"
                  helperText={
                    formData.name.isError && formData.name.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="brief"
                  label="About"
                  name="brief"
                  value={formData.brief.value}
                  onChange={handleChange}
                  helperText={
                    formData.brief.isError && formData.brief.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="imageURL"
                  label="Thumbnail URL"
                  name="imageURL"
                  value={formData.imageURL.value}
                  onChange={handleChange}
                  helperText={
                    formData.imageURL.isError && formData.imageURL.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="youtube"
                  label="https://www.youtube.com/embed/"
                  name="youtube"
                  value={formData.youtube.value}
                  onChange={handleChange}
                  helperText={
                    formData.imageURL.isError && formData.imageURL.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  style={{ width: "100%" }}
                  name="detail"
                  value={formData.detail.value}
                  onChange={handleChange}
                  placeholder="Your Review"
                  id="detail"
                  minRows={8}
                  helperText={
                    formData.detail.isError && formData.detail.errorMessage
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Review
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateReview;

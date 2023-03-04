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
import { useFilePicker } from "use-file-picker";
import BasicDatePicker from "../../components/BasicDatePicker";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function CreateEvent() {
  const [formData, setFormData] = React.useState({
    eventTitle: {
      value: "",
      isError: false,
      errorMessage: "Minimum input size 5",
    },
    shortDetail: {
      value: "",
      isError: false,
      errorMessage: "Minimum input size 25",
    },
    thumbnail: {
      value: "",
      isError: false,
      errorMessage: "Upload valid image",
    },
    longDetail: {
      value: "",
      isError: false,
      errorMessage: "",
    },
  });

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    limitFilesConfig: { max: 1 },
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: {
        ...formData[event.target.name],
        value: event.target.value,
        isError: false,
      },
    }));
  }

  function validate(event) {
    var isValidationSuccess = true;

    var regexTitle = /(?=.{5,})./;
    var regexDescription = /(?=.{25,})./;

    if (!regexTitle.test(formData.eventTitle.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        eventTitle: {
          ...formData.eventTitle,
          isError: true,
        },
      }));
    }

    if (!regexDescription.test(formData.shortDetail.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        shortDetail: {
          ...formData.shortDetail,
          isError: true,
        },
      }));
    }

    return isValidationSuccess;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      navigate("/events/all");
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
            Event Details
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
                  name="eventTitle"
                  value={formData.eventTitle.value}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="eventTitle"
                  label="Event Title"
                  helperText={
                    formData.eventTitle.isError &&
                    formData.eventTitle.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="shortDetail"
                  label="Event Description"
                  name="shortDetail"
                  value={formData.shortDetail.value}
                  onChange={handleChange}
                  helperText={
                    formData.shortDetail.isError &&
                    formData.shortDetail.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={openFileSelector}
                  sx={{ mt: 1, mb: 2 }}
                >
                  Select Thumbnail
                </Button>
              </Grid>
              <Grid item xs={6} height="100%">
                <BasicDatePicker />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  style={{ width: "100%" }}
                  name="longDetail"
                  value={formData.longDetail.value}
                  onChange={handleChange}
                  placeholder="Detailed Description"
                  id="longDetail"
                  minRows={10}
                  helperText={
                    formData.longDetail.isError &&
                    formData.longDetail.errorMessage
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
              Create Event
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateEvent;

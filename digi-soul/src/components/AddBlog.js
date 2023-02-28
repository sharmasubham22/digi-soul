import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FormControl, FormGroup, Input, InputLabel, TextField } from '@mui/material';

export default function ColorTextFields() {
  const handleFileUpload = (event) => {
    console.log(event.target.files[0]); // do something with the uploaded file
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#FFFFF7" }}>
        <div>
          <>
            <Container maxWidth="xl">
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
              </Grid>
            </Container>
          </>
          <br />
          <NavLink to="/addblog" role="button" class="btn btn-secondary btn-block mx-4" style={{float: 'right'}}>
            Add Blog
          </NavLink>
        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <h1>Add Blog</h1>
          <FormGroup>
            <FormControl sx={{ marginBottom: '1rem' }}>
              <InputLabel>Title</InputLabel>
              <Input />
            </FormControl>

            <FormControl sx={{ marginBottom: '1rem' }}>
              <InputLabel>Content</InputLabel>
              <Input />
            </FormControl>

            <FormControl sx={{ marginBottom: '1rem' }}>
              {/* <InputLabel>Add Image</InputLabel> */}
              <Input type="file" onChange={handleFileUpload} />
            </FormControl>

            <Button variant='contained'>Submit</Button>
          </FormGroup>
        </Container>
      </div>
    </React.Fragment>
  );
}

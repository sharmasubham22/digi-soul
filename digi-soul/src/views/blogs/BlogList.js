import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function BlogList() {
  return (
    <Container sx={{mt:4}}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item></Grid>
        </Grid>
      </Container>
      <Button href="/addblog" variant="contained" style={{ float:'right' }}>
        Add Blog
      </Button>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://www.priv.gc.ca/media/4847/ai.jpg"
                alt="Will AI takeover the world?"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Will AI takeover the world?
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/blog1">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://www.priv.gc.ca/media/5716/synthetic-data.png"
                alt="The future of AI"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The future of AI
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/secondblog">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ Container>
  );
};

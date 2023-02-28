import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EventCard(props) {
  const { id, name, details, imgurl } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Event Thumbnail"
        height="160"
        image={imgurl}
        sx={{objectFit: "contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
        <Button size="small" href={`/event/${id}`}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}

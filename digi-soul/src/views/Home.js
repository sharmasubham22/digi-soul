import CarouselComponent from "../components/Carousel";
import Grid from "@mui/material/Grid";
import ds from '../p-images/ds.gif'
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function Home() {
  return (
    <>
      <CarouselComponent />

      <Typography
        gutterBottom
        variant="h4"
        textAlign="center"
        fontFamily="Lucida grande"
        fontWeight="bold"
        component="div"
      >
        What is DIGI SOUL?
      </Typography>
      <Typography
        gutterBottom
        variant="text"
        fontSize="18px"
        textAlign="center"
        component="div"
      >
        Digi Soul, it came from all those people who's soul lies in the Digital
        world.
      </Typography>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <img src={ds} alt="ds-img" width="750px" />
      </Grid>
      <Box sx={{ bgcolor: "#03989E", padding: "100px" }}>
        <Typography
          gutterBottom
          variant="h4"
          textAlign="center"
          fontFamily="Lucida grande"
          fontWeight="bold"
          component="div"
        >
          Our Aim
        </Typography>
        <Typography
          gutterBottom
          variant="text"
          fontSize="18px"
          textAlign="center"
          component="div"
        >
          To build the tech community stronger and stronger by providing a
          platform where all tech related needs are fulfilled.
        </Typography>
      </Box>
    </>
  );
}
export default Home;

import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import './productDetails.css';
import SpecsTable from "../components/SpecsTable";

export default function ProductDetails(){
    const { id } = useParams();
    const currentProduct = productsData
      .filter((event) => event.productId === parseInt(id))
      .at(0);
    return (
      <Container sx={{ paddingTop: "50px" }}>
        <Box className="product-details">

            <img
              src={currentProduct.productImage}
              alt="product-img"
              className="product-image"
            />
          
          
          <Box className="details-content">
            <Typography gutterBottom variant="text" component="div" className="product-name">
              {currentProduct.productName}
            </Typography>
            <Box className="buy">
              <Typography gutterBottom variant="h5" component="div">
                Seller
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ m: "auto" }}
              >
                {currentProduct.productPrice}
              </Typography>
              <Button variant="contained">Buy</Button>
            </Box>
            <Typography variant="body1" color="text.secondary">
              {currentProduct.productDetails}
            </Typography>
            <SpecsTable/>
          </Box>
        </Box>
      </Container>
    );
}
import { Container } from "@mui/material";
import React from "react";
import ProductTabs from "../components/ProductTabs";
import ProductCard from "../components/ProductCard";
import productsData from "../data/smartphones.json";
import "./products.css";
import CarouselComponent from "../components/Carousel";

function Smartphones() {
  console.log("Upcoming Events rendered!");
  const products = productsData.map((e) => {
    return (
      <ProductCard
        key={e.productId}
        id={e.productId}
        category={e.productCategory}
        name={e.productName}
        imgurl={e.productImage}
        price={e.productPrice}
      />
    );
  });

  return (
    <main sx={{ marginTop: "100px" }}>
      <CarouselComponent />
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <ProductTabs />
      </Container>
      <Container
        sx={{
          marginTop: "50px",
          display: "grid",
          gap: "50px 50px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {products}
      </Container>
    </main>
  );
}

export default Smartphones;

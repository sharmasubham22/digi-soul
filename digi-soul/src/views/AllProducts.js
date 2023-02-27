import {Container } from "@mui/material";
import React from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import ProductTabs from "../components/ProductTabs";
import './products.css';
import CarouselComponent from "../components/Carousel";

function AllProducts() {
  console.log("All Events Rendered!");
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
    <main>
      <CarouselComponent />
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <ProductTabs />
      </Container>
      <Container
        className="p-cards"
        sx={{
          zIndex: 1,
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

export default AllProducts;

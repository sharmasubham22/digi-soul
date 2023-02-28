import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useLocation } from "react-router-dom";
import "./tabs.css"

export default function ProductTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(
    location.pathname.includes("all") ? 0 : 1
  );

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs onChange={handleChange} value={value} centered>
        <Tab label="All" href="/product/all" />
        <Tab label="Smart Phones" href="/product/phones" />
        <Tab label="Laptops" href="/product/phones" />
        <Tab label="Cameras" href="/product/phones" />
        <Tab label="Gaming Consoles" href="/product/phones" />
        <Tab label="Headphones" href="/product/phones" />
        <Tab label="Televisions" href="/product/phones" />
        <Tab label="Desktops" href="/product/phones" />
        <Tab label="Accessories" href="/product/phones" />
      </Tabs>
    </Box>
  );
}

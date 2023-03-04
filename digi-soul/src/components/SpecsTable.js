import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import productsData from "../data/products.json";
import { useParams } from "react-router-dom";
import '../views/products/productDetails.css';

export default function SpecsTable() {
    
    const { id } = useParams();
    const currentProduct = productsData
      .filter((event) => event.productId === parseInt(id))
      .at(0);

      function createData(specification, provided) {
        return { specification, provided };
      }

      const rows = [
        createData("OS", currentProduct.productOS),
        createData("Storage Capacity", currentProduct.productStorage),
        createData("Camera", currentProduct.productCameras),
        createData("RAM", currentProduct.productRAM),
        createData("Product Dimensions", currentProduct.productDimensions),
      ];
  return (
    <TableContainer component={Paper} sx={{mt:5 }}>
      <Table className="specs-table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Specification</TableCell>
            <TableCell align="right">Provided</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.specification}
              </TableCell>
              <TableCell align="right">{row.provided}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

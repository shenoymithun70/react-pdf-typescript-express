import express from "express";
import MyDocument from "./mydocument";
import React from "react";
import ReactPDF from "@react-pdf/renderer";

const app = express();

ReactPDF.renderToFile(<MyDocument />, `${__dirname}/exampleQuickChart2.pdf`);

app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});

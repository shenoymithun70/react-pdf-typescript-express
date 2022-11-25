import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    // backgroundColor: "#E4E4E4",
    alignItems: "center",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    // height: "100vh",
    alignItems: "center",
    alignContent: "center",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page>
      <Text>Sample File</Text>
    </Page>
  </Document>
);

export default MyDocument;

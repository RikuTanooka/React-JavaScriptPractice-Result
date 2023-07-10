import React from "react";
import StarRating from "./StarRationg";



export default function App() {
  return (
  <StarRating
          style={{backgroundColor: "lightblue" }}
          onDoubleClick={e => alert("double click")}
          />
  );
}
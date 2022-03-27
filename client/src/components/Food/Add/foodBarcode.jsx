import React from "react";
import "./barcode.scss";
import Bardcodetextfield from "./barcodeTextField";

let _scannerIsRunning = false;

export default function FoodBarCode(props) {  
  const { foodName, setFoodName } = props;

  return (
    <>
      <div id="scanner-container" />
      <div>
        <p style={{ display: "inline-block" }}>Barcode: </p>
        <Bardcodetextfield style={{ display: "inline-block" }} foodName={foodName} setFoodName={setFoodName} />
      </div>
    </>
  );

}


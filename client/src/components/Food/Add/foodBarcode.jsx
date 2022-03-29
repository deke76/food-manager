import React from "react";
import "./barcode.scss";
import Bardcodetextfield from "./barcodeTextField";

let _scannerIsRunning = false;

export default function FoodBarCode(props) {  
  const { foodName, setFoodName } = props;

  return (
      <div className='scanner-add'>
        <h1>Scan a UPC</h1>
        <Bardcodetextfield foodName={foodName} setFoodName={setFoodName} />
      </div>
  );

}


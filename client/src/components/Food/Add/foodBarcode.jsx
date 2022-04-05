import React from "react";
import "./barcode.scss";
import Bardcodetextfield from "./barcodeTextField";

export default function FoodBarCode(props) {  
  const { foodName, setFoodName, setShow } = props;

  return (
      <div className='scanner-add'>
        <h1>Scan a UPC</h1>
        <Bardcodetextfield foodName={foodName} setFoodName={setFoodName} setShow={setShow}/>
      </div>
  );

}


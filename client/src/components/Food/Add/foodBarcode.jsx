import React from "react";
import Quagga from "quagga"; // ES6
import "./barcode.scss";
import Bardcodetextfield from "./barcodeTextField";

let _scannerIsRunning = false;

class FoodBarCode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="scanner-container" />
        <div>
          <p style={{ display: "inline-block" }}>Barcode: </p>
          <Bardcodetextfield style={{ display: "inline-block" }} />
        </div>
      </>
    );
  }
}

export default FoodBarCode;

// import modules
import React, { useEffect, useState } from "react";
import {useNavigate, Link} from "react-router-dom"
import Quagga from "quagga"; // ES6

// import React comnponents
import Button from "../../buttons/actions/Button";

// import style sheets
import "./barcode.scss";

let _scannerIsRunning = false;

export default function BarcodeTextField(props) {
  // let history = useNavigate();
  const {setShow} = props

  const [scannerIsRunning, setScannerIsRunning] = useState(false);

  const startScanner = () => {
    
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector(".scanner-add"),
          constraints: {
            width: 480,
            height: 320,
            facingMode: "environment"
          }
        },
        decoder: {
          readers: [
            // "code_128_reader",
            // "ean_reader",
            // "ean_8_reader",
            // "code_39_reader",
            // "code_39_vin_reader",
            // "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            // "i2of5_reader"
          ],
          debug: {
            showCanvas: true,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: false,
              showTransformedBox: false,
              showBB: false
            }
          }
        }
      },
      function(err) {
        if (err) {
          alert("You need a camera to scan barcodes.");
          console.log(err);
          document.querySelector(".scanner-add").innerHTML = "";
  
          return;
        }
  
        console.log("Initialization finished. Ready to start");
        Quagga.start();
  
        // Set flag to is running
        setScannerIsRunning(true);
      }
    );
  
    Quagga.onProcessed(function(result) {
      let drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;
  
      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            // eslint-disable-next-line
            parseInt(drawingCanvas.getAttribute("width")),
            // eslint-disable-next-line
            parseInt(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }
  
        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }
  
        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });
  
    Quagga.onDetected(function(result) {
      Quagga.stop();
      console.log("result.codeResult.code", result.codeResult.code);
      document.querySelector("#text-input").value = result.codeResult.code;
      // Send result to the server
      submitBarcode(result.codeResult.code);
      // document.querySelector(".scanner-add").innerHTML = "";
      setShow(false);
      console.log(
        "Barcode detected and processed : [" + result.codeResult.code + "]",
        result
      );
    });
  }
  
  const handleClick = () => {
    if (scannerIsRunning) {
      Quagga.stop();
    } else {
      startScanner();
    }
  }

  const submitBarcode = (barcode) => {
    console.log("Submit barcode");
    fetch(`http://localhost:3000/foods/barcode/${barcode}`)
    .then(response => response.json())
    .then((data) => {
      if (data.status == 0) alert("not detected")
      else props.setFoodName(data.product.product_name) // data.title
    })
    setShow(false);
  }


  const handleFileSelect =(evt) => {
    let files = evt.target.files; // FileList object

    let tmpImgURL = URL.createObjectURL(files[0]);

    Quagga.decodeSingle(
      {
        src: tmpImgURL,
        numOfWorkers: 0, // Needs to be 0 when used within node
        locate: true,
        inputStream: {
          size: 800 // restrict input-size to be 800px in width (long-side)
        },
        decoder: {
          readers: [
            // "code_128_reader",
            // "ean_reader",
            // "ean_8_reader",
            // "code_39_reader",
            // "code_39_vin_reader",
            // "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            // "i2of5_reader"
          ]
        }
      },
      function(result) {
        console.log(result);
        if (result) {
          if (result.codeResult != null) {
            document.querySelector("#text-input").value =
              result.codeResult.code;
            console.log("result", result.codeResult.code);
          } else {
            alert("not detected");
            document.querySelector("#text-input").value = "";
          }
        } else {
          alert("not detected");
          document.querySelector("#text-input").value = "";
        }
      }
    );
  }

  useEffect(() => {
    document
      .querySelector("#inputId")
      .addEventListener("change", handleFileSelect, false);
  }, [])


  const hiddenFileInput = React.useRef(null);
  const uploadClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <div className='group'>
        <input type="text" id='text-input'/>
        <Button onClick={handleClick} icon="camera"/>
        <Button onClick={uploadClick} icon="file"  />
        <input id="inputId" type="file" accept="image/*" ref={hiddenFileInput}  style={{display:'none'}}/>
        <Button onClick={ () => submitBarcode(document.querySelector("#text-input").value)} icon="check" />
       
      </div>
     
    </>
  );
}



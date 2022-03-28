import React from "react";
import Quagga from "quagga"; // ES6
import './barcode.scss';
import Button from "../../buttons/actions/Button";

let _scannerIsRunning = false;

class BarcodeTextField extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
  }

  handleClick() {
    if (_scannerIsRunning) {
      Quagga.stop();
    } else {
      this.startScanner();
    }
  }

  startScanner() {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
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
            showPatches: true,
            showFoundPatches: true,
            showSkeleton: true,
            showLabels: true,
            showPatchLabels: true,
            showRemainingPatchLabels: true,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true
            }
          }
        }
      },
      function(err) {
        if (err) {
          alert("You need a camera to scan barcodes.");
          console.log(err);
          document.querySelector("#scanner-container").innerHTML = "";

          return;
        }

        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        //_scannerIsRunning = true;
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
      document.querySelector("#text-input").value = result.codeResult.code;
      document.querySelector("#scanner-container").innerHTML = "";
      console.log(
        "Barcode detected and processed : [" + result.codeResult.code + "]",
        result
      );
    });
  }

  handleFileSelect(evt) {
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

  componentDidMount() {
    document
      .querySelector("#inputId")
      .addEventListener("change", this.handleFileSelect, false);
  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <input type="text" id="text-input" />
        <Button onClick={this.handleClick} icon={"camera"} text={"scan"}/>
        <input id="inputId" type="file" accept="image/*" />
      </div>
    );
  }
}

// return defaultFood ? (
//   <div className="food-add">
//     <h1>{newFood.name}</h1>
//     <div className="food-add__input">
//       <input
//         type="text"
//         value={searchValue}
//         onChange={(e) => {
//           setSelectedSuggestion(null);
//           setSearchValue(e.target.value);
//         }}
//         onFocus={() => setShowSuggestions(true)}
//         onBlur={() => setShowSuggestions(false)}
//         placeholder="Search for food..."
//       /> 
//       <a href='/foods/barcode'>
//         <Button onClick={() => setShowBarcode(true)} icon="barcode"/>
//       </a>
//     </div>
//     {showSuggestions &&
//       (suggestions.length > 0 ? (
//         <SelectOneDropdown
//           selected={selectedSuggestion}
//           setSelected={setSelectedSuggestion}
//           choices={suggestions.map((suggestion) => suggestion.name)}
//           onClickCallback={() => setShowSuggestions(false)}
//         />
//       ) : (
//         <div>No Suggestions</div>
//       ))}
//     <div className="food-add__details">
//       <div className="group">
//         <label>Date Purchased</label>
//         <input
//           type="date"
//           value={newFood.date_purchased}
//           onChange={(event) =>
//             setNewFood((prev) => ({
//               ...prev,
//               date_purchased: event.target.value,
//             }))
//           }
//         />
//       </div>
//       <div className="group">
//         <label>Date Expires</label>
//         <input
//           type="date"
//           value={newFood.date_expires}
//           onChange={(event) =>
//             setNewFood((prev) => ({
//               ...prev,
//               date_expires: event.target.value,
//             }))
//           }
//         />
//       </div>
//       <div className="group">
//         <label>Quantity</label>
//         <div className="group">
//           <Counter
//             value={foodQtyNum}
//             setValue={setFoodQtyNum}
//             minValue={0}
//             maxValue={100}
//           />
//           <div onClick={() => setShowFoodQty((prev) => !prev)}>
//             {foodUnitOptions[foodQtyUnit]}
//           </div>
//         </div>
//       </div>
//       {showFoodQty && (
//         <SelectOneDropdown
//           selected={foodQtyUnit}
//           setSelected={setFoodQtyUnit}
//           choices={foodUnitOptions.map((foodUnitOption) => foodUnitOption)}
//           onClickCallback={() => setShowFoodQty(false)}
//         />
//       )}
//     </div>
//     <div className="group">
//       <button>SAVE</button>
//     </div>
//   </div>
// ) : (
//   <div>Error: Could not read data</div>
// );
// }


export default BarcodeTextField;
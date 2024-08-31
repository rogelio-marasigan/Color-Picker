//initialize whole page
window.onload = function () {
    initColorPicker();
};


function initColorPicker (){
    let colorBox = document.getElementById("color-box") //document an object is globally defined in browser
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb, colorPickers); //call setColorPickerEventListener function to change color
}

function setColorPickerEventListeners(element, colors, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = rgb.red.value;
            let green = rgb.green.value;
            let blue = rgb.blue.value;
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue)
        });
    }

}

function setElementBGColor(bgElement, red, green, blue) {
    let rgbVal = [red, green, blue].join(',')//setting value , background color in css, a string needs to pass string
    bgElement.style.backgroundColor = "rgb(" + rgbVal +")";
}

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innertext = red;
    redVal.innerText = green;
    greenVal.innertext = blue;
}



// function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
//     let pickerLen = pickerElements.length
//     for (let i = 0; i < pickerLen; i++) {
//         pickerElements[i].addEventListener('change', () => {
//             console.log("Red value: ", rgb.red.value);
//             let red = rgb.red.value;
//             let green = rgb.green.value;
//             let blue = rgb.blue.value;
//             setBoxBGColor(colorBox, red, green, blue);
//             setDisplayValues(red, green, blue)
//         )};
//     }
// }


// function setBoxBGColor(colorBox, red, green, blue) {
//     rgbVal = [red, green, blue].join(',');
//     colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
// }
//
// function setDisplayValues(red, green, blue) {
//     let redVal = document.getElementById("redVal");
//     let greenVal = document.getElementById("greenVal");
//     let blueVal = document.getElementById("blueVal");
//
//     redVal.innerText = red;
//     greenVal.innerText = green;
//     blueVal.innerText = blue;
// }
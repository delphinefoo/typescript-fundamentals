//TODO: Implement hexToRgb
export function hexToRgb(hex: String) : {r: number, g: number, b: number} {
    if (hex.length === 3) {
        let rVal = hex[0];
        let gVal = hex[1];
        let bVal = hex[2];
        return hexToRgb(`${rVal}${rVal}${gVal}${gVal}${bVal}${bVal}`);
    }

    let [r,g,b] = [0,2,4]
        .map(offset => hex.substring(offset,offset + 2)) // ['ff','00','00]
        .map(hexString => parseInt(hexString,16)); // [255,0,0]
    return {r,g,b};
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
    let redVal = convertZeroRgbValue(preventIncorrectRgbValue(r).toString(16));
    let greenVal = convertZeroRgbValue(preventIncorrectRgbValue(g).toString(16));
    let blueVal = convertZeroRgbValue(preventIncorrectRgbValue(b).toString(16));
    let result= redVal + greenVal + blueVal;
    return result;
}

function convertZeroRgbValue(colorValue: string): string {
    if (colorValue=== '0') colorValue = '00';
    return colorValue;
}

function preventIncorrectRgbValue(colorValue: number): number {
    if (colorValue > 255) {
        colorValue = 255;
    } else if (colorValue < 0) {
        colorValue = 0;
    }
    return colorValue;
}
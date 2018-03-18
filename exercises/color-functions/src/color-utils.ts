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
    return [r,g,b]
        .map(colorVal => colorVal>255 ? 255 : colorVal<0 ? 0 : colorVal)
        .map(hexChannel => hexChannel.toString(16))
        .map(decChannel => decChannel.length === 1 ? `${decChannel}${decChannel}` : decChannel)
        .join('');
}
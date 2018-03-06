// https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
export default function hexToRGBA(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16) || "0",
        g = parseInt(hex.slice(3, 5), 16) || "0",
        b = parseInt(hex.slice(5, 7), 16) || "0";

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}
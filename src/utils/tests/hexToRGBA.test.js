import { hexToRGBA } from "../";

describe("Converts Hex to RGBA",() => {

    it("#000000 > rgb(0, 0, 0)", () => {
        expect(hexToRGBA("#000000")).toBe("rgb(0, 0, 0)");
    });

    it("#000000,1 > rgba(0, 0, 0, 1)", () => {
        expect(hexToRGBA("#000000",1)).toBe("rgba(0, 0, 0, 1)");
    });

    it("#ff0000,.5 > rgba(255, 0, 0, 0.5)", () => {
        expect(hexToRGBA("#ff0000",.5)).toBe("rgba(255, 0, 0, 0.5)");
    });

    it("#000066,0.2 > rgba(0, 0, 102, 0.2)", () => {
        expect(hexToRGBA("#000066",0.2)).toBe("rgba(0, 0, 102, 0.2)");
    });

});
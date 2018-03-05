import { mountColors } from "../";

describe("mountColors",() => {

    it("with undefined availableColors",() => {
        expect(mountColors()).toMatchSnapshot();
    });

    it("with 2 availableColors",() => {

        const availableColors = [1,2]
        expect(mountColors(availableColors)).toMatchSnapshot();
    });
});

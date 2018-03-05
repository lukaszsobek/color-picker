import ColorPickerModal from "../";

describe("ColorPickerModal", () => {

    it("returns null if !isModalVisible",() => {

        const props = {
            isModalVisible: false
        }
        expect(ColorPickerModal(props)).toBe(null);
    });

    it("displays 0 items with isModalVisible",() => {

        const props = {
            isModalVisible: true,
            suggestedColors: []
        }
        expect(ColorPickerModal(props)).toEqual([]);
    });

    it("displays 2 items with isModalVisible",() => {

        const props = {
            isModalVisible: true,
            suggestedColors: [1,2]
        }
        expect(ColorPickerModal(props)).toMatchSnapshot();
    });
});
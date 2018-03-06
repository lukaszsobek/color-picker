import ColorPickerModal from "../";

describe("ColorPickerModal", () => {

    it("returns null if !isModalVisible",() => {

        const props = {
            isModalVisible: false
        }
        expect(ColorPickerModal(props)).toMatchSnapshot();
    });

    it("displays `loading...` message if data not loaded",() => {

        const props = {
            isModalVisible: true,
            dataLoadedState: "loading"
        }
        expect(ColorPickerModal(props)).toMatchSnapshot();
    });

    it("displays `no matches` with 0 items",() => {

        const props = {
            isModalVisible: true,
            suggestedColors: []
        }
        expect(ColorPickerModal(props)).toMatchSnapshot();
    });

    it("displays 2 items",() => {

        const props = {
            isModalVisible: true,
            suggestedColors: [1,2]
        }
        expect(ColorPickerModal(props)).toMatchSnapshot();
    });
});
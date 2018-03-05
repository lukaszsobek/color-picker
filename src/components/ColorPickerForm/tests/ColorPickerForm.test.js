import ColorPickerForm from "../";

describe("ColorPickerForm", () => {
    it("returns a working form",() => {

        const props = {
            inputValue: "",
            onChange: "onChange",
            onSubmit: "onSubmit"
        }
    
        expect(ColorPickerForm(props)).toMatchSnapshot("");
    
    });
    
    it("returns a form with undefined values",() => {
    
        const props = "";
    
        expect(ColorPickerForm(props)).toMatchSnapshot("");
    
    });
});

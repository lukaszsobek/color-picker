import { setDataLoadedState } from "../";

describe("Set loading state of data",() => {

    it("is `loading` by default",() => {
        expect(setDataLoadedState()).toMatchSnapshot();
    });

    it("is `blah` when set to blah",() => {
        expect(setDataLoadedState("blah")).toMatchSnapshot();
    });    
})
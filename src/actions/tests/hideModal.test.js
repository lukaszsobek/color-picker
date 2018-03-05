import { hideModal } from "../";

it("Hides modal",() => {
    expect(hideModal()).toMatchSnapshot();
});
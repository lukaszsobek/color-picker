import { showModal } from "../";

it("Shows modal",() => {
    expect(showModal()).toMatchSnapshot();
});
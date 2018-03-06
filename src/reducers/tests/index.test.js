import rootReducer from "../";

describe("rootReducer produces correct output for",() => {

    // testState declared in `describe` does not reset
    // for individual tests inside scope
    const testState = {
        availableColors:[],
        isModalVisible: false,
        dataLoadedState: "loading"
    }

    it("default state",() => {
        const action = {
            type: "somethingNotThere"
        }
        expect(rootReducer(testState,action)).toEqual(testState);
    });

    it("SHOW_MODAL",() => {
        const action = {
            type: "SHOW_MODAL"
        }
        expect(rootReducer(testState,action)).toHaveProperty("isModalVisible", true);
    });

    it("HIDE_MODAL",() => {
        const action = {
            type: "HIDE_MODAL"
        }
        expect(rootReducer(testState,action)).toHaveProperty("isModalVisible", false);
    });

    it("MOUNT_COLORS",() => {

        const colors = [1,2];
        const action = {
            type: "MOUNT_COLORS",
            availableColors: colors
        }
        expect(rootReducer(testState,action)).toHaveProperty("availableColors", colors);
    });   

    it("SET_DATA_LOADED_STATE",() => {

        const loadState = "testing";
        const action = {
            type: "SET_DATA_LOADED_STATE",
            loadState
        }
        expect(rootReducer(testState,action)).toHaveProperty("dataLoadedState", loadState);
    });
});
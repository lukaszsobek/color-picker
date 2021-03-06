import { SET_DATA_LOADED_STATE } from "../constants";

const setDataLoadedState = (loadedState = "loading") => ({
    type: SET_DATA_LOADED_STATE,
    loadState: loadedState
});

export default setDataLoadedState;
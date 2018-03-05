import {
    SHOW_MODAL,
    HIDE_MODAL,
    MOUNT_COLORS,
    SET_DATA_LOADED_STATE
} from "../constants";

const initialState = {
    availableColors:[],
    isModalVisible: false,
    dataLoadedState: "loading"
}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        case SHOW_MODAL: 
            return {
                ...state,
                isModalVisible: true
            }

        case HIDE_MODAL:
            return {
                ...state,
                isModalVisible: false
            }

        case MOUNT_COLORS:
            return {
                ...state,
                availableColors: action.availableColors
            }

        case SET_DATA_LOADED_STATE: 
            return {
                ...state,
                dataLoadedState: action.loadState
            }

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;
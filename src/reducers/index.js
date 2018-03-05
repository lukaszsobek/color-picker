import {
    SHOW_MODAL,
    HIDE_MODAL,
    MOUNT_COLORS,
    SET_DATA_IS_LOADED
} from "../constants";

const initialState = {
    availableColors:[],
    isModalVisible: false,
    isDataLoaded: false
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

        case SET_DATA_IS_LOADED: 
            return {
                ...state,
                isDataLoaded: true
            }

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;
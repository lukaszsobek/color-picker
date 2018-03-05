import availableColors from "./temp";
import { SHOW_MODAL, HIDE_MODAL } from "../constants";

const initialState = {
    availableColors,
    isModalVisible: false 
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

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;
import { HIDE_MODAL } from "../constants";

const hideModal = () => ({
    type: HIDE_MODAL,
    isModalVisible: false
});

export default hideModal;
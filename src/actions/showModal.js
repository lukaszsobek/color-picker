import { SHOW_MODAL } from "../constants";

const showModal = () => ({
    type: SHOW_MODAL,
    isModalVisible: true
});

export default showModal;
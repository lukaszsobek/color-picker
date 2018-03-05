import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/App.css';

import { hideModal, showModal } from "../actions";

import ColorPickerForm from "./ColorPickerForm";
import ColorPickerModal from "./ColorPickerModal";

class App extends Component {

  onSubmit(e) {
    const { hideModal } = this.props;

    e.preventDefault();
    e.target.form_input.value = ""
    hideModal();

    // change background color based on choice
  }



  onChange(e) {
    const { showModal, hideModal } = this.props;
    const inputValue = e.target.value;

    if(inputValue.length > 1) {
      showModal();
    } else {
      hideModal();
    }

    // pass result of matching to ColorPickerModal
  }

  render() {
    const { isModalVisible } = this.props;
    return (
      <div className="color-picker">
        <ColorPickerForm
          onChange={(e) => this.onChange(e)}
          onSubmit={(e) => this.onSubmit(e)}
        />
        <ColorPickerModal
          isModalVisible={isModalVisible}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    availableChoices: state.availableChoices,
    isModalVisible: state.isModalVisible
  }
};

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);

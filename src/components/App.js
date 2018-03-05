import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/App.css';

import { hideModal, showModal } from "../actions";

import ColorPickerForm from "./ColorPickerForm";
import ColorPickerModal from "./ColorPickerModal";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { filteredResults: [] }
  }

  onSubmit(e) {
    const { hideModal } = this.props;

    e.preventDefault();
    e.target.form_input.value = ""
    hideModal();

    // change background color based on choice
  }

  onChange(e) {
    const { showModal, hideModal, availableColors } = this.props;
    const inputValue = e.target.value;

    if(inputValue.length > 1) {

      const filteredResults = availableColors.filter(
        (color) => color.name.indexOf(inputValue) !== -1
      );
      this.setState(() => ({ filteredResults }));
      showModal();

    } else {
      hideModal();
    }
  }

  render() {
    const { isModalVisible } = this.props;

    return (
      <div className="color-picker">
        <ColorPickerForm
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
        />
        <ColorPickerModal
          isModalVisible={isModalVisible}
          suggestedColors={this.state.filteredResults}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  availableColors: state.availableColors,
  isModalVisible: state.isModalVisible
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);

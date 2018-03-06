import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";

import '../styles/App.css';

import { hideModal, showModal, mountColors, setDataLoadedState } from "../actions";
import { hexToRGBA } from "../utils";

import ColorPickerForm from "./ColorPickerForm";
import ColorPickerModal from "./ColorPickerModal";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredResults: [],
      inputValue: ""
    }

    const { mountColors, setDataLoadedState } = this.props;
    axios.get("http://www.mocky.io/v2/5a37a7403200000f10eb6a2d?mocky-delay=5s")
      .then(res => {
        const { inputValue } = this.state;
        mountColors(res.data);
        setDataLoadedState("loaded");
        this.setState(() => ({
          filteredResults: this.getFilteredResults(inputValue)
        }));
      })
      .catch(err => {
        mountColors([]);
        setDataLoadedState("error");
      })
  }

  onSubmit(e) {
    const { hideModal, availableColors } = this.props;
    e.preventDefault();

    const selectedColor = availableColors.filter(
      color => color.name === e.target.form_input.value
    )[0] || "#fff";

    const formattedColor = hexToRGBA(`#${selectedColor.hex}`, 0.5);

    const documentBody = document.querySelector("body");
    documentBody.style.backgroundColor = formattedColor;
    
    e.target.form_input.value = ""
    hideModal();
  }

  getFilteredResults(inputValue) {
    const { availableColors } = this.props;

    return availableColors.filter(
      color => color.name.indexOf(inputValue) !== -1
    );
  }

  onChange(e) {
    const { showModal, hideModal } = this.props;
    const inputValue = e.target.value;

    this.setState(() => ({
      filteredResults: this.getFilteredResults(inputValue),
      inputValue
    }));    

    if(inputValue.length < 2) {
      hideModal();
    } else {
      showModal();
    }
  }

  getClickedColor(colorName) {
    this.props.hideModal();
    this.setState(() => ({ inputValue: colorName }))
  }

  render() {
    const { isModalVisible, dataLoadedState } = this.props;
    const { inputValue, filteredResults} = this.state;

    return (
      <div className="color-picker">
        <h1>Enter a color</h1>
        <ColorPickerForm
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
          inputValue={inputValue}
        />
        <ColorPickerModal
          isModalVisible={isModalVisible}
          dataLoadedState={dataLoadedState}
          suggestedColors={filteredResults}
          getClickedColor={(colorName) => this.getClickedColor(colorName)}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  availableColors: state.availableColors,
  isModalVisible: state.isModalVisible,
  dataLoadedState: state.dataLoadedState
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),
  mountColors: colors => dispatch(mountColors(colors)),
  setDataLoadedState: (state) => dispatch(setDataLoadedState(state))
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);

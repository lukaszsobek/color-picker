import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";

import '../styles/App.css';

import { hideModal, showModal, mountColors, setDataIsLoaded } from "../actions";
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
  }

  componentDidMount() {
    const { mountColors, setDataIsLoaded } = this.props;
    axios.get("http://www.mocky.io/v2/5a37a7403200000f10eb6a2d?mocky-delay=5s")
      .then(res => {
        mountColors(res.data);
        setDataIsLoaded(true);
        this.setInput();
      })
      .catch(err => {
        mountColors([]);
        setDataIsLoaded(true);
        this.setInput();
      });
  }

  onSubmit(e) {
    const { hideModal, availableColors } = this.props;

    const selectedColor = availableColors.filter(
      color => color.name === e.target.form_input.value
    )[0];

    const formattedColor = hexToRGBA(`#${selectedColor.hex}`, 0.5);

    const documentBody = document.querySelector("body");
    documentBody.style.backgroundColor = formattedColor;
    
    e.preventDefault();
    e.target.form_input.value = ""
    hideModal();
  }

  getFilteredResults() {
    const { availableColors } = this.props;
    const { inputValue } = this.state;

    return availableColors.filter(
      color => color.name.indexOf(inputValue) !== -1
    );
  }

  setInput(inputValue = this.state.inputValue) {
    this.setState(() => ({
      filteredResults: this.getFilteredResults(),
      inputValue
    }));   
  }

  onChange(e) {
    const { showModal, hideModal, availableColors } = this.props;
    const inputValue = e.target.value;

    this.setInput(inputValue);

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
    const { isModalVisible, isDataLoaded } = this.props;
    const { inputValue, filteredResults} = this.state;

    return (
      <div className="color-picker">
        <ColorPickerForm
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
          inputValue={inputValue}
        />
        <ColorPickerModal
          isModalVisible={isModalVisible}
          isDataLoaded={isDataLoaded}
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
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),
  mountColors: colors => dispatch(mountColors(colors)),
  setDataIsLoaded: () => dispatch(setDataIsLoaded())
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);

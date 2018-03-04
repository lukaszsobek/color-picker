import React, { Component } from 'react';
import '../styles/App.css';

import ColorPickerForm from "./ColorPickerForm";
import ColorPickerModal from "./ColorPickerModal";

class App extends Component {
  render() {
    return (
      <div className="color-picker">
        <ColorPickerForm />
        <ColorPickerModal />
      </div>
    );
  }
}

export default App;

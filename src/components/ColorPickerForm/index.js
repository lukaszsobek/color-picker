import React from "react";

const ColorPickerForm = props => {
    const {inputValue, onChange, onSubmit, dataLoadedState} = props;
    return (
        <form onSubmit={onSubmit}>
            <input
                name="form_input"
                onChange={onChange}
                autoComplete="off"
                value={inputValue}
            />
            <button disabled={dataLoadedState !== "loaded"}>
            { dataLoadedState !== "loaded" ? "Loading..." : "Accept" }
            </button>
        </form>
    );
}

export default ColorPickerForm;
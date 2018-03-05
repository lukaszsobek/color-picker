import React from "react";

const ColorPickerForm = props => {
    const {onChange, onSubmit} = props;
    return (
        <form onSubmit={onSubmit}>
            <input
                name="form_input"
                onChange={onChange}
                autoComplete="off"
            />
            <button>Accept</button>
        </form>
    );
}

export default ColorPickerForm;
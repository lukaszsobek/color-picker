import React from "react";

const ColorPickerModal = props => {
    const { isModalVisible, suggestedColors, chooseColor } = props;

    if(!isModalVisible) {
        return null;
    }

    return suggestedColors.map((color, key) => {
        const { hex, name } = color;

        return (
            <div
                key={key}
                onClick={() => console.log(color)}
                className="suggested-color"
            >
                <div
                className="color-preview"
                style={{ backgroundColor: "#" + hex }}
                />
                {name} (#{hex})
            </div>
        );
    });

}

export default ColorPickerModal;
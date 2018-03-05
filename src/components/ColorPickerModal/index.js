import React from "react";

const ColorPickerModal = props => {
    const { isModalVisible, suggestedColors, getClickedColor } = props;

    if(!isModalVisible) {
        return null;
    }

    return suggestedColors.map((color, key) => {
        const { hex, name } = color;

        return (
            <div
                key={key}
                onClick={() => getClickedColor(name)}
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
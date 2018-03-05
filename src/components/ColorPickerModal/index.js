import React from "react";

const ColorPickerModal = props => {
    const {
        isModalVisible,
        suggestedColors,
        getClickedColor,
        isDataLoaded
    } = props;

    if(!isModalVisible) {
        return null;
    }

    if(!isDataLoaded) {
        return <div className="loading-message">Loading...</div>
    }

    if(suggestedColors.length === 0) {
        return <div className="no-results">No matches.</div>
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
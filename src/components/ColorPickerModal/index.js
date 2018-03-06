import React from "react";

const ColorPickerModal = props => {
    const {
        isModalVisible,
        suggestedColors,
        getClickedColor,
        dataLoadedState
    } = props;

    if(!isModalVisible) {
        return null;
    }

    if(dataLoadedState === "loading") {
        return <div className="loading-message">Loading...</div>
    }

    if(dataLoadedState === "error") {
        return <div className="error-message">Error fetching suggestions.</div>
    }

    if(suggestedColors.length === 0) {
        return <div className="no-results">No matches.</div>
    }

    const SuggestedColorsList = suggestedColors.map((color, key) => {
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
                {name}
            </div>
        );
    });

    return (
        <div className="suggested-colors">
            { SuggestedColorsList }
        </div>
    );

}

export default ColorPickerModal;
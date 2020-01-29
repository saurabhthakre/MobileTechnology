import React from "react";

const PersonChild = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.body1}</p>
        </div>
    );
}


export default PersonChild;
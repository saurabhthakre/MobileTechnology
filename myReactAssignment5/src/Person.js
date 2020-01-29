import React from "react";

const Person = (props) => {
    return (
        <div className="person">
            {props.image}
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <h2>Comments:</h2>
            <p>{props.name}</p>
            <p>{props.body1}</p>
        </div>
    );
}


export default Person;
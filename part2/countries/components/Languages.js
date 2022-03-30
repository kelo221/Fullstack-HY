import React from "react";

const Languages = ({filtered}) => {
    const propertyNames = Object.values(filtered);

    const languages = propertyNames.map((language, index) =>
        <li key={index}>
            {language}
        </li>
    );

    return (
        <React.Fragment>
            <h3>Languages</h3>
            {languages}
        </React.Fragment>
    )
}

export default Languages;
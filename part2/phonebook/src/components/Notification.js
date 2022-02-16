import React  from "react";

const Notification = ({ message,colorNew }) => {
    if (message === null) {
        return null
    }



    return (
        <div className='error' style={{color: colorNew}}>
            {message}
        </div>
    )
}

export default Notification
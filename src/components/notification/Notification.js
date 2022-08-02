import React from 'react';
import PropTypes from 'prop-types';


const Notification = ({message}) =>{
    return (
        <>
        <h3>{message}</h3>
        </>
    )
}


export default Notification


Notification.prototype = {
    message: PropTypes.string
}